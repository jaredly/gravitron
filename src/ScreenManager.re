
module Screen = {
  type nextScreen('context, 'a, 'b) =
    | Same('context, 'a)
    | Transition('context, 'b)
    | Stateless('context)
    | TransitionNoContext('b)
    ;
  type transitionFn('context, 'state, 'transition) = ('context, 'state, Reprocessing.glEnvT) => nextScreen('context, 'state, 'transition);
  type screen('context, 'state, 'transition) = {
    run: transitionFn('context, 'state, 'transition),
    keyPressed: transitionFn('context, 'state, 'transition),
    mouseDown: transitionFn('context, 'state, 'transition),
    mouseUp: transitionFn('context, 'state, 'transition),
    backPressed: ('context, 'state, Reprocessing.glEnvT) => option(nextScreen('context, 'state, 'transition)),
  };
  type screenable('context, 'transition, 'wrappedState) =
    | Screen('state, screen('context, 'state, 'transition), 'state => 'wrappedState): screenable('context, 'transition, 'wrappedState);
};

open Screen;

let empty = {
  run: (ctx, state, _) => Same(ctx, state),
  mouseDown: (ctx, state, _) => Same(ctx, state),
  mouseUp: (ctx, state, _) => Same(ctx, state),
  keyPressed: (ctx, state, _) => Same(ctx, state),
  backPressed: (_, _, _) => None,
};

let stateless = (
  ~run=(ctx, _) => Stateless(ctx),
  ~mouseDown=(ctx, _) => Stateless(ctx),
  ~mouseUp=(ctx, _) => Stateless(ctx),
  ~keyPressed=(ctx, _) => Stateless(ctx),
  ~backPressed=(_, _) => None,
  ()
) => {
  run: (ctx, (), env) => run(ctx, env),
  mouseDown: (ctx, (), env) => mouseDown(ctx, env),
  mouseUp: (ctx, (), env) => mouseUp(ctx, env),
  keyPressed: (ctx, (), env) => keyPressed(ctx, env),
  backPressed: (ctx, (), env) => backPressed(ctx, env),
};

let module Helpers = {
  let process = (~transitionTo, ~context, ~env, ~innerState, ~wrapper, run) => {
    switch (run(context, innerState, env)) {
    | Same(context, newInnerState) => (context, wrapper(newInnerState))
    | Transition(context, transition) => (context, transitionTo(context, transition, env))
    | Stateless(context) => (context, wrapper(innerState))
    | TransitionNoContext(transition) => (context, transitionTo(context, transition, env))
    }
  };

  let draw = (transitionTo, getScreen, (context, state), env) => {
    let Screen(innerState, screen, wrapper) = getScreen(state);
    process(~transitionTo, ~context, ~env, ~innerState, ~wrapper, screen.run);
  };

  let keyPressed = (transitionTo, getScreen, (context, state), env) => {
    let Screen(innerState, screen, wrapper) = getScreen(state);
    process(~transitionTo, ~context, ~env, ~innerState, ~wrapper, screen.keyPressed);
  };

  let mouseDown = (transitionTo, getScreen, (context, state), env) => {
    let Screen(innerState, screen, wrapper) = getScreen(state);
    process(~transitionTo, ~context, ~env, ~innerState, ~wrapper, screen.mouseDown);
  };

  let mouseUp = (transitionTo, getScreen, (context, state), env) => {
    let Screen(innerState, screen, wrapper) = getScreen(state);
    process(~transitionTo, ~context, ~env, ~innerState, ~wrapper, screen.mouseUp);
  };

  let backPressed = (transitionTo, getScreen, (context, state), env) => {
    let Screen(innerState, screen, wrapper) = getScreen(state);
    switch (screen.backPressed(context, innerState, env)) {
    | None => None
    | Some(value) => Some(switch value {
      | Same(context, newInnerState) => (context, wrapper(newInnerState))
      | Transition(context, transition) => (context, transitionTo(context, transition, env))
      | Stateless(context) => (context, wrapper(innerState))
      | TransitionNoContext(transition) => (context, transitionTo(context, transition, env))
    })
    }
  };
};

let run = (~title=?, ~transitionTo, ~setup, ~getScreen, ()) => {
  Reprocessing.run(
    ~setup,
    ~draw=Helpers.draw(transitionTo, getScreen),
    ~mouseDown=Helpers.mouseDown(transitionTo, getScreen),
    ~mouseUp=Helpers.mouseUp(transitionTo, getScreen),
    ~keyPressed=Helpers.keyPressed(transitionTo, getScreen),
    ~backPressed=Helpers.backPressed(transitionTo, getScreen),
    ~title=?title,
    ()
  )
};