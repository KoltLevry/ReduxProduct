import { useState } from "react";
import Button from "../Button/Button";
import { FeedbackContainer, FeedbackResultContainer, LikeDislikeContainer, ResultContainer} from "./styles";

function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);
  console.log("render");

  const addLike = (): void => {
    setLikes((prevValue) => prevValue + 1);
  };

  const addDislike = (): void  => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = (): void  => {
    setLikes(0);
    setDislike(0);
  };

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <ResultContainer>{likes}</ResultContainer>
          <Button name="LIKE" type="button" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <ResultContainer>{dislike}</ResultContainer>
          <Button name="DISLIKE" type="button" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" type="button" onClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;