var lazymodule = angular.module('lazyHook', ['ui.router', 'oc.lazyLoad']);

lazymodule.run(function($transitions, $q, $ocLazyLoad) {
  
  // Register global hook to lazy load components
  
  // This function returns true if a state has a lazy component
  function hasLazyComponent(state) {
    return state.lazyComponent != null;
  }
  
  // This function lazy loads a state's component, 
  // then removes the lazyComponent metadata
  function loadComponent(state) {
      return $ocLazyLoad.load(state.lazyComponent)
          .then(() => delete state.lazyComponent)
  }
  
  // This function lazy loads any lazy components
  // for states being entered.
  
  function lazyLoadComponents($transition$) {
    let promises = $transition$.entering()
        .filter(hasLazyComponent)
        .map(loadComponent)
        
    // return a promise for all the lazy components loading
    return $q.all(promises);
  }
  
  // This criteria checks if any entering states have a lazy component
  let transitionCriteria = { entering: hasLazyComponent };
  
  // Register the global hook. 
  // This hook is run *before* the transition starts.
  // The transition waits for the hooks promise to settle before continuing.
  $transitions.onBefore(transitionCriteria, lazyLoadComponents)
});