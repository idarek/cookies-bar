if (localStorage.getItem("cookieBannerDisplayed")) {
  document.querySelector('.js-cookie-banner').remove();
} else {
  
  document.getElementById("CookieBanner").style.display = "block";

function dismiss() {
      document.querySelector('.js-cookie-banner').remove();
      localStorage.setItem("cookieBannerDisplayed", "true");
}

  const buttonElement = document.querySelector('.cookie-btn');
  if (buttonElement) {
      buttonElement.addEventListener('click', dismiss);
  }
}
