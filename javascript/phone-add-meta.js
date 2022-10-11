/**
 * if is mobile add
 * <meta name="viewport" content="width=device-width, initial-scale=1.0">
 * to head
 */
(function () {
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
      const meta = document.createElement('meta');
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1.0";
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }
)();
