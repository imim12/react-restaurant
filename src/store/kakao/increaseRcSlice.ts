import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MapList, Restaurant } from "../../types/restaurant";
import { useNavigate } from "react-router-dom";


export const fetchIncrease = createAsyncThunk(   
    "kakao/fetchIncrease",
    async (data:{}, thunkAPI) => {    
        try{
            const response = await axios.post('/api/kakao/increase', data);
            console.log("response.data",response.data);
        }catch(error){
            return thunkAPI.rejectWithValue("Error loading products");   //데이터를 가져오다 오류가 났으면 rejectWithValue()로 인해 인자값이 fetchProducts.rejected의 action.payload에 들어가게 됨
        }
    }
)

interface MenuState {
    isLoading : boolean;
    error : string;
    success : boolean;
}

const initialState: MenuState = {
    isLoading : false,
    error : "",
    success : false
}

const increaseRcSlice = createSlice({
    name: "increaseRc",
    initialState,
    reducers : {},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchIncrease.pending, (state) =>{  //저장하는 중
            state.isLoading = true;
            state.success = false;
        })
        .addCase(fetchIncrease.fulfilled, (state, action)=>{  //완료했을때
            state.isLoading = false;
            state.success = true;
        })
        .addCase(fetchIncrease.rejected, (state, action)=>{  //저장하지 못하고 종료됐을때
            state.isLoading = false;
            state.error = action.payload as string;
            state.success = false;
        })
    }
})



export const {  } = increaseRcSlice.actions;
export default increaseRcSlice.reducer;