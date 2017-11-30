


module T = {
  type nextScreen('context, 'a, 'b) = Same('context, 'a) | Transition('context, 'b);
  type transitionFn('context, 'state, 'transition) = ('context, 'state, Reprocessing.glEnvT) => nextScreen('context, 'state, 'transition);
  type screen('context, 'state, 'transition) = {
    run: transitionFn('context, 'state, 'transition),
    keyPressed: transitionFn('context, 'state, 'transition),
    mouseDown: transitionFn('context, 'state, 'transition),
  };
  type screenable('context, 'transition) =
    | Screen('state, screen('context, 'state, 'transition)): screenable('context, 'transition);
};
open T;

let run = (transitionTo, (context, Screen(innerState, screen)), env) => {
  switch (screen.run(context, innerState, env)) {
  | Same(context, newInnerState) => (context, Screen(newInnerState, screen))
  | Transition(context, transition) => (context, transitionTo(context, transition, env))
  }
};

let keyPressed = (transitionTo, (context, Screen(innerState, screen)), env) => {
  switch (screen.keyPressed(context, innerState, env)) {
  | Same(context, newInnerState) => (context, Screen(newInnerState, screen))
  | Transition(context, transition) => (context, transitionTo(context, transition, env))
  }
};

let mouseDown = (transitionTo, (context, Screen(innerState, screen)), env) => {
  switch (screen.mouseDown(context, innerState, env)) {
  | Same(context, newInnerState) => (context, Screen(newInnerState, screen))
  | Transition(context, transition) => (context, transitionTo(context, transition, env))
  }
};

let run = (~transitionTo, ~setup) => {
  Reprocessing.run(
    ~setup,
    ~draw=run(transitionTo),
    ~mouseDown=mouseDown(transitionTo),
    ~keyPressed=keyPressed(transitionTo),
    ()
  )
};

let empty = {
  run: (ctx, state, _) => Same(ctx, state),
  mouseDown: (ctx, state, _) => Same(ctx, state),
  keyPressed: (ctx, state, _) => Same(ctx, state)
};
