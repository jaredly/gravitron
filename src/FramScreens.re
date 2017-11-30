
module T = {
  type nextScreen('context, 'a, 'b) = Same('context, 'a) | Transition('context, 'b);
  type transitionFn('context, 'state, 'transition) = ('context, 'state, Reprocessing.glEnvT) => nextScreen('context, 'state, 'transition);
  type screen('context, 'state, 'transition) = {
    run: transitionFn('context, 'state, 'transition),
    keyPressed: transitionFn('context, 'state, 'transition),
    mouseDown: transitionFn('context, 'state, 'transition),
  };
};
open T;

module Screen = {
  type screenable('context, 'transition, 'wrappedState) =
    | Screen('state, screen('context, 'state, 'transition), 'state => 'wrappedState): screenable('context, 'transition, 'wrappedState);
};

open Screen;

let empty = {
  run: (ctx, state, _) => Same(ctx, state),
  mouseDown: (ctx, state, _) => Same(ctx, state),
  keyPressed: (ctx, state, _) => Same(ctx, state)
};


let draw = (transitionTo, getScreen, (context, state), env) => {
  let Screen(innerState, screen, wrapper) = getScreen(state);
  switch (screen.run(context, innerState, env)) {
  | Same(context, newInnerState) => (context, wrapper(newInnerState))
  | Transition(context, transition) => (context, transitionTo(context, transition, env))
  }
};

let keyPressed = (transitionTo, getScreen, (context, state), env) => {
  let Screen(innerState, screen, wrapper) = getScreen(state);
  switch (screen.keyPressed(context, innerState, env)) {
  | Same(context, newInnerState) => (context, wrapper(newInnerState))
  | Transition(context, transition) => (context, transitionTo(context, transition, env))
  }
};

let mouseDown = (transitionTo, getScreen, (context, state), env) => {
  let Screen(innerState, screen, wrapper) = getScreen(state);
  switch (screen.mouseDown(context, innerState, env)) {
  | Same(context, newInnerState) => (context, wrapper(newInnerState))
  | Transition(context, transition) => (context, transitionTo(context, transition, env))
  }
};

let run = (~transitionTo, ~setup, ~getScreen, ~perfMonitorFont) => {
  Reprocessing.run(
    ~setup,
    ~draw=draw(transitionTo, getScreen),
    ~mouseDown=mouseDown(transitionTo, getScreen),
    ~keyPressed=keyPressed(transitionTo, getScreen),
    ~perfMonitorFont,
    ()
  )
};