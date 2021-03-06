$(function() {

  $('.top-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000
  });
  $('.clients-slider__items').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  });

  var containerEl1 = document.querySelector('[data-ref="mix1"]');
  var containerEl2 = document.querySelector('[data-ref="mix2"]');
  var mixer1 = mixitup(containerEl1, {
    selectors: {
      control: '.top-week__filter-btn'
    }
  });
  var mixer2 = mixitup(containerEl2, {
    selectors: {
      control: '.new-design__filter-btn'
    }
  });
});
