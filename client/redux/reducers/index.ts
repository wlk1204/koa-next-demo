import { combineReducers } from "redux";
import counter from "./counter";
import editor from "./editor";

export default combineReducers({
  ...counter,
  ...editor,
});
