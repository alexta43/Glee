$(function() {

  $('.market__item-btn').on('click', function() {
    $(this).addClass('market__item-btn--none');
    $('.market__item-buttons-onclick-box').addClass('market__item-buttons-onclick-box--on');
  });

  $('.market__item-buttons-onclick-box, .market__item-buttons-onclick-box--on').on('click', function() {
    $(this).removeClass('market__item-buttons-onclick-box--on');
    $('.market__item-btn, .market__item-btn--none').removeClass('market__item-btn--none');
  });

  $('.filter-category__label input').click(function(e) {
    $(this).closest('.filter-category__label').toggleClass('filter-category__label--active');
  });

  $('.filter-brand__label input').click(function(e) {
    $(this).closest('.filter-brand__label').toggleClass('filter-brand__label--active');
  });

  $('.shop-content__menu-btn').on('click', function() {
    $('.shop-content__menu-btn').removeClass('shop-content__menu-btn--active');
    $(this).addClass('shop-content__menu-btn--active');
  });

  $('.button-list').on('click', function() {
    $('.market__item').addClass('market__item--list');
    $('.shop-content__pagination').addClass('pagination--list')
  });

  $('.button-grid').on('click', function() {
    $('.market__item').removeClass('market__item--list');
    $('.shop-content__pagination').removeClass('pagination--list')
  });

  $('.select-style').styler();

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
