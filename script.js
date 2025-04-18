let restaurants = [];
let restaurantQueue = [];
let clickCount = 0;
let clickTimer = null;

// JSON 불러오기
fetch('restaurants.json')
  .then(response => response.json())
  .then(data => {
    restaurants = data;
    shuffleQueue(); // 처음 로딩 시 셔플 큐 생성

    // 식당 수 표시
    const countElement = document.getElementById("restaurant-count");
    if (countElement) {
      countElement.innerText = `현재 총 ${restaurants.length}개의 식당이 준비되어 있습니다.`;
    }
  });

// Fisher-Yates 셔플로 queue 생성
function shuffleQueue() {
  restaurantQueue = [...restaurants];

  for (let i = restaurantQueue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [restaurantQueue[i], restaurantQueue[j]] = [restaurantQueue[j], restaurantQueue[i]];
  }
}

// 연타 방지 로직
function handleRapidClick() {
  clickCount++;

  if (clickTimer === null) {
    clickTimer = setTimeout(() => {
      clickCount = 0;
      clickTimer = null;
    }, 3000);
  }

  if (clickCount >= 10) {
    alert("좀 읽고 누르시고 계신건지 궁금합니다");
    clickCount = 0;
    clearTimeout(clickTimer);
    clickTimer = null;
    return true;
  }

  return false;
}

function pickLunch() {
  if (handleRapidClick()) return;

  const disclaimer = document.getElementById("disclaimer");
  if (disclaimer) {
    disclaimer.style.display = "none";
  }
  const countElement = document.getElementById("restaurant-count");
  if (countElement) {
    countElement.style.display = "none";
  }
  
  if (restaurantQueue.length === 0) {
    alert(
      `지금까지 총 ${restaurants.length}개의 식당을 모두 보셨습니다!\n\n` +
      `아직 고르지 못하셨다면 앞으로 더 발전하는 머신이 되겠습니다!\n` +
      `aSSIST 주변 맛있는 식당 제보는 wschoi@assist.ac.kr로 연락 부탁드립니다~`
    );


    shuffleQueue(); // 한 바퀴 다 돌았으면 새로 섞음
  }

  const picked = restaurantQueue.shift(); // 큐에서 하나 꺼냄

  const formattedComment = picked.comment.replace(/\n/g, "<br>");
  const linkHTML = picked.link ? `<br><a href="${picked.link}" target="_blank">📍 지도 보기</a>` : "";

  document.getElementById("result").innerHTML = `
    <strong>${picked.name}</strong><br>
    <em>${formattedComment}</em>
    ${linkHTML}
  `;

  // 버튼 보이게 하기
const cafeButton = document.getElementById("cafe-button");
if (cafeButton) {
  cafeButton.style.display = "inline-block";
}

}

function goToCafe() {
  window.location.href = "cafe.html";
}
