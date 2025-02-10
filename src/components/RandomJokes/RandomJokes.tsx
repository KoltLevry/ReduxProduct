import Button from "components/Button/Button";
import { JokeCard, JokesContainer, RandomJokesWrapper, JokeWrapper, JokeText } from "./styles";

function RandomJokes() {



  return (
    <RandomJokesWrapper>
      <JokeCard>
        <Button name='GET JOKES' onClick={() => { }} />
        <JokesContainer>
        </JokesContainer>
        <Button name='DELETE JOKES' onClick={() => { }} />
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes;