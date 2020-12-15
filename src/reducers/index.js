import { combineReducers } from "redux";
import { addReducer } from "./addReducer";
import { contactReducer } from "./contactReducer";
import { contactsReducer } from "./contactsReducer";
import { editReducer } from "./editReducer";
import { loginReducer } from "./loginReducer";

export const reducers = combineReducers({
  contactsReducer : contactsReducer,
  contactReducer : contactReducer,
  editReducer : editReducer,
  loginReducer : loginReducer,
  addReducer : addReducer
});
