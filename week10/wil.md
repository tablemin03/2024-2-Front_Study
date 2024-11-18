# 수업
## React의 탄생
태초의 페이스북에서 클라이언트가 좋아요를 누르면 서버가 HTML, CSS, JS파일 모두를 보내줘야 했었기 때문에 서버 비용이 어마무시하게 들었어야 했다.
이때 **fetch와 DOM 조작**으로 좋아요 하나만 바꿔주면 좋겠다고 생각했다.
그래서 페이스북은 fetch와 DOM 조작을 이용해서 좋아요 하나만 바꾸게 했고, 데이터 운송 비용을 줄일 수 있게 됐다.

### 장점
- HTML부터 JS를 전부 주고 받지 않기에 유저는 더 빠른 통신, 페이지 내부 전환을 경험한다.
- 한 페이지에 많은 기능을 넣을 수 있다. Single Page Application, Web App
- 효율적으로 관리하기 위해 부품화해서 개발이 가능하다.

**각각의 부품(component)은 원자가 되어 서로가 독립적이지만 모여서 하나의 전체가 된다.**

### Virtual DOM의 등장
매번 DOM 조작을 하게 되면 너무 많은 과정을 반복하기 때문에 브라우저 리소스가 많이 든다.
React는 메모리 상에 '가벼운 가상의 DOM'을 만들어서 미리 조작을 하고 그 결과만 똑 떼서 Real DOM에 반영하는 방식이다.


# 과제
## npm install & gitignore
vercel로 배포한 React가 있는 레포지토리를 내 컴퓨터에 gitclone했다.
멘토님이 깃허브에 배포된 React 파일은 이대로는 실행되지 않아서 npm install 하셔야해요~ 하셨는데 솔직히 무슨 말인지 몰랐다.
일단 멘토님이 말씀하신대로 npm install을 했다. 멘토님이 말씀하실 때 gitignore도 함께 말씀하셨는데 이번 기회에 알아보았다.

### gitignore
왜냐하면 프로젝트를 git에 올릴 때, node_modules를 **.gitignore**에 넣었기 때문이다.
gitignore은 git에 올리고 싶지 않은 것들의 목록을 만드는 것인데, 대표적으로 용량이 큰 node_modules이다.

### npm install
react 프로젝트를 실행하기 위해서는 node_modules가 필요하기 때문에 git clone 이후에 **npm install** 을 통해 node_modules를 다시 깔아줘야 하는 것이다.
npm install이 터미널에서 실행되면 **package.json** 파일 내부의 **dependencies**에 표시된 각각의 버전정보 등을 참고해 필요한 것들을 알아서 깔아준다. (package.json은 gitignore의 대상이 아니다)
npm install을 실행한 후에는 보이니 않았던 node_modules가 생긴다.
이후부터는 문제없이 react 프로젝를 할 수 있다.

## 카운터앱 꾸미기
CounteNumber.js는 숫자가 증가할 때는 빨간색이 진해지도록, 숫자가 줄어든다면 파란색으로, 리셋이나 0은 검은색으로 하게 설정했다.

남은 버튼을 만드는 것은 Counter.js에 추가해줬다. Counter 컴포넌트를 만드는 것은 실패했다... 시도해봤지만 해법을 찾지 못했다..
그래서 클래스로 버튼들을 구분해주고 Style.css를 만들어서 버튼들을 꾸며줬다.

참고 사이트 <https://pizza301.tistory.com/81>