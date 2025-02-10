import Button from "../Button/Button";
import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result
} from "./styles";
// 🟢 Крок 1: Імпорт необхідних модулів
import { useAppDispatch, useAppSelector } from "store/hooks";
// 🔹 useAppDispatch — дозволяє викликати екшени.
// 🔹 useAppSelector — дозволяє отримувати дані зі стану.
import { feedbackActions, feedbackSelectors } from "store/redux/feedback/feedbackSlice";
   
// 🖥 2. Компонент Feedback.tsx
// ➡ Цей компонент відображає кнопки, показує лайки/дизлайки і дозволяє змінювати стан через Redux.
// ➡ Він використовує селектори, щоб отримати дані зі стану.
// ➡ Він використовує диспетчер, щоб викликати екшени та змінювати стан.

function Feedback() {
  // 🟢 Крок 2: Отримання стану з Redux
  const likes = useAppSelector(feedbackSelectors.selectLikes);
  const dislikes = useAppSelector(feedbackSelectors.selectDislikes);
  // 🟢 Крок 3: Використання dispatch для зміни стану
  const dispatch = useAppDispatch();

  // 🔹 dispatch викликає екшени, які змінюють стан (addLike, addDislike, resetFeedback).
  const addLike = () => {
    dispatch(feedbackActions.addLike());
  };

  const addDislike = () => {
    dispatch(feedbackActions.addDislike());
  };

  const resetResults = () => {
    dispatch(feedbackActions.resetFeedback());
  };

  // 🟢 Крок 4: Відображення UI
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
