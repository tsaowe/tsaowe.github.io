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
  lines.forEach((line) => {
    div.appendChild(P(line));
  });
  return div;
}

export const toHtml = stringToHtmlElement;

export const bodyAppend = (str) => {
  document.body.appendChild(toHtml(str));
}

export const allHtml = (str='') => {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../style/reset.css">
  <title>TODO</title>
</head>
<body>
  ${str}
</body>
</html>
`
}
