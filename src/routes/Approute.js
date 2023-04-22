import { Routes, Route } from "react-router-dom";
import { NoRouteFound } from "./NoRouteFound";
import PageLayout from "../UI/PageLayout";
import Home from "../features/Home/home";
import Signup from "../features/Signup/signup";
import Login from "../features/Login/login";


const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <PageLayout>
                        <Home />
                    </PageLayout>
                </>
            }
            />
            <Route path="/signup" element={
                <>
                    <PageLayout>
                        <Signup />
                    </PageLayout>
                </>
            }
            />
            <Route path="/login" element={
                <>
                    <PageLayout>
                        <Login />
                    </PageLayout>
                </>
            }
            />
            <Route path="*" element={<NoRouteFound />} />
        </Routes>
    );
};
export { AppRoute as Routes };
