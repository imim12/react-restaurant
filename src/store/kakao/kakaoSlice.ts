import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MapList, Restaurant } from "../../types/restaurant";


export const fetchKakao = createAsyncThunk(   
    "kakao/fetchKakao",
    async (__, thunkAPI) => {
        
        try{
            const response = await axios.get<Restaurant[]>('/api/kakao/select');

            console.log("response!!",response.data);

            let dataList:MapList[] = [];    
            
            if(response.data){
                response.data.map((info, idx)=>{  //카카오맵에 마커 표시하기 위한 객체를 만들기위함
                    let mapData = {"title": info.storeName, "id":info.id ,"latlng":{"lat":info.lar, "lng":info.lng}}
                    dataList.push(mapData) 
                })
            }
            console.log("dataList", dataList)

            thunkAPI.dispatch(sendMapList(dataList))

            return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue("Error loading products");   //데이터를 가져오다 오류가 났으면 rejectWithValue()로 인해 인자값이 fetchProducts.rejected의 action.payload에 들어가게 됨
        }
    }
)

interface MenuState {
    restaurant : Restaurant[];
    mapList : MapList[];
    isLoading : boolean;
    error : string;
}

const initialState: MenuState = {
    restaurant : [],
    mapList : [],
    isLoading : false,
    error : ""
}

const kakaoSlice = createSlice({
    name: "kakao",
    initialState,
    reducers : {
        sendMapList : (state, action:PayloadAction<MapList[]>)=>{
            state.mapList = action.payload;
            //console.log("mapList",action.payload)
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchKakao.pending, (state) =>{  //가져오는중
            state.isLoading = true;
        })
        .addCase(fetchKakao.fulfilled, (state, action)=>{  //완료했을때
            state.isLoading = false;
            state.restaurant= action.payload;
            //console.log("restaurant",action.payload)
        })
        .addCase(fetchKakao.rejected, (state, action)=>{  //가져오지 못하고 종료됐을때
            state.isLoading = false;
            state.error = action.payload as string;
        })
    }
})



export const { sendMapList } = kakaoSlice.actions;
export default kakaoSlice.reducer;