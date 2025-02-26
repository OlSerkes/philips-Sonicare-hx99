document.addEventListener('DOMContentLoaded', function () {
  const accItems = document.querySelectorAll(
    '.philipsSonicareHx99-accordion__title'
  );

  accItems.forEach((item) => {
    item.addEventListener('click', function () {
      const isActive = this.classList.contains('active');

      for (let j = 0; j < accItems.length; j++) {
        accItems[j].classList.remove('active');
        const panel = accItems[j].nextElementSibling;
        panel.style.maxHeight = null;
      }

      if (!isActive) {
        this.classList.add('active');
        let panel = this.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
});
