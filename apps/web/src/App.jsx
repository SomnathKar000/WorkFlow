import TopAppBar from "./components/TopAppBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { SnackbarProvider } from "./context/SnackbarContext";

function App() {
  return (
    <SnackbarProvider>
      <div style={{ backgroundColor: "#FFFFFF", color: "#111111", minHeight: "100dvh" }}>
        <TopAppBar />
        <Home />
        <Footer />
      </div>
    </SnackbarProvider>
  );
}

export default App;
