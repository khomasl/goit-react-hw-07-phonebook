import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import { changeFilter } from './contacts-actions'

const changeFilterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
})

const filterReducer = combineReducers({
  filter: changeFilterReducer,
})

export default filterReducer

// const findContact = (contacts, name) => {
//   const normName = name.toLowerCase()
//   return contacts.find((contact) => contact.name.toLowerCase() === normName)
// }

// const itemsReducer = createReducer([], {
//   [addNewContact]: (state, { payload }) =>
//     !findContact(state, payload.name)
//       ? [...state, payload]
//       : alert(`${payload} is already in contact`),
// })
