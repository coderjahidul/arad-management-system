import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

const Layout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex bg-bg min-h-screen">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="flex-1 md:ml-[250px] min-h-screen flex flex-col transition-all duration-300">
                {/* Mobile Header */}
                <div className="md:hidden bg-white p-4 shadow-sm flex items-center gap-4 sticky top-0 z-30">
                    <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-bg rounded-md">
                        <Menu size={24} />
                    </button>
                    <span className="font-bold text-primary">মেসার্স সুরুজ কমিশনার</span>
                </div>

                <div className="p-4 md:p-8 flex-1">
                    <Outlet />
                </div>

                <footer className="mt-auto p-4 text-center text-text-muted text-sm border-t border-border bg-bg">
                    সর্বস্বত্ব সংরক্ষিত © ২০২৫ | মেসার্স সুরুজ কমিশনার চালের আড়ৎ ম্যানেজমেন্ট সিস্টেম
                </footer>
            </main>
        </div>
    );
};

export default Layout;
