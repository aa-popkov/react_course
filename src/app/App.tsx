import React, { Suspense, useContext, useState } from "react"
import "./styles/index.scss"
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={"/"}>MainPage</Link>
      <Link to={"/about"}>AboutPage</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
