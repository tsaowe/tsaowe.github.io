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


{
// 初始化点击计数器和计时器
let clickCount = 0;
let clickTimer;

// 定义最大间隔时间（毫秒）
const MAX_INTERVAL = 500;

// 定义点击事件处理器
function handleClick() {
  clickCount++;

  // 如果这是第一次点击，启动计时器
  if (clickCount === 1) {
    clickTimer = setTimeout(() => {
      // 重置计数器
      clickCount = 0;
    }, MAX_INTERVAL);
  }

  // 如果在规定时间内点击次数达到三次，触发事件
  if (clickCount === 3) {
    // 清除计时器
    clearTimeout(clickTimer);

    // 重置计数器
    clickCount = 0;

    // 输出日志
    revertHtmlColorSchema();
  }
}

// 在 document 上添加点击事件监听器
document.addEventListener('click', handleClick);

}
