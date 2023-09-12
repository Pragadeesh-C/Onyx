import {createSlice} from '@reduxjs/toolkit';

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: {
    Breakfast: {
      calories: 0,
      rating: 0,
      protein: 0,
    },
    Lunch: {
      calories: 0,
      rating: 0,
      protein: 0,
    },
    Dinner: {
      calories: 0,
      rating: 0,
      protein: 0,
    },
  },
  reducers: {
    setBreakfast: (state, action) => {
      state.Breakfast = action.payload;
    },
    setLunch: (state, action) => {
      state.Lunch = action.payload;
    },
    setDinner: (state, action) => {
      state.Dinner = action.payload;
    },
  },
});

export const {setBreakfast,setLunch,setDinner} = analyticsSlice.actions;
export default analyticsSlice.reducer;
