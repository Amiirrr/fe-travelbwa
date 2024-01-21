import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/browse-by" element={<LandingPage />} />
                <Route path="/stories" element={<LandingPage />} />
                <Route path="/agents" element={<LandingPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
