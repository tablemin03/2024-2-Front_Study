## 서버와 통신하기 2
**API(Application Programming Interface)**
클라이언트와 서버 간의 데이터를 주고 받는 **통로 역할**
서로 다른 소프트웨어인 두 역할간 상호작용을 돕는 **인터페이스**이다.

Interface의 예시로는 **자판기**가 있다.
자판기는 돈과 주문을 input하고 음료수 캔을 return 한다
자판기에서의 돈과 주문은 **URL + a (homeURL/ect + a)**
음료수 캔의 return은 **json 형태의 데이터**를 return해주는 것이다.
음료수가 캔이라는 형식으로 액체를 담아주는 것처럼 json이라는 데이터 형식으로 보내준다.

### fetch 이후에 나온 then?
API 요청을 보내서 json 데이터가 오기까지 5초가 걸린다고 가정하자
브라우저가 코드를 맨 윗줄부터 읽으면서 한 줄씩 해결한다면 5000줄 짜리 코드가 있다고 가정할 때, 브라우저는 맨 윗줄부터 읽다가 10번째 줄에 있는 **fetch**를 발견한다.

그런데 데이터는 5초 뒤에 도착하기 때문에 5초를 기다린 후에 나머지 4990줄을 읽어야 한다.
4990줄까지 읽다보니 화면 보는데 10초가 넘게 걸린다면 **유저는 창을 닫는다**

브라우저가 fetch를 보면 **무언가**에게 API를 처리하고 다 되면**(then)** 보고하라고 하면 어떨까?

5000줄 짜리 코드가 있다고 가정했을 때 브라우저는 맨 윗줄부터 읽다가 **10번째 줄**에 있는 **fetch를 발견**한다.
그럼 부하직원 '무언가'에게 fetch 처리하라고 지시를 하고 나머지 4990줄을 처리하는 중에 API 데이터를 받는다.

그렇다면 적어도 fetch data는 없지만 **4990줄**의 화면은 볼 수 있다.
그러면 일단 유저는 4999줄의 화면을 먼저 보게 된다. 그리고 5초 뒤에 데이터가 화면에 반영된다.

fetch 후 then은 비동기 처리를 이용해 fetch 데이터를 받아올 때 나머지 줄을 읽는 것인 것 같다.

## 협업하기
협업을 할 때 만약 큰 크기의 코드를 작업 할 때 라인별로 나눠서 작업한다면 매우 비효율적일 것이다.
그래서 태그마다 자바스크립트 파일을 만들고 개개인은 그 파일만 작업한 이후에 HTML에 끼워넣는 것이다.

우리가 사용할 JS파일 하나하나를 **부품(component)로 쓰자**
**함수(function)**처럼 쓰면 재사용성이 올라갈 것이다.

### JS에 HTML을 넣자!
SPA의 시대가 도래했다
**SPA(Single Page Application)**의 시대

요즘엔 네트워크도 빠르고 브라우저도 빨라졌다
JS 파일이 온전히 전달되면, 새로고침 없이 화면을 전환할 수 있다
이제 한 페이지는 하나의 앱처럼 동작한다.

## React 사용법
터미널을 열어서 **npx create-react-app week9(원하는 파일명)**을 입력한다
npm을 통해서 react를 하기 위한 파일들을 받아온다
완료되고서는 'cd week9', 'npm start'를 해보면 실행이 된다.


    $ npm install -g create-react-app
    $ create-react-app my-app
    or
    $ npx create-react-app my-app(권장)

    $ cd my-app
    $ rm -f src/*

npm install -g create-react-app은 npm install -g create-react-app을 사용하여 create-react-app를 전역으로 설치하고, 그 후에 create-react-app 명령을 사용하여 프로젝트를 생성하는 방석이었다. 

현재는 npx를 사용하여 create-react-app을 실행하는게 권장되는 방법이다. npx는 npm 패키지를 실행하는데 사용되며, 전역 설치 없이 필요한 패키지를 다운로드하여 실행한다.

npx create-react-app my-app를 사용하면 전역 설치를 하지 않아도 되며, 항상 최신 버전의 create-react-app을 사용할 수 있다.

npx를 사용하는 것은 React 애플리케이션을 초기화하는 권장방법이며, 이 방식을 따르면 프로젝트를 빠르게 시작할 수 있다고 한다.

### npm을 권장하지 않는 이유
1. **버전 관리에 어려움**: npm을 통해 create-react-app을 전역으로 설치하면 한 번 설치한 버전을 계속 사용하게 된다. 이로 인해 애플리케이션을 생성할 때 사용되는 create-react-app의 버전이 고정되어, 새로운 업데이트나 개선 사항을 활용하기 어렵다.
2. **로컬 프로젝트 관련성 부족**: 전역으로 create-react-app을 설치하면 로컬 프로젝트와의 관련성이 부족하게 된다. 새로운 React 프로젝트를 생성할 때 로컬 프로젝트 데렉토리에서 직접 실행하는 것이 더 관련성이 높으며, 프로젝트의 요구사항에 따라 create-react-app 버전을 선택하고 업데이트 하는 것이 훨씬 효과적이다.
3. **npx의 등장**: npx는 npm 패키지를 실행하는 간편한 방법을 제공한다. npx를 사용하면 로컬에 패키지를 설치하지 않고도 필요한 패키지를 실행할 수 있으며, 항상 최신 버전의 패키지를 사용할 수 있다. 이로써 npx를 사용하면 create-react-app을 간편하게 실행하고 프로젝트를 최적화할 수 있다.

### npm과 npx의 차이점
1. **npm (Node Package Manager)**: npm는 Node.js 패키지 관리자로, Node.js를 설치할 때 함께 제공된다. npm을 사용하여 JavaScript 패키지를 설치, 관리 및 실행할 수 있다. 이 도구를 사용하여 프로젝트의 의존성 패키지를 설치하고 스크립트를 실행할 수 있다.
2. **npx**: npx는 npm 5.2.0 버전 이상에서 포함된 도구로, npm 패키지를 실행할 수 있는 도구이다. npx를 사용하면 로컬에 설치된 패키지 또는 원격 패키지를 간편하게 실행할 수 있다. 주로 전역으로 설치하지 않고 필요한 패키지를 실행할 때 사용된다. 예를 들어, npx create-react-app my-app와 같이 create-react-app 패키지를 실행할 수 있다.
참고 <https://velog.io/@boyeon_jeong/npx-create-react-appnpm%EA%B3%BC-npx%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90>

배포링크 <https://create-react-app-seven-iota.vercel.app/>