# aSSIST_lunchpicker


https://ianwchoi.github.io/aSSIST_lunchpicker/

## 프로젝트 개요
aSSIST 재학생 및 교직원을 위한 점심 및 카페 추천 웹 애플리케이션입니다.

## 주요 기능
1.  **점심 메뉴 추천:** `index.html` 페이지에서 "추천 받기" 버튼을 누르면 `restaurants.json` 파일에 저장된 식당 목록 중 하나를 무작위로 보여줍니다. 식당 이름, 한 줄 평, 그리고 네이버 지도 링크를 함께 제공합니다.
2.  **카페 추천:** 점심 추천을 받은 후 나타나는 "카페 추천 받기" 버튼을 누르면 `cafe.html` 페이지로 이동합니다. 이 페이지에서는 `cafe.json` 목록을 기반으로 주변 카페를 추천해줍니다.
3.  **데이터 기반:** 식당과 카페 목록은 별도의 `json` 파일 (`restaurants.json`, `cafe.json`)로 관리되어 쉽게 추가하거나 수정할 수 있습니다.

## 기술 스택
*   HTML, CSS, JavaScript를 사용한 간단한 정적 웹사이트입니다.
*   `fetch` API를 사용하여 `json` 데이터를 동적으로 불러옵니다.
*   GitHub Pages를 통해 웹 서비스를 제공하고 있습니다.

## 파일 구조
*   `index.html`, `script.js`, `restaurants.json`: 점심 추천 기능 관련 파일
*   `cafe.html`, `cafe.js`, `cafe.json`: 카페 추천 기능 관련 파일
*   `README.md`: 프로젝트에 대한 간략한 설명과 서비스 링크 포함