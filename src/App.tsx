import type { ReactNode } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import css from "./Layout.module.css";
import WeatherForecast from "./blocks/WeatherForecast";

function App() {
  return (
    <Layout>
      <WeatherForecast />
    </Layout>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className={css.header}>
        <img src={logo} />
      </header>
      <main>{children}</main>
    </>
  );
}

export default App;
