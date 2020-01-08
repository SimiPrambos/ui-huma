import './main'
import './perfect-scrollbar'
import './preloader'
import './sidebar'
// import './popover'
// import './mdk-carousel-control'
// import './read-more'

(function() {
  'use strict';

  $('[data-toggle="tab"]').on('hide.bs.tab', function (e) {
    $(e.target).removeClass('active')
  })

  ///////////////////////////////////
  // Custom JavaScript can go here //
  ///////////////////////////////////

})()
