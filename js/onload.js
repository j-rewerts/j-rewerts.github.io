(() => {
  window.onload = () => {
    console.log('Loaded')
    getNavByUrl(window.location.href)
      .className += ' active';
  }

  const getNavByUrl = (navUrl) => {
    const elements = document.getElementsByClassName('nav-item');
    const nav = Array.prototype.filter.call(elements, element => {
      return element.href === navUrl;
    });

    if (nav.length !== 1) {
      throw new Error('Unable to exactly match nav item.');
    }

    return nav[0];
  }
})();