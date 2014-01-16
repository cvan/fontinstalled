(function() {
  var fontFamily = 'Seymour One';

  // Download http://www.fontsc.com/font/download/seymour-one to test.

  var i = document.querySelector('.installed');

  if (!fontinstalled(fontFamily)) {
    i.classList.add('no');
    i.innerHTML = fontFamily + ' IS NOT installed';
    console.log(i.innerHTML);
    console.log('Fetching font...');
    loadFont();
  } else {
    i.classList.add('yes');
    i.innerHTML = fontFamily + ' IS installed';
    console.log(i.innerHTML);
    console.log('No need to fetch font...');
  }

  function loadFont() {
    var style = document.createElement('style');
    style.innerHTML = "@font-face{font-family:'Seymour One';font-style:normal;font-weight:400;src:local('Seymour One'),local('SeymourOne'),url(http://themes.googleusercontent.com/static/fonts/seymourone/v2/-D8Zpf17gNh35R70Dk_bcbrIa-7acMAeDBVuclsi6Gc.woff) format('woff')}";
    document.body.appendChild(style);
  }
})();
