const sideNav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideNav);

        const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, {
          indicators: false,
          height: 950,
          transition: 600,
          interval: 3000
        });

        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax);

        const materialbox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialbox);

        const scrollspy = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(scrollspy, {
          scrollOffset: 50
        });
        
        const Carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(Carousel);

        const Modal = document.querySelectorAll('.modal');
        M.Modal.init(Modal);