import Button from "../Button/Button";
import { CounterWrapper, ButtornWrapper, ResultContainer} from './styles'
import { useAppDispatch, useAppSelector } from "store/hooks";
import { counterActions, counterSelectors } from "store/redux/counter/counterSlice";

function Counter() {

  const counter = useAppSelector(counterSelectors.count)

  return (
    <CounterWrapper>
      <ButtornWrapper>
        <Button name="-" type="button" onClick={()=>{}} />
      </ButtornWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtornWrapper>
        <Button name="+" type="button" onClick={()=>{}} />
      </ButtornWrapper>
    </CounterWrapper>
  );
}

export default Counter;