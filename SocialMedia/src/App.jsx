import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
