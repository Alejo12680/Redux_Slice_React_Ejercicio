import { createSlice } from "@reduxjs/toolkit";


// Definimos el slice para el "Countador"
const counterSlide = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    incremet: state => state + 1,
    decrement: state => state - 1,
  }
});

// Definimos el slice para el "User"
const userSlide = createSlice({
  name: 'user',
  initialState: {name: ''},
  reducers: {
    setName: (state, action) => {
      return { ...state, name: action.payload };
    }
  }
});

// Exportar las acciones de los slices
export const { incremet, decrement } = counterSlide.actions;
export const {setName} = userSlide.actions;

// Exportar los reducer
export const counterReducer = counterSlide.reducer;
export const userReducer = userSlide.reducer;