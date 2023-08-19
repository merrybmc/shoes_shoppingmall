import { createSlice } from '@reduxjs/toolkit';

// slice 따로 보관
let user3 = createSlice({
  name: 'user3',
  initialState: { name: 'cho', age: 29 },
  reducers: {
    changeName3(state) {
      return state + 'name';
    },
  },
});

export let { changeName3 } = user3.actions;

export default user3;
