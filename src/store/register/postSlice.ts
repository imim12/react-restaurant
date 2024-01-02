import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostData } from "../../types/post";


interface PostState {
    postData: PostData;
    isLoading : boolean;
    error : string;
}

const initialState: PostState = {
    postData: {} as PostData,
    isLoading : false,
    error : ""
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers : {
        setPostData : (state, action:PayloadAction<PostData>) => {
            console.log("postData",action.payload);
            state.postData = action.payload 
            
        }
    }
})



export const { setPostData } = postSlice.actions;
export default postSlice.reducer;