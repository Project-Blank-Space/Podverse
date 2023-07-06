import NavBar from "./Navbar";

const PageLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main className="flex w-full">
                <div className="min-h-screen w-full static max-h-full overflow-visible pt-[120px]">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default PageLayout;
