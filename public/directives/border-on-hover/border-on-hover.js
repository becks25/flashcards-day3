app.directive('borderOnHover', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      element.on('mouseenter', function(){
        console.log('here');
        element.addClass('border-on-hover');
        console.log(element);
      });

      element.on('mouseleave', function(){
        element.removeClass('border-on-hover');
      });
    }
  }
});