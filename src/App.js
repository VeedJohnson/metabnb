import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar, Home} from "./components";
import ConnectModal from "./components/ConnectModal";
import Footer from "./components/Footer";
import PlacesToStay from "./components/PlacesToStay";
import ModalProvider from "./contexts/ModalContext/ModalContext";

function App() {
    return (
        <ModalProvider>
        <BrowserRouter>
            <div className="appWrapper">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/places" element={<PlacesToStay />} />
                    </Routes>
                    <Footer />
                    <ConnectModal />
            </div>
        </BrowserRouter>
        </ModalProvider>
    )
}

export default App;
