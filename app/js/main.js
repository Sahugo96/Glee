$(function(){

  $('.related__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="22" height="9" viewBox="0 0 22 9"><path d="M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z" transform="translate(-1439 -1327)"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="22" height="9" viewBox="0 0 22 9"><path class="cls-1" d="M535.3,654.472h16.948l-0.1,2.857a0.292,0.292,0,0,0,0,.41l0.172,0.172a0.28,0.28,0,0,0,.2.086,0.285,0.285,0,0,0,.2-0.084l4.193-4.211A0.292,0.292,0,0,0,557,653.5a0.283,0.283,0,0,0-.084-0.2l-4.193-4.213a0.289,0.289,0,0,0-.407,0l-0.172.173a0.287,0.287,0,0,0-.084.2,0.278,0.278,0,0,0,.084.2l0.113,2.865H535.292a0.3,0.3,0,0,0-.292.295v1.37A0.292,0.292,0,0,0,535.3,654.472Z" transform="translate(-535 -649)"/></svg></button>',
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    },

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
    }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    },
  ]
  });

  $('.product-tabs__link').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');
  });

  $('.form-num__input').styler();

  $(".product-details__star").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px",
    readOnly: true,
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
      draggable: true,
    }
    },
  ]
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100vh";
  }
  prevScrollpos = currentScrollPos;
}

  $(".product-card__star").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px",
    readOnly: true,
  });

  $('.filter-title').on('click', function () {
    $(this).siblings().slideToggle();
  });

  $('.button-list').on('click', function () {
    $('.product-list__pagination').addClass('product-list__pagination--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-list__pagination').removeClass('product-list__pagination--list');
  });

  $('.button-list').on('click', function () {
    $('.pagination').addClass('pagination--list');
  });

  $('.button-grid').on('click', function () {
    $('.pagination').removeClass('pagination--list');
  });

  $('.button-list').on('click', function () {
    $('.product-content__item').addClass('product-content__item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-content__item').removeClass('product-content__item--list');
  });

  $('.button-list').on('click', function () {
    $('.product-card').addClass('product-card--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-card').removeClass('product-card--list');
  });
  
  $('.button-list').on('click', function () {
    $('.circle-btn--white').addClass('circle-btn--square');
  });

  $('.button-grid').on('click', function () {
    $('.circle-btn--white').removeClass('circle-btn--square');
  });
  
  $('.product-content__button').on('click', function () {
    $('.product-content__button').removeClass('product-content__button--active');
    $(this).addClass('product-content__button--active');
  });


  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
  });

  $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "6px",
    readOnly: true,
  });

  $('.price-filter__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.01,
    onStart: function (data) {
      $('.price-filter__from').text(data.from);
      $('.price-filter__to').text(data.to);
    },
    onChange: function (data) {
      $('.price-filter__from').text(data.from);
      $('.price-filter__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.partners-slider__list').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  });

  var containerEl1 = document.querySelector('[data-ref="products__list"]');
  var containerEl2 = document.querySelector('[data-ref="design__list"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});