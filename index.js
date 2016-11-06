function receivesAFunction(func) {
  func();
}

function returnsANamedFunction() {
  return function hoowah(){console.log('heaaaaah')};
}

function returnsAnAnonymousFunction() {
  return function(){console.log('bleeeergh')}
}
