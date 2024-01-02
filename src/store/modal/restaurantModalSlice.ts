import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalState {
    restaurantModal: boolean,
}


const initialState: ModalState = {
    restaurantModal: false,
   
}


const restaurantModalSlice = createSlice({
    name: "restaurantModal",
    initialState,
    reducers: {
        modalState: (state,  action:PayloadAction<boolean> ) => {
           state.restaurantModal = action.payload;
        }
    }
})

export const {
    modalState
} = restaurantModalSlice.actions;

export default restaurantModalSlice.reducer;