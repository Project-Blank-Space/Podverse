import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {

  return (
    <div>
      <main className="flex w-full">
        <Sidebar />
        <div className="min-h-screen w-full static max-h-full overflow-visible py-12 px-3 ">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
