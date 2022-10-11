import './phone-add-meta.js';


/**
 * <link rel="stylesheet" href="../style/reset.css">
 */
(function () {
    const pathname = window.location.pathname;
    const paths = pathname.split('/').filter(v => v);
    if (/^tsa/.test(paths[0])) {
      paths.shift();
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    if (paths.length > 1) {
      link.href = '../style/reset.css';
    } else {
      link.href = './style/reset.css';
    }
    document.head.appendChild(link);
  }
)();
