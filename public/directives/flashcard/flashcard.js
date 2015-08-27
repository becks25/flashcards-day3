app.directive('flashcard', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/flashcard/flashcard.html',
    scope: {
      card: '='
    }
  }
});