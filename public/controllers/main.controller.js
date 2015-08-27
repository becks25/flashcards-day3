app.controller('MainController', function ($scope, FlashCardsFactory, $log, ScoreFactory) {

  $scope.categories = FlashCardsFactory.categories;
  $scope.selectedCategory;
  $scope.loading = true;

  $scope.getCategoryCards = function (category) {
    $scope.loading = false;
    FlashCardsFactory.getFlashCards(category).then(function(cards){
      console.log(cards)
      ScoreFactory.correct = 0;
      ScoreFactory.incorrect = 0;
      $scope.selectedCategory = category;
      $scope.flashCards = cards;
      $scope.loading = true;
    }).catch(function(err){
      $log.error('error getting cards:', err);
    });
  };

  $scope.getCategoryCards();

  $scope.answerQuestion = function (answer, flashCard) {
    if (flashCard.answered) return;
    flashCard.answered = true;
    flashCard.answeredCorrectly = answer.correct;
    if (answer.correct) ScoreFactory.correct++;
    else ScoreFactory.incorrect++;
  };
});
