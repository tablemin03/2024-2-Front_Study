# 서버와 통신하기
## JSON Placeholder
<https://jsonplaceholder.typicode.com/>

API를 받아올 수 있는 사이트이다.

```js
fetch('https://jsonplaceholder.typicode.com/users1/1/todos')
 .then((response) => response.json())
 .then((json) => console.log(json));
```

**F12를 눌러서 console을 확인하자** 그러면 200개의 데이터가 나오게 될 것이다.

## 용어정리
### 서버와 클라이언트
**서버(server)**
서버는 서빙하는 사람정도로 해석할 수 있다.
고객이 요청하면 무언가를 서빙하는 일을 한다는 것이다.
**클라이언트(client)**
클라이언트는 고객이다.
서버는 서빙하는 사람이므로 클라이언트는 서빙을 받는 고객이다.
클라이언트는 서버에게 데이터를 요청하고 서버는 데이터를 보내주는 서로 상대적인 역할놀이이다.

### API
**API(Application Programming Interface)**
클라이언트와 서버 간의 데이터를 주고 받는 통로 역할이다.
서로 다른 소프트웨어인 두 역할간 상호작용을 돕는 인터페이스이다.

### 프론트엔드와 백엔드
**프론트엔드 (Frontend)**
Front + End (맨 앞)이다.
사용자가 직접 상호작용하는 웹 페이지의 화면을 다루는 개발 영역이다.
**백엔드 (Backend)**
Back + End (맨 뒤)이다.
서버에서 동작하는 부분을 다루는 개발 영역이다. 비즈니스 로직 처리, 인증, 보안 등을 다룬다.

### fetch 함수
fetch 는 네트워크 요청을 서버 데이터를 받아오는 **표준 API 함수**이다.
fetch 함수는 **비동기**로 처리해서 then 처리도 하게 된다.

## 데이터를 화면에 뿌리기

**forEach**문을 사용하면 (let i = 0;i < data.length; i++)이라는 순회조건을 만들지 않아도 된다. (forEach, map 등 함수형functional 순회를 JS에서 많이 사용하게 된다)

```js
const root = document.getElementById("root");

fetch('https://jsonplaceholder.typicode.com/users1/1/todos')
 .then((response) => response.json())
 .then((json) => render(json));

function render(data) {
 data.forEach((item) => {
 const h2 = document.createElement("h2");
 h2.textContent = item.title;
 root.appendChild(h2);
 });
}
```

취소선을 긋기 위해서는
**text-decoration**이라는 CSS 속성을 사용하면 된다. line이라는 class를 style.css에 넣어서 사용해보자.
```css
.line { text-decoration: line-through; }
```
js에서는
**classList.add()** 라는 함수 또는 매소드를 사용해 **클래스**를 추가한다.
```js
if (item.completed) { h2.classList.add("line"); }
```

## DOM (Document Object Model)
**HTML 태그 하나하나를 자바스크립트로 컨트롤할 수 있도록 만든 체계**

'트리 구조'이다. 객체들 간의 위계 구성을 만들어낸다.
계층적 구조로 이루어지고, HTML의 구조적인 문서와 같은 맥락이다.

# promise 개념 공부하기
## Synchronous(동기) Asynchronous(비동기)
동기적으로 실행된다 : 순차적으로 실행된다.
비동기적으로 실행된다 : 프로그램이 병렬적으로 실행된다.

동기적으로 실행된다면 간단하지만 시간이 오래 걸릴 수 있다.
비동기적으로 실행된다면 복잡할 수 있지만 매우 빠르게 실행이 끝날 수 있다.

## fetch
fetch는 Promise 데이터 타입을 리턴한다.
1. Promise 타입을 리턴하는 함수는 비동기적으로 동작할 확률이 매우 높다.
2. then과 catch를 사용할 수 있다. 둘 다 콜백함수를 받는다.

**then**
fetch를 통해 실행한 결과가 성공했을 때 then으로 전달된 콜백함수가 호출된다. 그 콜백함수의 결과값이 첫번째 파라미터로 받을 수 있다.

**catch**
fetch를 통해 실행한 결과를 실패했을 때, catch의 콜백함수를 통해 파라미터로 이유를 알려줄 것이다.

**Promise를 쓰는 이유**
비동기적인 작업을 처리할 때 표준화된 방법을 이용해서 성공했는지 실패했는지 알 수 있다.

**Nested promise**
    .then 안에 then을 넣어서 사용하는 방식
**promise chaining**
    .then안에서 promise를 리턴해서 .then을 연결하며 주로 사용된다.


배포링크 <https://rococo-genie-fddebf.netlify.app/>