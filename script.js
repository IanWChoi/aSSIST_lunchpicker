let restaurants = [];
let lastPickedIndex = -1;

// 연타 방지용 변수
let clickCount = 0;
let clickTimer = null;

// JSON 불러오기
fetch('restaurants.json')
  .then(response => response.json())
  .then(data => {
    restaurants = data;
  });

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

  document.getElementById("disclaimer").style.display = "none";

  if (restaurants.length === 0) {
    document.getElementById("result").innerText = "식당 목록을 불러오는 중입니다...";
    return;
  }

  let random;
  do {
    random = Math.floor(Math.random() * restaurants.length);
  } while (random === lastPickedIndex && restaurants.length > 1);

  const picked = restaurants[random];
  lastPickedIndex = random;

  let formattedComment = picked.comment.replace(/\n/g, "<br>");
  let linkHTML = picked.link ? `<br><a href="${picked.link}" target="_blank">📍지도 보기</a>` : "";

  document.getElementById("result").innerHTML = `
    <strong>${picked.name}</strong><br>
    <em>${formattedComment}</em>
    ${linkHTML}
  `;
}
