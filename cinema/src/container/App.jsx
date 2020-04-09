import React from "react"
import { Layout } from "antd"
import { MainContainer } from "../routes/main"
import { HeaderComponent } from "../components"

const { Footer } = Layout

export const App = () => (
  <Layout className="Layout">
    <HeaderComponent></HeaderComponent>
    <MainContainer></MainContainer>

    <Footer style={{ textAlign: "center" }}>Author: Andrey Kozarenko</Footer>
  </Layout>
)
