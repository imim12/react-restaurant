import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menu/menuSlice';
import kakaoReducer from './kakao/kakaoSlice'
import postReducer from './register/postSlice'
import registerReducer from './register/registerSlice'
import kakaoModalReducer from './kakao/kakaoModalSlice'
import increaseRcReducer from './kakao/increaseRcSlice'
import restaurantModalReducer from './modal/restaurantModalSlice'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        kakao: kakaoReducer,
        post: postReducer,
        register: registerReducer,
        kakaoModal : kakaoModalReducer,
        increaseRc : increaseRcReducer,
        restaurantModal : restaurantModalReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;