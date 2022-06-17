import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      // https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
      // Follow the rule of not mutating states in Redux
      // Spread operator returns a copy of the original values
      return {
        ...state,
        isOpen: true,
      };
    },
    closeModal(state) {
      // state.isOpen = false
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
