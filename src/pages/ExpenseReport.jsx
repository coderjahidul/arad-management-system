import { Search, Filter, ArrowRight } from 'lucide-react';

const SummaryCard = ({ title, value, subtext, colorClass }) => (
    <div className={`bg-white rounded-lg p-6 shadow-sm border-l-4 ${colorClass}`}>
        <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="text-xs text-text-muted">{subtext}</div>
    </div>
);

const ExpenseReport = () => {
    const expenses = [
        { id: 1, date: '২০২৪-১২-২৪', type: 'ডেলি', category: 'শ্রমিক মজুরি', description: '১০ জন শ্রমিক', amount: 5000 },
        { id: 2, date: '২০২৪-১২-২৪', type: 'ডেলি', category: 'গাড়ি ভাড়া', description: 'ট্রাক লোড', amount: 3000 },
        { id: 3, date: '২০২৪-১২-২০', type: 'মান্থলি', category: 'দোকান ভাড়া', description: 'ডিসেম্বর', amount: 10000 },
        { id: 4, date: '২০২৪-১২-১৫', type: 'মান্থলি', category: 'স্টাফ বেতন', description: 'ম্যানেজার', amount: 15000 },
    ];

    return (
        <div>
            <h1 className="text-primary text-2xl font-bold mb-6">খরচ রিপোর্ট (Expense Report)</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <SummaryCard
                    title="আজকের মোট খরচ"
                    value="৳ ৮,৫০০"
                    subtext="৩ টি আইটেম"
                    colorClass="border-amber-500"
                />
                <SummaryCard
                    title="এই মাসের মোট খরচ"
                    value="৳ ৩৩,০০০"
                    subtext="ডিসেম্বর ২০২৪"
                    colorClass="border-emerald-500"
                />
                <SummaryCard
                    title="বাকি থাকা মাসিক খরচ"
                    value="৳ ১৫,০০০"
                    subtext="মজুরি ও বিল"
                    colorClass="border-red-500"
                />
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                    <h2 className="text-lg font-bold">খরচের তালিকা</h2>
                    <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded border border-border">
                            <input type="date" className="bg-transparent focus:outline-none text-sm" />
                            <ArrowRight size={14} className="text-gray-400" />
                            <input type="date" className="bg-transparent focus:outline-none text-sm" />
                        </div>
                        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-hover transition-colors text-sm">
                            <Filter size={16} /> রিপোর্ট দেখুন
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="p-3 border-b border-border font-semibold">তারিখ</th>
                                <th className="p-3 border-b border-border font-semibold">ধরন</th>
                                <th className="p-3 border-b border-border font-semibold">বিভাগ</th>
                                <th className="p-3 border-b border-border font-semibold">বিবরণ</th>
                                <th className="p-3 border-b border-border font-semibold text-right">পরিমাণ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-3 border-b border-border">{item.date}</td>
                                    <td className="p-3 border-b border-border">
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.type === 'ডেলি' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'
                                            }`}>
                                            {item.type}
                                        </span>
                                    </td>
                                    <td className="p-3 border-b border-border text-sm text-gray-600">{item.category}</td>
                                    <td className="p-3 border-b border-border">{item.description}</td>
                                    <td className="p-3 border-b border-border text-right font-bold text-gray-800">৳ {item.amount.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="bg-gray-50">
                                <td colSpan="4" className="p-3 font-bold text-right">সর্বমোট:</td>
                                <td className="p-3 font-bold text-right text-primary">৳ ৩৩,০০০</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ExpenseReport;
