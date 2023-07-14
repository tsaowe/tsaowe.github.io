function isDarkMode() {
  const schema = document.querySelector('html').style.colorScheme;
  switch (schema) {
    case '':
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    case 'dark':
      return true;
    case 'light':
      return false;
    default:
      return false;
  }
}


function revertHtmlColorSchema() {
  if (isDarkMode()) {
    document.querySelector('html').style.colorScheme = 'light';
  } else {
    document.querySelector('html').style.colorScheme = 'dark';
  }
}

document.addEventListener('dblclick', revertHtmlColorSchema);
