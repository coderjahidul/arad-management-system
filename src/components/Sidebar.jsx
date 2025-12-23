import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    BadgeDollarSign,
    Users,
    BookOpen,
    CreditCard,
    FileText,
    TrendingUp,
    Settings,
    LogOut,
    X,
    Wallet,
    Calendar,
    BarChart3
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();

    const menuItems = [
        { path: '/', label: 'ড্যাশবোর্ড', icon: <LayoutDashboard size={20} /> },
        { path: '/stock', label: 'চাল ও স্টক', icon: <Package size={20} /> },
        { path: '/purchase', label: 'ক্রয় (Purchase)', icon: <ShoppingCart size={20} /> },
        { path: '/sales', label: 'বিক্রয় (Sales)', icon: <BadgeDollarSign size={20} /> },
        { path: '/parties', label: 'পার্টি ম্যানেজমেন্ট', icon: <Users size={20} /> },
        { path: '/ledger', label: 'লেজার ও হিসাব', icon: <BookOpen size={20} /> },
        { path: '/payments', label: 'পেমেন্ট / আদায়', icon: <CreditCard size={20} /> },
        { path: '/invoice', label: 'ইনভয়েস / রসিদ', icon: <FileText size={20} /> },
        { path: '/market-rates', label: 'বাজার দর', icon: <TrendingUp size={20} /> },
        { path: '/expenses/daily', label: 'দৈনিক খরচ', icon: <Wallet size={20} /> },
        { path: '/expenses/monthly', label: 'মাসিক খরচ', icon: <Calendar size={20} /> },
        { path: '/expenses/report', label: 'খরচ রিপোর্ট', icon: <BarChart3 size={20} /> },
        { path: '/settings', label: 'সেটিংস', icon: <Settings size={20} /> },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div className={`
                w-[250px] h-screen bg-white border-r border-border flex flex-col 
                fixed left-0 top-0 z-50 transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0
            `}>
                <div className="p-6 border-b border-border flex justify-between items-start">
                    <div>
                        <h2 className="text-xl font-bold text-primary">মেসার্স সুরুজ কমিশনার চালের আড়ৎ</h2>
                        <small className="text-text-muted">ম্যানেজমেন্ট সিস্টেম</small>
                    </div>
                    <button onClick={onClose} className="md:hidden text-text-muted hover:text-danger">
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex-1 p-4 overflow-y-auto">
                    <ul className="list-none">
                        {menuItems.map((item) => (
                            <li key={item.path} className="mb-2">
                                <Link
                                    to={item.path}
                                    onClick={() => window.innerWidth < 768 && onClose()}
                                    className={`flex items-center px-4 py-3 rounded-md gap-3 font-medium transition-colors ${location.pathname === item.path
                                        ? 'bg-primary text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-4 border-t border-border">
                    <button
                        className="flex items-center w-full px-4 py-3 text-danger gap-3 font-medium hover:bg-red-50 rounded-md transition-colors"
                    >
                        <LogOut size={20} />
                        লগআউট
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
