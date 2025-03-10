let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 50) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      lastScrollTop = scrollTop;
    });