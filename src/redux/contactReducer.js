import { createSlice } from '@reduxjs/toolkit';
import { faDog, faCat, faFish } from '@fortawesome/free-solid-svg-icons';

// Define an array of icon options
const iconOptions = [faDog, faCat, faFish];

// Utility function to get a random icon from the options
const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * iconOptions.length);
  return iconOptions[randomIndex];
};

// Define the initial state for the "contacts" slice
const initialState = [];

// Create a slice for the "contacts" state
const contactsSlice = createSlice({
  name: 'contacts', // Name of the slice
  initialState, // Initial state value
  reducers: {
    // Define the "addContact" action and its reducer logic
    addContact: (state, action) => {
      // Create a new contact object with the payload data and a random icon
      const newContact = {
        ...action.payload,
        icon: getRandomIcon(),
      };
      // Add the new contact to the state array
      state.push(newContact);
    },
    // Define the "deleteContact" action and its reducer logic
    deleteContact: (state, action) => {
      // Remove the contact with the specified ID from the state array
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// Extract the "addContact" and "deleteContact" action creators from the slice
export const { addContact, deleteContact } = contactsSlice.actions;

// Export the reducer function from the slice
export default contactsSlice.reducer;
