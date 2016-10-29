;(function() {
  'use strict';

  angular
    .module('sample-app')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$compile', '$scope'];

  function MainController($state, $compile, $scope){

    var _this = this;

    this.mainOptions = {
      sectionsColor: ['#ffffff', '#ffeb0a', '#ffffff', '#302614', '#ccddff'],
			anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
			menu: '#menu',
      navigation: true,
      navigationPosition: 'right',
      responsiveWidth: 0,
      responsiveHeight: 0,
      scrollOverflow: true


    };

    this.moog = function(merg){ console.log(merg); };

    this.slides = [
      {
        title: 'Simple',
        description: 'Easy to use. Configurable and customizable.',
        src: 'images/1.png'
      },
      {
        title: 'Cool',
        description: 'It just looks cool. Impress everybody with a simple and modern web design!',
        src: 'images/2.png'
      },
      {
        title: 'Compatible',
        description: 'Working in modern and old browsers too!',
        src: 'images/3.png'
      }
    ];

    this.addSlide = function() {
      _this.slides.push({
        title: 'New Slide',
        description: 'I made a new slide!',
        src: 'images/1.png'
      });

      //$compile(angular.element($('.slide')))($scope);
    };

  }

})();
