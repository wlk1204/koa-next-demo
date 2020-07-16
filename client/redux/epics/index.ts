import { combineEpics } from "redux-observable";
import counter from "./counter";
import editor from "./editor";

export default combineEpics(...counter, ...editor);
