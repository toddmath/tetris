import React from "react"

import Header from "component/Header"
import Title from "component/Title"
import { ThemeSwitch } from "component/ThemeSwitch"
import Tetris from "component/Tetris"
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header>
        <Title />
        <ThemeSwitch />
      </Header>
      <Tetris />
    </React.Fragment>
  )
}

export default App
