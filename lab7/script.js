const container = document.getElementById("container");

// 工具函式：產生 n 個 a~z 的隨機字元
function generateRandomChars(n) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < n; i++) {
    const randIndex = Math.floor(Math.random() * chars.length);
    result += chars[randIndex];
  }
  return result;
}

// 畫面載入時（window.onload）：產生 0~2 個亂數字元，並讓 container 自動聚焦
window.onload = function () {
  const initialCount = Math.floor(Math.random() * 3); // 0~2
  container.textContent = generateRandomChars(initialCount);
  container.focus(); // 讓 div 接收鍵盤事件
};

// 每次使用者放開鍵盤時（keyup）
window.addEventListener("keyup", function (e) {
  const firstChar = container.textContent[0];

  // 如果按下的鍵與第一個字元相同，刪除它
  if (firstChar === e.key) {
    container.textContent = container.textContent.slice(1);
  }

  // 增加 1~3 個新字元
  const newCount = Math.floor(Math.random() * 3) + 1; // 1~3
  container.textContent += generateRandomChars(newCount);
});
