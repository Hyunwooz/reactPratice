암기할 필요 없다. 이해하기
리액트를 import했기 때문에 createElement function을 가진 리액트 object에 접근 가능
const span 그러나 createElement(“span”) 은 반드시 생성하고자 하는 HTML 태그와 똑같아야함

React JS - 어플리케이션이 아주 인터랙티브하도록 만들어주는 library. 엔진과 같다.
React-dom - library 또는 package. 모든 react element들을 HTML body에 둘 수 있도록 해줌.
ReactDOM.render() - render의 의미는 react element를 가지고 HTML로 만들어 배치한다는 것. 즉, 사용자에게 보여준다는 의미
ReactDOM.render(span, span이 가야할 위치)
-> 그래서 보통 body에 id=“root” 만들어서 span을 root 안에 두라고 함

React.createElement("span", {span의 property}, “span의 내용”)
-> property는 class name, id도 가능 style도 가능
-> 참고만 하고 외우지 말기. 이렇게 쓸 일 없음

바닐라JS는 HTML -> JS 순서
리액트는 JS -> HTML 순서

JS가 element를 생성하고 React JS가 그것을 HTML로 번역하는 것
React JS는 업데이트 해야 하는 HTML을 업데이트 할 수 있음

<br>

두 가지 const를 render 하고 싶은 경우 div를 만든다
그리고 React.createElement("div", null, [span, btn]); 와 같이 배열을 만들어서 const를 넣어준다.

property에 eventListener 넣는 것도 가능.
클릭 - {onClick: () => console.log("I'm clicked")}
마우스엔터 - {onMouseEnter: () => console.log("mouse enter")}

혹시 콘솔에 안 뜨는 경우 event listener가 소문자, 대문자로 잘 적혀있는지 확인해 보세요

<br>

JSX – 자바스크립트를 확장한 문법
보통의 HTML과 비슷. 그러나 property를 HTML 태그의 속성처럼 적으면 됨
const Title = (
console.log("mouse enter")}>
Hello I'm a span

);
style={{ backgroundColor: "tomato" }} -> 스타일은 {} 2개임
JSX를 브라우저가 온전히 이해하지 못하므로 이해할 수 있게
https://unpkg.com/@babel/standalone/babel.min.js 를 설치해야함
-> JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔줌
바벨을 가져온 뒤 script type="text/babel"로 적어줘야 인식함

<br>

div에 const 넣기 위해선

1. const를 함수로 만들어 줘야함 const Btn = () => ( );
   -> arrow function 이라고 부름
   = () => ( ); 는 function Btn() { return ( ); } 와 같음
2. HTML 태그처럼 만들어서 넣어줌
3. (중요) 컴포넌트의 첫 글자는 반드시 대문자여야 함
   -> 우리가 직접 만든 요소는 전부 대문자로 시작해야 함

<br>

1. Vanilla JavaScript
   Vanilla JavaScript에서는 DOM 변경을 직접 처리합니다. 즉, 필요한 DOM 요소를 직접 선택하고, 요소의 속성을 변경하거나 새로운 요소를 추가하거나 기존 요소를 제거하는 등의 작업을 직접 수행합니다.
   DOM 변경이 발생하면, 브라우저는 변경된 DOM 트리를 다시 계산하고, 렌더 트리를 다시 생성한 후 화면에 그립니다. 이 과정은 비용이 많이 드는 연산으로, 자주 발생하게 되면 성능을 저하시킬 수 있습니다.

2. ReactJS
   ReactJS는 DOM 변경을 처리하기 위해 가상 DOM(Virtual DOM)이라는 개념을 도입합니다. ReactJS에서는 먼저 메모리에 가상 DOM 트리를 생성합니다. 이 트리는 실제 DOM 트리의 사본으로서, 실제 DOM 트리와 별도로 존재합니다.
   ReactJS는 상태 변경이 발생할 때마다 새로운 가상 DOM 트리를 생성하고, 이전의 가상 DOM 트리와 비교하여 변경된 부분을 파악합니다. 이렇게 파악된 변경 사항만 실제 DOM에 반영하는 방식을 사용합니다. 이 과정을 '재조정(Reconciliation)' 또는 'Diffing'이라고 부릅니다.
   가상 DOM을 사용함으로써, 변경이 필요한 최소한의 요소만 실제 DOM에 반영되기 때문에 불필요한 연산을 줄이고 성능을 향상시킬 수 있습니다.

