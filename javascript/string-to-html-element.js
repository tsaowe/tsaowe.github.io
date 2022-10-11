export const P = (str) => {
  const p = document.createElement('p');
  if(str) {
    p.innerHTML = str;
    return p;
  }
  return document.createElement('br');
}

export const stringToHtmlElement = (str) => {
  const div = document.createElement('div');
  const lines = str.split('\n').map((line) => line.trim());
  console.log(lines);
  lines.forEach((line) => {
    div.appendChild(P(line));
  });
  return div;
}

export const toHtml = stringToHtmlElement;
