// Checks whether a font is installed locally on the user's system.
//
// Inspired by http://remysharp.com/2008/07/08/how-to-detect-if-a-font-is-installed-only-using-javascript/

function fontinstalled(font) {
  var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                 'abcdefghijklmnopqrstuvwxyz&#xe001;&#xe002;&#xe003;';

  var div = document.createElement('div');
  div.style.setProperty('font', '300 256px/256px monospace', 'important');
  div.style.overflow = 'hidden';
  div.style.position = 'absolute';
  div.style.visibility = 'hidden';
  div.innerHTML = alphabet;

  document.body.appendChild(div);

  var defaultSize = div.getBoundingClientRect();
  if (font.indexOf(' ') !== -1 && font[0] !== '"' && font[0] !== "'") {
      font = '"' + font + '"';
  }
  div.style.setProperty(
    'font', '300 256px/256px ' + font + ', monospace', 'important');
  div.innerHTML = alphabet;
  var size = div.getBoundingClientRect();

  document.body.removeChild(div);

  return !(defaultSize.width == size.width &&
           defaultSize.height == size.height);
}
