import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the "filter" slice
const initialState = '';

// Create a slice for the "filter" state
const filterSlice = createSlice({
  name: 'filter', // Name of the slice
  initialState, // Initial state value
  reducers: {
    // Define the "setFilter" action and its reducer logic
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

// Extract the "setFilter" action creator from the slice
export const { setFilter } = filterSlice.actions;

// Export the reducer function from the slice
export default filterSlice.reducer;
