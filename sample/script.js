

// $(window).onLeave(function () {

//     $('.animation-test').each(function () {
//         var imagePos = $(this).offset().top;
//         var imageHeight = $(this).height();
//         var topOfWindow = $(window).scrollTop();

//         if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
//             $(this).addClass("slideRight");
//         } else {
//             $(this).removeClass("slideRight");
//         }
//     });
// });
//     $(document).ready(function() {
//       $('#fullpage').fullpage({
//           onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
//               var leavingSlide = $(this);

//               //leaving the first slide of the 2nd Section to the right
//               if(index == 2 && slideIndex == 0 && direction == 'right'){
//                   alert("Leaving the fist slide!!");
//               }

//               //leaving the 3rd slide of the 2nd Section to the left
//               if(index == 2 && slideIndex == 2 && direction == 'left'){
//                   alert("Going to slide 2! ");
//               }
//           }
//       });
// });
