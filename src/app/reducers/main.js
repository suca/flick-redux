import { combineReducers } from "redux/es/redux";
import photosReducers from './photosReducers';
import tagListReducers from "./tagListReducers";

const reducers = combineReducers({
    tagListState: tagListReducers,
    photosState: photosReducers,
});

export default reducers;
