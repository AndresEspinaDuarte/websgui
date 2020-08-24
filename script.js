(function($) {
  
  'use strict';

  // variables
  var 
      $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedThird = $('.third .is-animated'),
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
      $isAnimatedTwentyone = $('.twentyone .is-animated'),
      $isAnimatedTwentytwo = $('.twentytwo .is-animated'),
      $isAnimatedTwentythree = $('.twentythree .is-animated'),
      $isAnimatedTwentyfour = $('.twentyfour .is-animated'),
      $isAnimatedTwentyfive = $('.twentyfive .is-animated'),
      $isAnimatedTwentysix = $('.twentysix .is-animated'),
      $isAnimatedTwentyseven = $('.twentyseven .is-animated'),
      $isAnimatedTwentyeight = $('.twentyeight .is-animated'),
      $isAnimatedTwentynine = $('.twentynine .is-animated'),
      $isAnimatedThirty = $('.thirty .is-animated'),
      $isAnimatedThirtyone = $('.thirtyone .is-animated'),
      $isAnimatedThirtytwo = $('.thirtytwo .is-animated'),
      $isAnimatedThirtythree = $('.thirtythree .is-animated'),
      $isAnimatedThirtyfour = $('.thirtyfour .is-animated'),
      $isAnimatedThirtyfive = $('.thirtyfive .is-animated'),
      $isAnimatedThirtysix = $('.thirtysix .is-animated'),
      $isAnimatedThirtyseven = $('.thirtyseven .is-animated'),
      $isAnimatedThirtyeight = $('.thirtyeight .is-animated'),
      $isAnimatedThirtynine = $('.thirtynine .is-animated');

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
        $isAnimatedFive.eq(0).css('animation-delay', '.222s');
        $isAnimatedFive.eq(1).css('animation-delay', '.444s');
        $isAnimatedFive.eq(2).css('animation-delay', '.666s');
        $isAnimatedFive.eq(3).css('animation-delay', '.8888s');
$isAnimatedFive
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 ) && nextIndex == 6 ) {
        $isAnimatedSix.addClass('animated fadeInUp'); 
        $isAnimatedSix.eq(0).css('animation-delay', '.222s');
        $isAnimatedSix.eq(1).css('animation-delay', '.444s');
        $isAnimatedSix.eq(2).css('animation-delay', '.666s');
$isAnimatedSix
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 ) && nextIndex == 7 ) {
        $isAnimatedSeven.addClass('animated fadeInUp'); 
        $isAnimatedSeven.eq(0).css('animation-delay', '.222s');
        $isAnimatedSeven.eq(1).css('animation-delay', '.444s');
        $isAnimatedSeven.eq(2).css('animation-delay', '.666s');
        $isAnimatedSeven.eq(3).css('animation-delay', '.888s');
$isAnimatedSeven
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 ) && nextIndex == 8 ) {
        $isAnimatedEight.addClass('animated fadeInUp'); 
        $isAnimatedEight.eq(0).css('animation-delay', '.222s');
        $isAnimatedEight.eq(1).css('animation-delay', '.444s');
        $isAnimatedEight.eq(2).css('animation-delay', '.666s');
        $isAnimatedEight.eq(3).css('animation-delay', '.8888s');
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
        $isAnimatedTwelve.eq(0).css('animation-delay', '.222s');
        $isAnimatedTwelve.eq(1).css('animation-delay', '.444s');
        $isAnimatedTwelve.eq(2).css('animation-delay', '.666s');
        $isAnimatedTwelve.eq(3).css('animation-delay', '.8888s');
$isAnimatedTwelve
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 ) && nextIndex == 13 ) {
        $isAnimatedThirteen.addClass('animated fadeInUp'); 
        $isAnimatedThirteen.eq(0).css('animation-delay', '.222s');
        $isAnimatedThirteen.eq(1).css('animation-delay', '.444s');
        $isAnimatedThirteen.eq(2).css('animation-delay', '.666s');
        $isAnimatedThirteen.eq(3).css('animation-delay', '.8888s');
$isAnimatedThirteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 ) && nextIndex == 14 ) {
        $isAnimatedFourteen.addClass('animated fadeInUp'); 
        $isAnimatedFourteen.eq(0).css('animation-delay', '.222s');
        $isAnimatedFourteen.eq(1).css('animation-delay', '.444s');
        $isAnimatedFourteen.eq(2).css('animation-delay', '.666s');
        $isAnimatedFourteen.eq(3).css('animation-delay', '.8888s');
$isAnimatedFourteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 ) && nextIndex == 15 ) {
        $isAnimatedFifteen.addClass('animated fadeInUp'); 
        $isAnimatedFifteen.eq(0).css('animation-delay', '.222s');
        $isAnimatedFifteen.eq(1).css('animation-delay', '.444s');
        $isAnimatedFifteen.eq(2).css('animation-delay', '.666s');
        $isAnimatedFifteen.eq(3).css('animation-delay', '.8888s');
$isAnimatedFifteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 ) && nextIndex == 16 ) {
        $isAnimatedSixteen.addClass('animated fadeInUp'); 
        $isAnimatedSixteen.eq(0).css('animation-delay', '.222s');
        $isAnimatedSixteen.eq(1).css('animation-delay', '.444s');
        $isAnimatedSixteen.eq(2).css('animation-delay', '.666s');
        $isAnimatedSixteen.eq(3).css('animation-delay', '.8888s');
$isAnimatedSixteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 ) && nextIndex == 17 ) {
        $isAnimatedSeventeen.addClass('animated fadeInUp'); 
        $isAnimatedSeventeen.eq(0).css('animation-delay', '.222s');
        $isAnimatedSeventeen.eq(1).css('animation-delay', '.444s');
        $isAnimatedSeventeen.eq(2).css('animation-delay', '.666s');
        $isAnimatedSeventeen.eq(3).css('animation-delay', '.8888s');
$isAnimatedSeventeen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 ) && nextIndex == 18 ) {
        $isAnimatedEighteen.addClass('animated fadeInUp'); 
        $isAnimatedEighteen.eq(0).css('animation-delay', '.222s');
        $isAnimatedEighteen.eq(1).css('animation-delay', '.444s');
        $isAnimatedEighteen.eq(2).css('animation-delay', '.666s');
        $isAnimatedEighteen.eq(3).css('animation-delay', '.8888s');
$isAnimatedEighteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 ) && nextIndex == 19 ) {
        $isAnimatedNineteen.addClass('animated fadeInUp'); 
        $isAnimatedNineteen.eq(0).css('animation-delay', '.222s');
        $isAnimatedNineteen.eq(1).css('animation-delay', '.444s');
        $isAnimatedNineteen.eq(2).css('animation-delay', '.666s');
        $isAnimatedNineteen.eq(3).css('animation-delay', '.8888s');
$isAnimatedNineteen
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 ) && nextIndex == 20 ) {
        $isAnimatedTwenty.addClass('animated fadeInUp'); 
        $isAnimatedTwenty.eq(0).css('animation-delay', '.222s');
        $isAnimatedTwenty.eq(1).css('animation-delay', '.444s');
        $isAnimatedTwenty.eq(2).css('animation-delay', '.666s');
        $isAnimatedTwenty.eq(3).css('animation-delay', '.8888s');
$isAnimatedTwenty
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 ) && nextIndex == 21 ) {
        $isAnimatedTwentyone.addClass('animated fadeInUp'); 
        $isAnimatedTwentyone.eq(0).css('animation-delay', '.222s');
        $isAnimatedTwentyone.eq(1).css('animation-delay', '.444s');
        $isAnimatedTwentyone.eq(2).css('animation-delay', '.666s');
        $isAnimatedTwentyone.eq(3).css('animation-delay', '.8888s');
$isAnimatedTwentyone
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 ) && nextIndex == 22 ) {
        $isAnimatedTwentytwo.addClass('animated fadeInUp'); 
        $isAnimatedTwentytwo.eq(0).css('animation-delay', '.222s');
        $isAnimatedTwentytwo.eq(1).css('animation-delay', '.444s');
        $isAnimatedTwentytwo.eq(2).css('animation-delay', '.666s');
        $isAnimatedTwentytwo.eq(3).css('animation-delay', '.8888s');
$isAnimatedTwentytwo
        .css('animation-duration', '2.22s');

      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 ) && nextIndex == 23 ) {
        $isAnimatedTwentythree.addClass('animated fadeInUp'); 
        $isAnimatedTwentythree.eq(0).css('animation-delay', '.222s');
        $isAnimatedTwentythree.eq(1).css('animation-delay', '.444s');
        $isAnimatedTwentythree.eq(2).css('animation-delay', '.666s');
        $isAnimatedTwentythree.eq(3).css('animation-delay', '.8888s');
$isAnimatedTwentythree
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 ) && nextIndex == 24 ) {
        $isAnimatedTwentyfour.addClass('animated fadeInUp'); 
        $isAnimatedTwentyfour.eq(0).css('animation-delay', '.222s');
        $isAnimatedTwentyfour.eq(1).css('animation-delay', '.444s');
        $isAnimatedTwentyfour.eq(2).css('animation-delay', '.666s');
        $isAnimatedTwentyfour.eq(3).css('animation-delay', '.8888s');
$isAnimatedTwentyfour
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 ) && nextIndex == 25 ) {
        $isAnimatedTwentyfive.addClass('animated fadeInUp'); 
        $isAnimatedTwentyfive.eq(0).css('animation-delay', '.222s');
        $isAnimatedTwentyfive.eq(1).css('animation-delay', '.444s');
        $isAnimatedTwentyfive.eq(2).css('animation-delay', '.666s');
        $isAnimatedTwentyfive.eq(3).css('animation-delay', '.8888s');
$isAnimatedTwentyfive
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 ) && nextIndex == 26 ) {
        $isAnimatedTwentysix.addClass('animated fadeInUp'); 
        $isAnimatedTwentysix.eq(0).css('animation-delay', '.222s');
        $isAnimatedTwentysix.eq(1).css('animation-delay', '.444s');
        $isAnimatedTwentysix.eq(2).css('animation-delay', '.666s');
        $isAnimatedTwentysix.eq(3).css('animation-delay', '.8888s');
$isAnimatedTwentysix
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 ) && nextIndex == 27 ) {
        $isAnimatedTwentyseven.addClass('animated fadeInUp'); 
        $isAnimatedTwentyseven.eq(0).css('animation-delay', '.222s');
        $isAnimatedTwentyseven.eq(1).css('animation-delay', '.444s');
        $isAnimatedTwentyseven.eq(2).css('animation-delay', '.666s');
        $isAnimatedTwentyseven.eq(3).css('animation-delay', '.8888s');
$isAnimatedTwentyseven
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 ) && nextIndex == 28 ) {
        $isAnimatedTwentyeight.addClass('animated fadeInUp'); 
        $isAnimatedTwentyeight.eq(0).css('animation-delay', '.222s');
        $isAnimatedTwentyeight.eq(1).css('animation-delay', '.444s');
        $isAnimatedTwentyeight.eq(2).css('animation-delay', '.666s');
        $isAnimatedTwentyeight.eq(3).css('animation-delay', '.8888s');
$isAnimatedTwentyeight
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28 ) && nextIndex == 29 ) {
        $isAnimatedTwentynine.addClass('animated fadeInUp'); 
        $isAnimatedTwentynine.eq(0).css('animation-delay', '.222s');
        $isAnimatedTwentynine.eq(1).css('animation-delay', '.444s');
        $isAnimatedTwentynine.eq(2).css('animation-delay', '.666s');
        $isAnimatedTwentynine.eq(3).css('animation-delay', '.8888s');
$isAnimatedTwentynine
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28 || index == 29 ) && nextIndex == 30 ) {
        $isAnimatedThirty.addClass('animated fadeInUp'); 
        $isAnimatedThirty.eq(0).css('animation-delay', '.222s');
        $isAnimatedThirty.eq(1).css('animation-delay', '.444s');
        $isAnimatedThirty.eq(2).css('animation-delay', '.666s');
        $isAnimatedThirty.eq(3).css('animation-delay', '.8888s');
$isAnimatedThirty
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28 || index == 29 || index == 30 ) && nextIndex == 31 ) {
        $isAnimatedThirtyone.addClass('animated fadeInUp'); 
        $isAnimatedThirtyone.eq(0).css('animation-delay', '.222s');
        $isAnimatedThirtyone.eq(1).css('animation-delay', '.444s');
        $isAnimatedThirtyone.eq(2).css('animation-delay', '.666s');
        $isAnimatedThirtyone.eq(3).css('animation-delay', '.8888s');
$isAnimatedThirtyone
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28 || index == 29 || index == 30 || index == 31 ) && nextIndex == 32 ) {
        $isAnimatedThirtytwo.addClass('animated fadeInUp'); 
        $isAnimatedThirtytwo.eq(0).css('animation-delay', '.222s');
        $isAnimatedThirtytwo.eq(1).css('animation-delay', '.444s');
        $isAnimatedThirtytwo.eq(2).css('animation-delay', '.666s');
        $isAnimatedThirtytwo.eq(3).css('animation-delay', '.8888s');
$isAnimatedThirtytwo
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28 || index == 29 || index == 30 || index == 31 || index == 32 ) && nextIndex == 33 ) {
        $isAnimatedThirtythree.addClass('animated fadeInUp'); 
        $isAnimatedThirtythree.eq(0).css('animation-delay', '.222s');
        $isAnimatedThirtythree.eq(1).css('animation-delay', '.444s');
        $isAnimatedThirtythree.eq(2).css('animation-delay', '.666s');
        $isAnimatedThirtythree.eq(3).css('animation-delay', '.8888s');
$isAnimatedThirtythree
        .css('animation-duration', '2.22s');
      }

      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28 || index == 29 || index == 30 || index == 31 || index == 32 || index == 33 ) && nextIndex == 34 ) {
        $isAnimatedThirtyfour.addClass('animated fadeInUp'); 
        $isAnimatedThirtyfour.eq(0).css('animation-delay', '.222s');
        $isAnimatedThirtyfour.eq(1).css('animation-delay', '.444s');
        $isAnimatedThirtyfour.eq(2).css('animation-delay', '.666s');
        $isAnimatedThirtyfour.eq(3).css('animation-delay', '.8888s');
$isAnimatedThirtyfour
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28 || index == 29 || index == 30 || index == 31 || index == 32 || index == 33 || index == 34 ) && nextIndex == 35 ) {
        $isAnimatedThirtyfive.addClass('animated fadeInUp'); 
        $isAnimatedThirtyfive.eq(0).css('animation-delay', '.222s');
        $isAnimatedThirtyfive.eq(1).css('animation-delay', '.444s');
        $isAnimatedThirtyfive.eq(2).css('animation-delay', '.666s');
        $isAnimatedThirtyfive.eq(3).css('animation-delay', '.8888s');
$isAnimatedThirtyfive
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28 || index == 29 || index == 30 || index == 31 || index == 32 || index == 33 || index == 34 || index == 35 ) && nextIndex == 36 ) {
        $isAnimatedThirtysix.addClass('animated fadeInUp'); 
        $isAnimatedThirtysix.eq(0).css('animation-delay', '.222s');
        $isAnimatedThirtysix.eq(1).css('animation-delay', '.444s');
        $isAnimatedThirtysix.eq(2).css('animation-delay', '.666s');
        $isAnimatedThirtysix.eq(3).css('animation-delay', '.8888s');
$isAnimatedThirtysix
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28 || index == 29 || index == 30 || index == 31 || index == 32 || index == 33 || index == 34 || index == 35 || index == 36 ) && nextIndex == 37 ) {
        $isAnimatedThirtyseven.addClass('animated fadeInUp'); 
        $isAnimatedThirtyseven.eq(0).css('animation-delay', '.222s');
        $isAnimatedThirtyseven.eq(1).css('animation-delay', '.444s');
        $isAnimatedThirtyseven.eq(2).css('animation-delay', '.666s');
        $isAnimatedThirtyseven.eq(3).css('animation-delay', '.8888s');
$isAnimatedThirtyseven
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28 || index == 29 || index == 30 || index == 31 || index == 32 || index == 33 || index == 34 || index == 35 || index == 36 || index == 37 ) && nextIndex == 38 ) {
        $isAnimatedThirtyeight.addClass('animated fadeInUp'); 
        $isAnimatedThirtyeight.eq(0).css('animation-delay', '.222s');
        $isAnimatedThirtyeight.eq(1).css('animation-delay', '.444s');
        $isAnimatedThirtyeight.eq(2).css('animation-delay', '.666s');
        $isAnimatedThirtyeight.eq(3).css('animation-delay', '.8888s');
$isAnimatedThirtyeight
        .css('animation-duration', '2.22s');
      }
      else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9 || index == 10 || index == 11 || index == 12 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21 || index == 22 || index == 23 || index == 24 || index == 25 || index == 26 || index == 27 || index == 28 || index == 29 || index == 30 || index == 31 || index == 32 || index == 33 || index == 34 || index == 35 || index == 36 || index == 37 || index == 38 ) && nextIndex == 39 ) {
        $isAnimatedThirtynine.addClass('animated fadeInUp'); 
        $isAnimatedThirtynine.eq(0).css('animation-delay', '.222s');
        $isAnimatedThirtynine.eq(1).css('animation-delay', '.444s');
        $isAnimatedThirtynine.eq(2).css('animation-delay', '.666s');
        $isAnimatedThirtynine.eq(3).css('animation-delay', '.8888s');
$isAnimatedThirtynine
        .css('animation-duration', '2.22s');
      }
    }
  });
  
})(jQuery);
