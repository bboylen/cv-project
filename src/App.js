import "./styles/App.css";
import Header from "./components/header";
import Info from "./components/info";
import Education from './components/education'

function App() {
  return (
    <div id="page-wrapper">
      <header className="header">
        <Header />
      </header>
      <main>
        <Info />
        <Education />
      </main>
    </div>
  );
}

export default App;
