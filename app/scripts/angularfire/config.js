angular.module('firebase.config', [])
  .constant('FBURL', 'https://costpad.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');