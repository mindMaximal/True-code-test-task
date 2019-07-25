$(function() {

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          verticalSwiping: false,
          fade: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          verticalSwiping: false,
          fade: false
        }
      }
    ]
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    prevArrow: 
    '<div class="slick-prev">'
    + '<svg x="0px" y="0px" viewBox="0 0 448.011 448.011" style="enable-background:new 0 0 448.011 448.011;" xml:space="preserve"><g><g><path d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"/></g></svg>'
    + '</div>',
    nextArrow: 
    '<div class="slick-next">'
    + '<svg x="0px" y="0px" viewBox="0 0 448.011 448.011" style="enable-background:new 0 0 448.011 448.011;" xml:space="preserve"><g><g><path d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"/></g></svg>'
    + '</div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '50px',
          verticalSwiping: false,
          vertical: false,
          verticalSwiping: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
        }
      }
    ]
  });

  $('.gallery-item').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    gallery:{
      enabled:true
    },
    zoom: {
      enabled: true, 
  
      duration: 300, 
      easing: 'ease-in-out',
      opener: function(openerElement) {

        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  })

  var  $easyzoom;
  var api
  $('.gallery-item').click(function (e) { 
    e.preventDefault();
    $('.mfp-content figure').addClass('easyzoom easyzoom--overlay');
    var src = $(this).attr('big-src');
    $('.mfp-content figure .mfp-img').wrap('<a href="' + src + '"></a>');
    $easyzoom = $('.mfp-content figure').easyZoom();
    api = $easyzoom.data('easyZoom');
  });

  $(document).on('click', '.mfp-arrow', function () { 
    api.teardown();
    var src = $('.mfp-content figure .mfp-img').attr('src');
    src = $('.gallery-item img[src="' + src + '"]').parent('.gallery-item').attr('big-src');
    $('.mfp-content figure a').attr('href', src);
    $easyzoom = $('.mfp-content figure').easyZoom();
  });
 

});
