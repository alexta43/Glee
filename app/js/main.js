$(function() {

  $('.market__item-buttons-onclick-box').hide();
  $('.market__item-btn').each(function(i){
    $(this).on('click', function(e){ 
        e.preventDefault();
        $('.market__item-btn').eq(i).hide();
        $('.market__item-buttons-onclick-box').eq(i).fadeIn();
        $('.market__item-btn-onclick-cart').addClass('market__item-btn-onclick-cart--active');
    });
  })

  $('.market__item-btn-onclick-cart').each(function(i){
    $(this).on('click', function(e){ 
        e.preventDefault();
        $('.market__item-buttons-onclick-box').eq(i).hide();
        $('.market__item-btn').eq(i).fadeIn();
    });
  })
  
  $('.market__item-btn-onclick-heart').on('click', function() {
    $(this).toggleClass('market__item-btn-onclick-heart--active');
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
  $('.product-content__filter-input').styler();

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

   $('.product-content__star').rateYo({
    starWidth: "22px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "10px",
    readOnly: true
   });

   $('.star').rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: "true"
   });
  
   $('.product-slider__big').slick({
    draggable: false,
    arrows: false,
    // fade: true,
    asNavFor: '.product-slider__thumbs'
   });
  
   $('.product-slider__thumbs').slick({
     focusOnSelect: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     vertical: true,
     draggable: false,
     asNavFor: '.product-slider__big'
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
