$(function() {

  $('.filter-category__label').on('click', function() {
    $(this).toggleClass('filter-category__label--active');
    // break;
  });

  $('.filter-brand__label').on('click', function() {
    $('.filter-brand__label').removeClass('filter-brand__label--active');
    $(this).addClass('filter-brand__label--active');
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
 });

 $('.star').rateYo({
  starWidth: "17px",
  normalFill: "#ccccce",
  ratedFill: "#ffc35b",
  readOnly: "true"
 });

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
