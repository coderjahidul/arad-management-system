import { useState } from 'react';
import { Plus, Search, Calendar, Wallet, Save } from 'lucide-react';
import Modal from '../components/Modal';

const DailyExpense = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dailyExpenses = [
        { id: 1, date: '২০২৪-১২-২৪', type: 'শ্রমিক মজুরি', description: '১০ জন শ্রমিক', amount: 5000, method: 'নগদ' },
        { id: 2, date: '২০২৪-১২-২৪', type: 'গাড়ি ভাড়া', description: 'ট্রাক লোড আনলোড', amount: 3000, method: 'নগদ' },
        { id: 3, date: '২০২৪-১২-২৪', type: 'চা–নাস্তা', description: 'মেহমান আপ্যায়ন', amount: 500, method: 'বিকাশ' },
    ];

    const expenseTypes = ['শ্রমিক মজুরি', 'লোডিং / আনলোডিং', 'গাড়ি ভাড়া', 'চা–নাস্তা', 'বাজার খরচ', 'ছোটখাটো খরচ'];
    const paymentMethods = ['নগদ', 'ব্যাংক', 'বিকাশ / নগদ'];

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <h1 className="text-primary text-2xl font-bold">দৈনিক খরচ (Daily Cost)</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md font-medium transition-colors w-full sm:w-auto"
                >
                    <Plus size={18} /> নতুন দৈনিক খরচ যোগ করুন
                </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="relative flex-1">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="খরচের বিবরণ দিয়ে খুঁজুন..."
                            className="w-full p-2 pl-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="p-3 border-b border-border font-semibold">তারিখ</th>
                                <th className="p-3 border-b border-border font-semibold">খরচের ধরন</th>
                                <th className="p-3 border-b border-border font-semibold">বিবরণ</th>
                                <th className="p-3 border-b border-border font-semibold">পরিমাণ (টাকা)</th>
                                <th className="p-3 border-b border-border font-semibold">পরিশোধ পদ্ধতি</th>
                                <th className="p-3 border-b border-border font-semibold text-center">অ্যাকশন</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dailyExpenses.map((expense) => (
                                <tr key={expense.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-3 border-b border-border">{expense.date}</td>
                                    <td className="p-3 border-b border-border">{expense.type}</td>
                                    <td className="p-3 border-b border-border">{expense.description}</td>
                                    <td className="p-3 border-b border-border font-bold text-primary">৳ {expense.amount.toLocaleString()}</td>
                                    <td className="p-3 border-b border-border">
                                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                                            {expense.method}
                                        </span>
                                    </td>
                                    <td className="p-3 border-b border-border text-center">
                                        <button className="text-sm border border-border px-3 py-1 rounded hover:bg-gray-100 transition-colors">এডিট</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="নতুন দৈনিক খরচ যোগ করুন"
            >
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">খরচের তারিখ</label>
                            <input
                                type="date"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">খরচের ধরন</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option value="">নির্বাচন করুন</option>
                                {expenseTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">খরচের বিবরণ</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="বিবরণ লিখুন..."
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">পরিমাণ (টাকা)</label>
                            <input
                                type="number"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="0.00"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">পরিশোধ পদ্ধতি</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option value="">নির্বাচন করুন</option>
                                {paymentMethods.map(method => (
                                    <option key={method} value={method}>{method}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            বাতিল
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors flex items-center gap-2"
                        >
                            <Save size={18} /> খরচ সংরক্ষণ করুন
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default DailyExpense;
