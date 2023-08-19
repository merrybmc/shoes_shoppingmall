import { configureStore, createSlice } from '@reduxjs/toolkit';
import user3 from './userSlice';

// npm 설치 : npm install @reduxjs/toolkit react-redux

// Redux store에 state 보관법
// useState 역할
// state 하나를 하나의 slice라고 부름
let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state) {
      return 'john' + state;
    },
  },
});

let user2 = createSlice({
  name: 'user2',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName2(state) {
      // immer.js도 자동으로 설치되어서 가능
      state.name = 'park';
    },
    // 파라미터로 데이터를 받는 법 payload
    increase(state, action) {
      state.age += action.payload;
    },
  },
});

// reducers 함수 export destructure
export let { changeName } = user.actions;
export let { increase } = user2.actions;

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
});

let basket = createSlice({
  name: 'basket',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
});

// 보관함 생성
export default configureStore({
  reducer: {
    user: user.reducer,
    user2: user2.reducer,
    user3: user3.reducer,
    stock: stock.reducer,
    basket: basket.reducer,
  },
});
