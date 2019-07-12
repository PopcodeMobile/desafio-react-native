import { createStore } from "redux";

import reducers from "./redux";

const store = createStore(reducers);

export default store;