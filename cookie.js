if (localStorage.getItem("cookieBannerDisplayed")) {
  document.querySelector('.js-cookie-banner').remove();
} else {

function dismiss() {
      document.querySelector('.js-cookie-banner').remove();
      localStorage.setItem("cookieBannerDisplayed", "true");
}

  const buttonElement = document.querySelector('.cookie-btn');
  if (buttonElement) {
      buttonElement.addEventListener('click', dismiss);
  }
}
