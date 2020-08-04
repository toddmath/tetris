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
        <ThemeSwitch />
      </Header>
      <Title />
      <Tetris />
    </React.Fragment>
  )
}

export default App
