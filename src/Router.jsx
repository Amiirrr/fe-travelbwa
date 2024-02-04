import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import Checkout from "./pages/Checkout";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/browse-by" element={<LandingPage />} />
                <Route path="/stories" element={<LandingPage />} />
                <Route path="/agents" element={<LandingPage />} />
                <Route path="/detail" element={<DetailsPage />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
