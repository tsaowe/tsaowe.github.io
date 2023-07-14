function isDarkMode() {
  const className = document.querySelector("html").className;
  switch (className) {
    case "":
      return false;
    case "dark":
      return true;
    case "light":
      return false;
    default:
      return false;
  }
}

function revertHtmlColorSchema() {
  if (isDarkMode()) {
    document.querySelector("html").className = "light";
  } else {
    document.querySelector("html").className = "dark";
  }
}

if (isDarkMode()) {
  document.querySelector("html").className = "dark";
} else {
  document.querySelector("html").className = "light";
}

document.addEventListener("dblclick", revertHtmlColorSchema);
