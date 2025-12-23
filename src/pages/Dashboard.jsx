import { TrendingUp, Package, AlertCircle } from 'lucide-react';

const DashboardCard = ({ title, value, subtext, type = 'default' }) => {
    const colors = {
        default: { border: 'border-gray-200', icon: 'text-primary' },
        success: { border: 'border-emerald-500', icon: 'text-emerald-500' },
        warning: { border: 'border-amber-500', icon: 'text-amber-500' },
        danger: { border: 'border-red-500', icon: 'text-red-500' },
    };

    return (
        <div className={`bg-white rounded-lg p-6 shadow-sm mb-4 border-l-4 ${colors[type].border}`}>
            <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
            <div className="text-2xl font-bold mb-1">{value}</div>
            <div className="text-xs text-text-muted">
                {subtext}
            </div>
        </div>
    );
};

const Dashboard = () => {
    return (
        <div>
            <h1 className="mb-6 text-primary text-2xl font-bold">ড্যাশবোর্ড</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <DashboardCard title="আজকের বিক্রি" value="৳ ৫০,০০০" subtext="৫ টি ইনভয়েস" type="success" />
                <DashboardCard title="আজকের ক্রয়" value="৳ ২,০০,০০০" subtext="২ টি চালান" type="warning" />
                <DashboardCard title="মোট স্টক" value="১,৫০০ বস্তা" subtext="সর্বমোট ৭৫,০০০ কেজি" />
                <DashboardCard title="লাভ / লোকসান" value="+ ৳ ৫,০০০" subtext="আজকের" type="success" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">সর্বশেষ লেনদেন</h2>
                        <button className="text-sm px-2 py-1 border border-border rounded hover:bg-bg transition-colors">সব দেখুন</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[500px]">
                            <thead>
                                <tr className="bg-gray-50 text-left">
                                    <th className="p-3 border-b border-border font-semibold">আইডি</th>
                                    <th className="p-3 border-b border-border font-semibold">বিবরণ</th>
                                    <th className="p-3 border-b border-border font-semibold">টাকা</th>
                                    <th className="p-3 border-b border-border font-semibold">স্ট্যাটাস</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 border-b border-border">#INV-001</td>
                                    <td className="p-3 border-b border-border">চান মিয়া (বিক্রয়)</td>
                                    <td className="p-3 border-b border-border">৳ ১২,০০০</td>
                                    <td className="p-3 border-b border-border text-primary font-medium">পরিশোধিত</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-border">#PUR-005</td>
                                    <td className="p-3 border-b border-border">রহিম মিলস (ক্রয়)</td>
                                    <td className="p-3 border-b border-border">৳ ১,৫০,০০০</td>
                                    <td className="p-3 border-b border-border text-amber-500 font-medium">আংশিক বকেয়া</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-border">#INV-002</td>
                                    <td className="p-3 border-b border-border">ভাই ভাই ট্রেডার্স</td>
                                    <td className="p-3 border-b border-border">৳ ৮,৫০০</td>
                                    <td className="p-3 border-b border-border text-danger font-medium">বকেয়া</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">স্টক সতর্কতা</h2>
                        <AlertCircle size={20} className="text-danger" />
                    </div>
                    <ul className="list-none">
                        <li className="p-3 border-b border-border flex justify-between items-center">
                            <span>নাজিরশাইল (প্রিমিয়াম)</span>
                            <span className="bg-red-50 text-red-500 px-2 py-1 rounded-full text-xs font-semibold">স্টক শেষ</span>
                        </li>
                        <li className="p-3 border-b border-border flex justify-between items-center">
                            <span>মিনিকেট (স্পেশাল)</span>
                            <span className="bg-amber-50 text-amber-500 px-2 py-1 rounded-full text-xs font-semibold">১০ বস্তা বাকি</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
