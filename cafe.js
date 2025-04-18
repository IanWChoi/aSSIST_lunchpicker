let cafes = [];
let cafeQueue = [];
let clickCount = 0;
let clickTimer = null;

// JSON 불러오기
fetch('cafe.json')
  .then(response => response.json())
  .then(data => {
    cafes = data;
    shuffleCafeQueue();

    const countElement = document.getElementById("cafe-count");
    if (countElement) {
      countElement.innerText = `현재 총 ${cafes.length}개의 카페가 준비되어 있습니다.`;
    }
  });

// 큐 섞기
function shuffleCafeQueue() {
  cafeQueue = [...cafes];

  for (let i = cafeQueue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cafeQueue[i], cafeQueue[j]] = [cafeQueue[j], cafeQueue[i]];
  }
}

// 연타 방지
function handleRapidClick() {
  clickCount++;

  if (clickTimer === null) {
    clickTimer = setTimeout(() => {
      clickCount = 0;
      clickTimer = null;
    }, 3000);
  }

  if (clickCount >= 10) {
    alert("커피 너무 빨리 마시면 목에 안좋습니다☕");
    clickCount = 0;
    clearTimeout(clickTimer);
    clickTimer = null;
    return true;
  }

  return false;
}

function pickCafe() {
    if (handleRapidClick()) return;
  
    // 카페 수 문구 숨기기
    const countElement = document.getElementById("cafe-count");
    if (countElement) {
      countElement.style.display = "none";
    }
  
    if (cafeQueue.length === 0) {
      alert(
        `지금까지 총 ${cafes.length}개의 카페를 모두 보셨습니다!\n\n`
      );
      shuffleCafeQueue();
    }
  
    const picked = cafeQueue.shift();
    const formattedComment = picked.comment.replace(/\n/g, "<br>");
    const linkHTML = picked.link ? `<br><a href="${picked.link}" target="_blank">📍 지도 보기</a>` : "";
  
    document.getElementById("result").innerHTML = `
      <strong>${picked.name}</strong><br>
      <em>${formattedComment}</em>
      ${linkHTML}
    `;
  }
  

function goToLunch() {
  window.location.href = "index.html";
}
