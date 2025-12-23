import { useState } from 'react';
import { Plus, Search, CheckCircle2, XCircle, Save } from 'lucide-react';
import Modal from '../components/Modal';

const MonthlyExpense = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const monthlyExpenses = [
        { id: 1, month: 'ডিসেম্বর ২০২৪', type: 'দোকান ভাড়া', description: 'ডিসেম্বর মাস', amount: 10000, isPaid: true },
        { id: 2, month: 'ডিসেম্বর ২০২৪', type: 'বিদ্যুৎ বিল', description: 'অফিস ও গোডাউন', amount: 2300, isPaid: true },
        { id: 3, month: 'ডিসেম্বর ২০২৪', type: 'স্টাফ বেতন', description: 'ম্যানেজার হোসেন', amount: 15000, isPaid: false },
    ];

    const expenseTypes = ['দোকান ভাড়া', 'বিদ্যুৎ বিল', 'ইন্টারনেট / মোবাইল বিল', 'স্টাফ বেতন', 'লাইসেন্স / ট্যাক্স', 'অন্যান্য মাসিক খরচ'];
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <h1 className="text-primary text-2xl font-bold">মাসিক খরচ (Monthly Cost)</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md font-medium transition-colors w-full sm:w-auto"
                >
                    <Plus size={18} /> নতুন মাসিক খরচ যোগ করুন
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
                                <th className="p-3 border-b border-border font-semibold">মাস</th>
                                <th className="p-3 border-b border-border font-semibold">খরচের ধরন</th>
                                <th className="p-3 border-b border-border font-semibold">বিবরণ</th>
                                <th className="p-3 border-b border-border font-semibold">পরিমাণ (টাকা)</th>
                                <th className="p-3 border-b border-border font-semibold">পরিশোধ হয়েছে?</th>
                                <th className="p-3 border-b border-border font-semibold text-center">অ্যাকশন</th>
                            </tr>
                        </thead>
                        <tbody>
                            {monthlyExpenses.map((expense) => (
                                <tr key={expense.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-3 border-b border-border">{expense.month}</td>
                                    <td className="p-3 border-b border-border">{expense.type}</td>
                                    <td className="p-3 border-b border-border">{expense.description}</td>
                                    <td className="p-3 border-b border-border font-bold text-primary">৳ {expense.amount.toLocaleString()}</td>
                                    <td className="p-3 border-b border-border">
                                        {expense.isPaid ? (
                                            <span className="flex items-center gap-1 text-emerald-600 font-medium">
                                                <CheckCircle2 size={16} /> হ্যাঁ
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1 text-red-500 font-medium">
                                                <XCircle size={16} /> না
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-3 border-b border-border text-center">
                                        <button className="text-sm border border-border px-3 py-1 rounded hover:bg-gray-100 transition-colors">হিসাব আপডেট</button>
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
                title="নতুন মাসিক খরচ যোগ করুন"
            >
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">মাস নির্বাচন করুন</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option value="">নির্বাচন করুন</option>
                                {months.map(m => (
                                    <option key={m} value={m}>{m} ২০২৪</option>
                                ))}
                            </select>
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
                            <label className="block mb-2 font-medium text-gray-700">পরিশোধ হয়েছে?</label>
                            <div className="flex items-center gap-4 h-10">
                                <label className="flex items-center gap-1 cursor-pointer">
                                    <input type="radio" name="paid" className="accent-primary" /> হ্যাঁ
                                </label>
                                <label className="flex items-center gap-1 cursor-pointer">
                                    <input type="radio" name="paid" className="accent-primary" /> না
                                </label>
                            </div>
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
                            <Save size={18} /> সংরক্ষণ করুন
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default MonthlyExpense;
