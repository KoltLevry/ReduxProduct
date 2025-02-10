🔹 Покрокова інструкція, як написати такий код
1️⃣ Створити типи для стану
```
export interface FeedbackStateSlice {
  likes: number;
  dislikes: number;
}
```
2️⃣ Створити Redux Slice (feedbackSlice.ts)
Оголосити initialState
Додати reducers
Додати selectors
Експортувати actions та selectors
3️⃣ Створити компонент Feedback.tsx
Використати useAppSelector() для отримання likes і dislikes
Використати useAppDispatch() для зміни стану через екшени
Відобразити UI з кнопками

📌 Висновок
- Reducers змінюють стан у Redux.
- Selectors дозволяють отримувати дані.
- Компонент Feedback використовує useAppSelector() і useAppDispatch() для взаємодії з Redux.
- Кнопки змінюють значення likes і dislikes через dispatch(feedbackActions.addLike()).

Так працює Redux у React! 🚀