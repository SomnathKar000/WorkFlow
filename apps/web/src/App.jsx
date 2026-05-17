import TopAppBar from "./components/TopAppBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", color: "#111111", minHeight: "100dvh" }}>
      <TopAppBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