따라서, ReactJS는 복잡한 UI 업데이트를 효과적으로 처리할 수 있으며, 이를 통해 웹의 응답성을 향상시키고 사용자 경험을 개선할 수 있습니다!

<br>

리액트JS에서 데이터를 저장시켜 자동으로 리렌더링을 일으킬 수 있는 방법
const data = React.useState();를 console.log 시키면
[undefined, f ] -> undefined와 함수가 적힌 배열이 나타남
undefined는 data이고 f는 data를 바꿀 때 사용하는 함수
React.useState() 함수는 초기값을 설정할 수 있음
즉, undefined는 초기값이고 두 번째 요소인 f는 그 값을 바꾸는 함수

배열을 꺼내기
const x = [1, 2, 3]
const [a, b, c] = x;
으로 꺼낼 수 있음

<br>

setCounter(counter + 1); 을 사용하여 새로운 state를 업데이트할 때,

setState() 즉각적인 명령이 아니라 컴포넌트를 갱신하라고 요청.
setState()는 컴포넌트를 항상 즉각적으로 갱신하지 않음. 오히려 여러 변경 사항과 함께 일괄적으로 갱신하거나, 나중으로 미룰 수 있음. 이로 인하여 setState()를 호출하자마자 this.state에 접근하는 것은 잠재적인 문제가 될 수 있음.
이전 state값을 기준으로 state값을 설정해야 한다면 setState((state)=> state+1)을 사용하는 것이 안전함
(공식문서참고, https://ko.reactjs.org/docs/react-component.html#setstate)

<br>

버튼의 style property(속성)을 사용
style={{
backgroundColor: "tomato",
}}
{ -> 2개 열고 일반적인 HTML방식으로 써주면 됨

그러나 너무 길어진다
이런 스타일들을 모두 갖는 단 한가지의 컴포넌트로 만들어 재사용 가능

내가 만들고 사용하는 모든 컴포넌트들은
function Btn() -> 괄호로 argument(인자)를 받는다.
-> argument의 이름은 마음대로 지어줄 수 있다.
보통은 props라고 부른다. Btn으로부터 전달받는 속성이다.

현재 하고 있는 작업은 Btn이라는 이름의 함수를 부르고 있는 것 뿐
그리고 정보를 함수에 전달하는 것이다.
리액트가 실제로 하는 작업은 Btn() 이렇게 함수를 호출해서
우리가 넣어둔 모든 것들을 첫 번째 인자로 넣어준다.
-> Btn({banana:"Save Changes"})
즉 리액트는 자동으로 이곳에 넣는 모든 prop들을 모두
Btn({banana:"Save Changes"})
위 오브젝트 안으로 집어넣는다.
그리고 이 오브젝트는 Btn() 컴포넌트의 첫 번째 인자로 주어진다.
두 번째 인자는 없다. 유일한 인자이다.
그리고 Btn({banana:"Save Changes"})를 props로 이름 지어준다.
그리고 {props.banana}
이라 적어주어 에 적어주었던 banana 키를 가져온다.
shortcut은 Btn()에 props를 적지 말고 {banana}를 적으면
{banana}적는게 가능하다.

<br>

1.리액트는 파라미터를 잘 못 넘겨도 확인할 수 없는 문제점이 존재한다. 2. 이런 문제를 줄이기 위해서 PropTypes라는 모듈의 도움을 받을 수 있다. 3. type과 다르게 입력 되엇을 경우 warning을 뜨게 할수 있고, parameter 에 값을 넣지 않는 경우 경고 메시지를 띄울수 있다.

<br>

🔥 새롭게 배운 내용 정리

• 리액트를 사용하는 이유: 최소 단위의 렌더링을 위해
• useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
• props: 태그의 속성 값을 함수의 아규먼트 처럼 컴포넌트에 값을 전달해준다.
• useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, 디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 디펜던시는 여러개 입력이 가능하다.

🏴 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다.(wa can use memo)
🏴 propType을 설치하고 props의 타입을 지정해 줄 수 있다. 이 때 isRequired로 필수값을 지정 가능
