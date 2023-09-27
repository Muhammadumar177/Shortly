const elUrlShortener = document.querySelector('.url-shortener')
const elUrlShortenerForm  = document.querySelector('.js-url-shortener-form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results');
// const elCopyUrlShortLinkButton = document.querySelector('.js-copy-short-link-button');

if(elUrlShortenerForm){
  elUrlShortenerForm.addEventListener('submit', function (evt){
    evt.preventDefault();
    elUrlShortenerResults.classList.add('url-shortener__results--open');

}
);
}
if(elUrlShortener){
  elUrlShortener.addEventListener('click', function (evt){
    if (evt.target.matches('.js-copy-short-link-button')) {
      // change buttuon text
evt.target.textContent = 'Copied!';
// change buttuon background-color
      evt.target.classList.add('url-shortener__copy-button--copied');

      // copy short link to clip board
      navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

      // reset button text and bgc after 1s

      setTimeout(function () {
        evt.target.textContent = 'Copy';
        evt.target.classList.remove('url-shortener__copy-button--copied');;
      },2000)
     }
  })
}