import React from "react"
import { Logo } from "./Logo"
import { Nav } from "./Nav"
import { UserIcon } from "./User"
export const Header = () => (
  <header>
    <div>
      <Logo></Logo>
    </div>
    <div>
      <Nav></Nav>
    </div>
    <div>
      <UserIcon></UserIcon>
    </div>
  </header>
)
