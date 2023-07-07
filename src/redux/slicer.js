const { createSlice } = require('@reduxjs/toolkit');
const { nanoid } = require('nanoid');

const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialFilterState = { inputValue: '' };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContacts: {
      reducer: (state, action) => {
        state.push(action.payload);
      },

      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name: name.trim(),
            number: number.trim(),
          },
        };
      },
    },

    deleteContacts: (state, action) => {
      const index = state.findIndex(contacts => contacts.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setContactsFilter: {
      reducer: (state, action) => {
        state.inputValue = action.payload;
      },
      prepare: inputValue => {
        return {
          payload: inputValue,
        };
      },
    },
  },
});

export const { setContactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
