import Button from "../Button/Button";
import { useState } from "react";
import { CounterWrapper, ButtornWrapper, ResultContainer} from './styles'

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const onPlusClick = (): void => {
    setCounter((prevValue) => {
      return prevValue + 1;
    });
  };

  console.log("counter in Counter Component", counter);

  const onMinusClick = (): void => {
    setCounter((prevValue) => prevValue - 1);
  };

  return (
    <CounterWrapper>
      <ButtornWrapper>
        <Button name="-" type="button" onClick={onMinusClick} />
      </ButtornWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtornWrapper>
        <Button name="+" type="button" onClick={onPlusClick} />
      </ButtornWrapper>
    </CounterWrapper>
  );
}

export default Counter;