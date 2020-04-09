import React from "react"
import { Layout } from "antd"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { getMovies } from "../actions/movies"

const { Content } = Layout

export class Main extends React.Component {
  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    return (
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">Content</div>
        <Switch>
          <Route exact path={"/"}></Route>
          <Route path={"/movie/:id"}></Route>
        </Switch>
      </Content>
    )
  }
}
const mapDispatchToProps = {
  getMovies,
}

export const MainContainer = connect(null, mapDispatchToProps)(Main)
