import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function Layout() {
    return (
        <div>
            <header>
                <h1>My Portfolio</h1>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}