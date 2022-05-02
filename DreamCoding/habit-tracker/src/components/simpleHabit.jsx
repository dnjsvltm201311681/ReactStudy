import React, { useCallback, useEffect, useRef, useState } from "react";
//class는 render 함수만 랜더링 된다. 한번만들어진 멤버변수는 한번만 할당되는 반면에
//function 컴포넌트는 props,state가 변경되면 함수이기 때문에
//전체가 랜더링 된다. 즉 멤버변수가 계속 만들어지고 호출되어진다.
//ex) handleIncrement는 class에서는 한번만 만들어지고 재사용되는반면
//    function함수에서는 클릭때마다 계속 새로 만듫어진다. 즉 함수를
//    재사용이 아니라 새로 만들어진다.. == 자원낭비
//그렇다면 useState는 계속 호출될때마다 초기값을 가지고 오는거 아닌가?
//훅은 반복해서 실행되도 미리 따로 메모리에 저장해놓기에 걱정할 필요없다.

//위 문제에 대한 해결방법
//1. ref: useRef를 사용한다.
//2. 함수: useCallBack를 사용한다.
const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();
  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  });
  useEffect(() => {
    console.log(`'hello',${count}`);
  }, [count]);
  return (
    <li>
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
