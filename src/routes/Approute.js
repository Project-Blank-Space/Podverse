import { Routes, Route } from "react-router-dom";
import { NoRouteFound } from "./NoRouteFound";
import Home from "../features/Home/home";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Home />
                </>
            }
            />
            <Route path="*" element={<NoRouteFound />} />
        </Routes>
    );
};
export { AppRoute as Routes };
