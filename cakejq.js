$(".cake_feature_slider").owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$(".special_discount_slider").owlCarousel({
  loop: true,
  margin: 140,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
