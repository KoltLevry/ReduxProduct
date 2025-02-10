import { createAppSlice } from "store/createAppSlice";
import { FeedbackStateSlice } from "./types";

const feedbackInitialState: FeedbackStateSlice = { likes: 0, dislikes: 0 };

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
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
  selectors: {
    selectLikes: (state: FeedbackStateSlice) => state.likes,
    selectDislikes: (state: FeedbackStateSlice) => state.dislikes
  }
});

export const feedbackActions = feedbackSlice.actions;
export const feedbackSelectors = feedbackSlice.selectors;
