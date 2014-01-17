(function() {
  // Download http://www.fontsc.com/font/download/seymour-one to test.

  var i = document.querySelector('.installed');
  var fontFamily = 'Seymour One';

  if (fontinstalled(fontFamily)) {
    i.classList.add('yes');
    i.innerHTML = fontFamily + ' IS installed';
    console.log(i.innerHTML);
  } else {
    i.classList.add('no');
    i.innerHTML = fontFamily + ' IS NOT installed';
    console.log(i.innerHTML);
  }
})();
