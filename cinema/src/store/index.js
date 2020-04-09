import { createStore, applyMiddleware } from "redux"
import { rootReducer } from "../reducers/index"
import thunk from "redux-thunk"
import { createBrowserHistory } from "history"

export const store = createStore(rootReducer, applyMiddleware(thunk))
export const history = createBrowserHistory()
