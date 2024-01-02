import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface NoteState {
    kakaoModal: boolean,
}


const initialState: NoteState = {
    kakaoModal: false,
   
}


const kakaoModalSlice = createSlice({
    name: "modalList",
    initialState,
    reducers: {
        modalState: (state,  action:PayloadAction<boolean> ) => {
           state.kakaoModal = action.payload;
        }
    }
})

export const {
    modalState
} = kakaoModalSlice.actions;

export default kakaoModalSlice.reducer;