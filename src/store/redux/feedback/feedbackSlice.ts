import { createAppSlice } from "store/createAppSlice";
// 🟢 Крок 1: Оголошення типів стану
import { FeedbackStateSlice } from "./types";

// 🟢 Крок 2: Початковий стан (Initial State)
const feedbackInitialState: FeedbackStateSlice = { likes: 0, dislikes: 0 };

// 🟢 Крок 3: Створення feedbackSlice через createAppSlice
export const feedbackSlice = createAppSlice({
  // ^🔹 name: "FEEDBACK" — ім'я slice, яке буде використовуватись у Redux DevTools.
  // *🔹 initialState — задає початковий стан.
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  //🟢 Крок 4: reducers (редуктори)
  reducers: create => ({
    addLike: create.reducer((state: FeedbackStateSlice) => {
      state.likes += 1;
    }),
    addDislike: create.reducer((state: FeedbackStateSlice) => {
      state.dislikes += 1;
    }),
    resetFeedback: create.reducer((state: FeedbackStateSlice) => {
      state.likes = 0;
      state.dislikes = 0;
    })
  }),
  //  🔹 reducers — це функції, які змінюють стан (state).
  //  🔹 create.reducer(...) — функція, яка змінює стан без мутації (immer.js дозволяє так робити).
  // 👉 Що роблять ці редуктори?
    // addLike: збільшує likes на 1.
    // addDislike: збільшує dislikes на 1.
    // resetFeedback: скидає обидва значення до 0.

  // 🟢 Крок 5: selectors (селектори)
  selectors: {
    selectLikes: (state: FeedbackStateSlice) => state.likes,
    selectDislikes: (state: FeedbackStateSlice) => state.dislikes
  }
  // Що таке selectors?
  // 🔹 selectors — це функції, які дозволяють отримати потрібні дані зі стану.
  // 👉 Що роблять ці селектори?
    // selectLikes: повертає likes зі стану.
    // selectDislikes: повертає dislikes.
});

// 🟢 Крок 6: Експорт екшенів та селекторів
export const feedbackActions = feedbackSlice.actions;
export const feedbackSelectors = feedbackSlice.selectors;
// 🔹 feedbackActions містить усі екшени (addLike, addDislike, resetFeedback).
// 🔹 feedbackSelectors містить селектори (selectLikes, selectDislikes).