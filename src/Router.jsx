import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/home";
// import Home from "@/pages/Home";
import LandingPage from "@/pages/LandingPage";
// import Test from "@/pages/test/test";
import Home from '@/pages/Home'
import Test from "@/pages/test/test";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/browse-by" element={<LandingPage />} />
                <Route path="/stories" element={<LandingPage />} />
                <Route path="/agents" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
