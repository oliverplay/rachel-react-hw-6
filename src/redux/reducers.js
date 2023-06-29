import { createSlice } from '@reduxjs/toolkit';

// Create a slice for the "filter" state
const filterSlice = createSlice({
  name: 'filter', // Name of the slice
  initialState: '', // Initial state value
  reducers: {
    // Define the "setFilter" action and its reducer logic
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

// Define the initial state for the "contacts" slice
const initialState = [];

// Create a slice for the "contacts" state
const contactsSlice = createSlice({
  name: 'contacts', // Name of the slice
  initialState, // Initial state value
  reducers: {
    // Define the "addContact" action and its reducer logic
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    // Define the "deleteContact" action and its reducer logic
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// Extract the action creators from the slices
export const { addContact, deleteContact } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;

// Create an object that maps the reducers to their corresponding slice
const reducers = {
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
};

export default reducers;
