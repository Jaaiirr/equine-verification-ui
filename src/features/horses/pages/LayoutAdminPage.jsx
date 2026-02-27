import { Outlet } from "react-router-dom";
import Header from "../../../shared/components/layout/Header";
import Footer from "../../../shared/components/layout/Footer";

function LayoutAdminPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="xl:col-span-5">
                <Header />
                <main className="flex-1 overflow-y-auto pt-16">
                    <Outlet />
                </main>
                <Footer />                
            </div>
        </div>
    );
}
export default LayoutAdminPage;