const carouselInstance = Carouzel.Root.getInstance();
carouselInstance.init('#volunteers-carousel', {
  slidesToShow: 2,
  slidesToScroll: 1,
  breakpoints: [
    {
      minWidth: 1024,
      slidesToShow: 4,
    },
  ],
});
