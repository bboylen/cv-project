import "./styles/App.css";
import Header from "./components/header";
import Info from "./components/info";


function App() {
  return (
    <div id="page-wrapper">
      <header class="header">
        <Header />
      </header>
      <main>
        <Info />
      </main>
    </div>
  );
}

export default App;
