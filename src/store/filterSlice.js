import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state[action.payload.id] = [...(state[action.payload.id] ?? []), action.payload.filter]
    },
    removeFilter: (state, action) => {
      state[action.payload.id] = state[action.payload.id].filter(value => value !== action.payload.filter)
    },
    resetFilter: (state) => {
      for (var key of Object.keys(state)) {
        delete state[key]
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFilter, removeFilter, resetFilter } = filterSlice.actions

export default filterSlice.reducer