import React from "react"
import ReactDOM from "react-dom"
import "./assets/style/index.scss"
import { Provider } from "react-redux"
import { App } from "./container/App"
import { store, history } from "./store"
import { Router } from "react-router-dom"

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
)
