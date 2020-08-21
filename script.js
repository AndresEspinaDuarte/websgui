(function($) {
  
  'use strict';

  // variables
  var 
      $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFive = $('.five .is-animated'),
      $isAnimatedSix = $('.six .is-animated'),
      $isAnimatedSeven = $('.seven .is-animated'),
      $isAnimatedEight = $('.eight .is-animated'),
      $isAnimatedNine = $('.nine .is-animated'),
      $isAnimatedTen = $('.ten .is-animated'),
      $isAnimatedEleven = $('.eleven .is-animated'),
      $isAnimatedTwelve = $('.twelve .is-animated'),
      $isAnimatedThirteen = $('.thirteen .is-animated'),
      $isAnimatedFourteen = $('.fourteen .is-animated'),
      $isAnimatedFifteen = $('.fifteen .is-animated'),
      $isAnimatedSixteen = $('.sixteen .is-animated'),
      $isAnimatedSeventeen = $('.seventeen .is-animated'),
      $isAnimatedEighteen = $('.eighteen .is-animated'),
      $isAnimatedNineteen = $('.nineteen .is-animated'),
      $isAnimatedTwenty = $('.twenty .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single');

  // initialize fullPage
  $('#fullpage').fullpage({

    navigation: true,
    onLeave: function(index, nextIndex, direction) {
    
      /**
      * use the following condition: 
      *
      *   if( index == 1 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first section to another sections 
      */
      
      // first animation
      if( index == 1 && nextIndex == 2 ) { 
        $isAnimatedSecond.addClass('animated fadeInUp'); 
        $isAnimatedSecond.eq(0).css('animation-delay', '.222s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.444s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.666s');
$isAnimatedSecond
        .css('animation-duration', '2.22s');
      }

    /**
      * use the following condition: 
      *
      *   else if( index == 2 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) from the first section to the third one 
      */
      
      // second animation
      else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
        $isAnimatedThird.addClass('animated fadeInUp'); 
        $isAnimatedThird.eq(0).css('animation-delay', '.222s');
        $isAnimatedThird.eq(1).css('animation-delay', '.444s');
        $isAnimatedThird.eq(2).css('animation-delay', '.666s');
        $isAnimatedThird.eq(3).css('animation-delay', '.8888s');
$isAnimatedThird
        .css('animation-duration', '2.22s');

      }

      
     /**
      * use the following condition:
      *
      *   else if( index == 3 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first or second section to the fourth one 
      */
      
      // third animation
      else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
        $isAnimatedFourth.addClass('animated fadeInUp'); 
        $isAnimatedFourth.eq(0).css('animation-delay', '.222s');
        $isAnimatedFourth.eq(1).css('animation-delay', '.444s');
        $isAnimatedFourth.eq(2).css('animation-delay', '.666s');
        $isAnimatedFourth.eq(3).css('animation-delay', '.8888s');
$isAnimatedFourth
        .css('animation-duration', '2.22s');

      }

      else if( ( index == 1 || index == 2 || index == 3 || index == 4 ) && nextIndex == 5 ) {
        $isAnimatedFive.addClass('animated fadeInUp'); 
        $isAnimatedFive
        .css('animation-delay', '.222s');
$isAnimatedFive
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 ) && nextIndex == 6 ) {
        $isAnimatedSix.addClass('animated fadeInUp'); 
        $isAnimatedSix
        .css('animation-delay', '.222s');
$isAnimatedSix
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 ) && nextIndex == 7 ) {
        $isAnimatedSeven.addClass('animated fadeInUp'); 
        $isAnimatedSeven
        .css('animation-delay', '.222s');
$isAnimatedSeven
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 ) && nextIndex == 8 ) {
        $isAnimatedEight.addClass('animated fadeInUp'); 
        $isAnimatedEight
        .css('animation-delay', '.222s');
$isAnimatedEight
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 ) && nextIndex == 9 ) {
        $isAnimatedNine.addClass('animated fadeInUp'); 
        $isAnimatedNine
        .css('animation-delay', '.222s');
$isAnimatedNine
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 ) && nextIndex == 10 ) {
        $isAnimatedTen.addClass('animated fadeInUp'); 
        $isAnimatedTen
        .css('animation-delay', '.222s');
$isAnimatedTen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 ) && nextIndex == 11 ) {
        $isAnimatedEleven.addClass('animated fadeInUp'); 
        $isAnimatedEleven
        .css('animation-delay', '.222s');
$isAnimatedEleven
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 ) && nextIndex == 12 ) {
        $isAnimatedTwelve.addClass('animated fadeInUp'); 
        $isAnimatedTwelve
        .css('animation-delay', '.222s');
$isAnimatedTwelve
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 ) && nextIndex == 13 ) {
        $isAnimatedThirteen.addClass('animated fadeInUp'); 
        $isAnimatedThirteen
        .css('animation-delay', '.222s');
$isAnimatedThirteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 ) && nextIndex == 14 ) {
        $isAnimatedFourteen.addClass('animated fadeInUp'); 
        $isAnimatedFourteen
        .css('animation-delay', '.222s');
$isAnimatedFourteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 ) && nextIndex == 15 ) {
        $isAnimatedFifteen.addClass('animated fadeInUp'); 
        $isAnimatedFifteen
        .css('animation-delay', '.222s');
$isAnimatedFifteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 ) && nextIndex == 16 ) {
        $isAnimatedSixteen.addClass('animated fadeInUp'); 
        $isAnimatedSixteen
        .css('animation-delay', '.222s');
$isAnimatedSixteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 ) && nextIndex == 17 ) {
        $isAnimatedSeventeen.addClass('animated fadeInUp'); 
        $isAnimatedSeventeen
        .css('animation-delay', '.222s');
$isAnimatedSeventeen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 ) && nextIndex == 18 ) {
        $isAnimatedEighteen.addClass('animated fadeInUp'); 
        $isAnimatedEighteen
        .css('animation-delay', '.222s');
$isAnimatedEighteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 ) && nextIndex == 19 ) {
        $isAnimatedNineteen.addClass('animated fadeInUp'); 
        $isAnimatedNineteen
        .css('animation-delay', '.222s');
$isAnimatedNineteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 ) && nextIndex == 20 ) {
        $isAnimatedTwenty.addClass('animated fadeInUp'); 
        $isAnimatedTwenty
        .css('animation-delay', '.222s');
$isAnimatedTwenty
        .css('animation-duration', '2.22s');

      }
    }

  });
  
})(jQuery);
