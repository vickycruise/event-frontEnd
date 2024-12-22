import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import logger from "./middlewares/logger";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
