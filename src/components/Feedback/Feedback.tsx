import Button from "../Button/Button";
import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result
} from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { feedbackActions, feedbackSelectors } from "store/redux/feedback/feedbackSlice";

function Feedback() {
  const likes = useAppSelector(feedbackSelectors.selectLikes);
  const dislikes = useAppSelector(feedbackSelectors.selectDislikes);
  const dispatch = useAppDispatch();

  const addLike = () => {
    dispatch(feedbackActions.addLike());
  };

  const addDislike = () => {
    dispatch(feedbackActions.addDislike());
  };

  const resetResults = () => {
    dispatch(feedbackActions.resetFeedback());
  };

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{likes}</Result>
          <Button name="LIKE" type="button" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislikes}</Result>
          <Button name="DISLIKE" type="button" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" type="button" onClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;
