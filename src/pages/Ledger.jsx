import { Search, Calendar, Download, Printer } from 'lucide-react';

const Ledger = () => {
    const transactions = [
        { id: 1, date: '০১/০১/২০২৫', desc: 'বিক্রয় - মিনিকেট ৫০ বস্তা', type: 'debit', amount: 125000, balance: 125000 },
        { id: 2, date: '০২/০১/২০২৫', desc: 'নগদ জমা', type: 'credit', amount: 50000, balance: 75000 },
        { id: 3, date: '০৫/০১/২০২৫', desc: 'বিক্রয় - নাজিরশাইল ২০ বস্তা', type: 'debit', amount: 60000, balance: 135000 },
        { id: 4, date: '১০/০১/২০২৫', desc: 'চেক জমা (Pubali Bank)', type: 'credit', amount: 100000, balance: 35000 },
    ];

    return (
        <div>
            <h1 className="text-primary text-2xl font-bold mb-6">হিসাব খাতা (Ledger)</h1>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 items-end">
                    <div className="mb-0">
                        <label className="block mb-2 font-medium">পার্টি নির্বাচন করুন</label>
                        <select className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option>কোনো একটি সিলেক্ট করুন</option>
                            <option>সাথী অটো রাইস মিল (মিলার)</option>
                            <option>ভাই ভাই স্টোর (কাস্টমার)</option>
                        </select>
                    </div>

                    <div className="mb-0">
                        <label className="block mb-2 font-medium">তারিখ থেকে</label>
                        <input type="date" className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>

                    <div className="mb-0">
                        <label className="block mb-2 font-medium">তারিখ পর্যন্ত</label>
                        <input type="date" className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>

                    <button className="h-[42px] flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md font-medium transition-colors">
                        <Search size={18} /> হিসাব দেখুন
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mb-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-danger text-center">
                    <small className="text-text-muted">মোট দেনা</small>
                    <div className="text-2xl font-bold text-danger">৳ ০.০০</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-success text-center">
                    <small className="text-text-muted">মোট পাওনা</small>
                    <div className="text-2xl font-bold text-success">৳ ৩৫,০০০</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-primary text-center">
                    <small className="text-text-muted">বর্তমান ব্যালেন্স</small>
                    <div className="text-2xl font-bold text-primary">৳ ৩৫,০০০</div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                    <h2 className="text-lg font-medium text-center sm:text-left">ভাই ভাই স্টোর - লেনদেন বিবরণী</h2>
                    <div className="flex gap-2">
                        <button className="p-2 border border-border rounded hover:bg-bg transition-colors" title="প্রিন্ট"><Printer size={18} /></button>
                        <button className="p-2 border border-border rounded hover:bg-bg transition-colors" title="ডাউনলোড"><Download size={18} /></button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="p-3 border-b border-border font-semibold">তারিখ</th>
                                <th className="p-3 border-b border-border font-semibold">বিবরণ</th>
                                <th className="p-3 border-b border-border font-semibold text-right">ಡೆবিট (খরচ/বিক্রয়)</th>
                                <th className="p-3 border-b border-border font-semibold text-right">ক্রেডিট (জমা)</th>
                                <th className="p-3 border-b border-border font-semibold text-right">ব্যালেন্স</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-3 border-b border-border">{t.date}</td>
                                    <td className="p-3 border-b border-border">{t.desc}</td>
                                    <td className="p-3 border-b border-border text-right text-danger">
                                        {t.type === 'debit' ? `৳ ${t.amount.toLocaleString()}` : '-'}
                                    </td>
                                    <td className="p-3 border-b border-border text-right text-success">
                                        {t.type === 'credit' ? `৳ ${t.amount.toLocaleString()}` : '-'}
                                    </td>
                                    <td className="p-3 border-b border-border text-right font-bold">
                                        ৳ {t.balance.toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Ledger;
