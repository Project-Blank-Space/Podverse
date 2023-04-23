import { Routes, Route } from "react-router-dom";
import { NoRouteFound } from "./NoRouteFound";
import PageLayout from "../UI/PageLayout";
import DashboardLayout from "../UI/DashboardLayout";
import Home from "../features/Home/home";
import Signup from "../features/Signup/signup";
import Login from "../features/Login/login";
import Profile from "../features/profile/profile";
import DashboardHome from "../features/Dashboard/Home/home";
import Discover from "../features/Dashboard/Discover/discover";


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
            <Route path="/profile" element={
                <>
                    <PageLayout>
                        <Profile />
                    </PageLayout>
                </>
            }
            />
            <Route path="/dashboard" element={
                <>
                    <DashboardLayout>
                        <DashboardHome />
                    </DashboardLayout>
                </>
            }
            />
            <Route path="/discover" element={
                <>
                    <DashboardLayout>
                        <Discover />
                    </DashboardLayout>
                </>
            }
            />
            <Route path="*" element={<NoRouteFound />} />
        </Routes>
    );
};
export { AppRoute as Routes };
