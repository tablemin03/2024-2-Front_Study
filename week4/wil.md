## class
**html에 class="zzang" 속성을 넣어줄 것이다.**
```html
<h1 class="zzang">신짱구</h1>

<span class="zzang">신짱구</span>입니다.
```
    p 태그 내의 짱구 지칭을 span 태그로 묶어놨는데, span은 범위, 공간, 간격 이런 의미로 쓰이는 태그이다.

```css
.zzang{
    color:red;
    background-color:yellow;
}
```
**선택자를 점(.)으로 시작하면 class**
(3회차 22p 그림 참고)

class는 분류를 한 무언가들, 집단이 아닐까?

## id
id는 나만을 식별할 수 있는 고유한 무언가(숫자, 이름, 기호 등)이다. 그래서 **하나의 id는 하나의 태그**만을 의미한다.

**id vs class**
class가 있는데, id가 꼭 필요할까?
class가 분반을 나타낸다면, id는 학번과 같은 개념이다.

### id를 통해 숫자의 크기를 키우고 싶어요
style.css에 추가한다
```css
 #counting-num {
    font-size: 40px;
    font-weight: bold;
 }
```
**id는 #으로 시작한다.**
class는 .으로 시작한다면 id는 #으로 시작한다.

# JavaScript
HTML, CSS만으로는 웹 문서에서 a 태그를 타고 다른 페이지로 가는 기능이 메인이고 웹문서가 일방적으로 정보를 주는 상태이다.

이때 JavaScript는 웹 문서를 동적으로 만들 수 있다. **내가 작성한 스크립트대로 페이지를 조작할 수 있다**

## 특정 id의 텍스트를 코드로 핸들링

### 숫자가 바뀌는 행위를 버튼으로 핸들링
**app.js를 연결한다 (body 태그의 마지막 부분)**
```
<script src="app.js></script>
```
**script 태그는 </body> 앞에 작성해준다**

```js
const number = document.getElementById("counting-num");
const incButton  = document.getElementById("increase");

let count = 0;
number.textContent = count;

function increaseCount() {
 count++; // count = count + 1
 number.textContent = count; // 숫자 변화 반영
}

incButton.addEventListener("click",increaseCount);
```

### 숫자가 커질수록 숫자의 색이 빨갛게 되게 하기
```html
number.style.color = `rgba(${count},0,0)`;
number.textContent = count;
```
를 통해서 increaseCount 함수를 통해 count를 증가시켜 더 진한 빨간색을 나타낼 수 있다.

## script 태그의 위치
브라우저가 하는 일은
1. HTML 파일 열기
2. HTML 문서를 한 줄 한 줄 순차적으로 읽기(파싱)
3. DOM 트리 만들기
4. 화면에 표시하기

하지만 여기서
**HTML 파싱 중에 script를 발견하면**
1. 파싱을 중단한다
2. script 파일(js)을 다운로드 받는다
3. script 파일을 실행한다
4. HTML을 이어서 파싱한다

### HTML 파싱 중에 script 발견이 문제인가
**화면이 늦게 뜬다**
HTML 해석이 늦어지면 화면은 더 늦게 보여지게 된다.
HTML 해석을 다 끝내고 JS 해석해도 늦지 않는다.

**순서가 꼬일 수 있다**
원하는 id 태그에 숫자를 바꿨는데,
파싱한 HTML 내용에 그 태그가 아직 없다면? 순서가 꼬일 수 있다.


# 과제내용 공부
## id가 아닌 class로 js 조작하는 방법
### getElementsByClassName()를 공부하기
주어진 요소의 클래스 이름에 해당하는 모든 요소를 `HTMLCollection` 객체로 반환한다. 일치하는 요소가 없으면 빈 `HTMLCollection` 객체를 반환한다.

    반환되는 `HTMLCollectionn` 객체를 순회시켜 각 요소에 대해 특정 작업을 수행할 수 있다.

    `HTMLCollection`은 웹페이지의 HTML 문서 내에서 선택한 요소만을 문서 내 정렬된 순서대로 모아둔 집합이다. 흔히 DOM 컬렉션이라고 말하는 이 집합은 요소를 배열의 항목처럼 유사하게 다룰 수 있으며, 웹 페이지의 요소를 쉽게 조작할 수 있게 하는 객체이다.

    HTMLCollection은 유사 배열 객체이면서, for...of 문으로 순회 가능한 이터러블(iterable) 객체이다.
    그리고, DOM의 변경 사항을 실시간(또는 live)으로 반영하는 객체이다. length 속성으로 유사 배열 객체인 HTMLCollection의 길이를 반환할 수 있다.

```html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>getElementsByClassName()</title>
    </head>
    <body>
        <ul>
            <li class="a">김밥</li>
            <li class="a">라면</li>
            <li class="a">떡볶이</li>
        </ul>
        <script src="class-name.js"></script>
    </body>
</html>
```
```js
const liElements = document.getElementsByClassName("a");
console.log(liElements); // HTMLCollection(3) [li.a, li.a, li.a]

/* 방법 1 - for...of 문 적용 */
for (const liElement of liElements) {
    console.log(liElement.textContent);
}
/*
    "김밥"
    "라면"
    "떡볶이"
*/

/* 방법 2 - for 문 적용 */
for (let i = 0; i < liElements.length; i++) {
    console.log(liElements[i].textContent);
}
/*
    "김밥"
    "라면"
    "떡볶이"
*/

/* 방법 3_1 - forEach() 함수 적용 */
const arr = [...liElements]; // 스프레드 문법으로 배열 개체를 만듦
arr.forEach(li => {
    console.log(li.textContent);
});
/*
    "김밥"
    "라면"
    "떡볶이"
*/

/* 방법 3_2 - forEach() 함수 적용 */
const liElementsArray = Array.from(liElements); // Array.from() 메서드로 배열 개체를 만듦
liElementsArray.forEach(li => {
    console.log(li.textContent);
});
/*
    "김밥"
    "라면"
    "떡볶이"
*/
```
## CSS 꾸미기
### HTML 버튼 만들기
수업 내용에서 버튼을 미리 만들어주셨지만, 한번 더 배우자면 버튼을 만들기 위해서는 `<button>` 태그를 사용한다. - 이번 버튼태그같이 md에서 인라인 코드를 사용할 때는 `이 백택 두개 사이에 코드를 넣으면 된다.
`<div>`요소처럼 포괄적인 태그를 사용하는 것보다 `<button>` 태그를 사용하는 것이 접근성 측면에서 더 좋은 방법이다.

`<button type="button" class="button">Click me!</button>`
- `<button>`태그로 열고 `</button>` 태그로 닫음으로써 버튼을 추가했다.
- `<button>`태그의 `type="button"`속성은 명시적으로 클릭 가능한 버튼을 생성한다. 
- `class="button"`속성은 별도의 CSS파일에서 버튼을 스타일링하기 위해 사용될 예정이다.(수업에서는 id속성을 사용) 클래스 명은 꼭 `button`일 필요는 없고 `class="bnt"`등으로 할 수 있다.
- 버튼 내에 `Click me!`라는 텍스트가 보인다.

### CSS
<https://www.freecodecamp.org/korean/news/css-beoteun-seutail-hover-color-background/>




배포 링크 <https://sprightly-semifreddo-4e5a05.netlify.app/>