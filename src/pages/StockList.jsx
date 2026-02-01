import { useState } from 'react';
import { Plus, Search, Save } from 'lucide-react';
import Modal from '../components/Modal';

const StockList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const stockItems = [
        { id: 1, name: 'মিনিকেট', type: 'সরু', bags: 50, weight: 50 },
        { id: 2, name: 'নাজিরশাইল', type: 'সরু', bags: 20, weight: 50 },
        { id: 3, name: 'কাটারি ভোগ', type: 'সুগন্ধি', bags: 10, weight: 25 },
        { id: 4, name: 'BR28', type: 'মাঝারি', bags: 100, weight: 50 },
    ];

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <h1 className="text-primary text-2xl font-bold">চালের তালিকা ও স্টক</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md font-medium transition-colors w-full sm:w-auto"
                >
                    <Plus size={18} /> নতুন চাল যোগ করুন
                </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="relative flex-1">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="চালের নাম দিয়ে খুঁজুন..."
                            className="w-full p-2 pl-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <select className="p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-[200px]">
                        <option>সকল ধরন</option>
                        <option>সরু</option>
                        <option>মাঝারি</option>
                        <option>মোটা</option>
                        <option>সুগন্ধি</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="p-3 border-b border-border font-semibold">চালের নাম</th>
                                <th className="p-3 border-b border-border font-semibold">ধরন</th>
                                <th className="p-3 border-b border-border font-semibold">বস্তা সংখ্যা</th>
                                <th className="p-3 border-b border-border font-semibold">প্রতি বস্তা (কেজি)</th>
                                <th className="p-3 border-b border-border font-semibold">অ্যাকশন</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stockItems.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-3 border-b border-border font-medium">{item.name}</td>
                                    <td className="p-3 border-b border-border">{item.type}</td>
                                    <td className="p-3 border-b border-border">{item.bags}</td>
                                    <td className="p-3 border-b border-border">{item.weight} কেজি</td>
                                    <td className="p-3 border-b border-border">
                                        <button className="px-3 py-1 border border-border rounded hover:bg-bg transition-colors text-sm">আপডেট</button>
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
                title="নতুন চাল যোগ করুন"
            >
                <form className="space-y-4">
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">চালের নাম</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="উদাহরণ: মিনিকেট"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">ধরন</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option value="">নির্বাচন করুন</option>
                            <option value="soru">সরু</option>
                            <option value="majhari">মাঝারি</option>
                            <option value="mota">মোটা</option>
                            <option value="sugondhi">সুগন্ধি</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">বস্তা সংখ্যা</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="উদাহরণ: 10"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">প্রতি বস্তা (কেজি)</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option value="">নির্বাচন করুন</option>
                            <option value="25">25 কেজি</option>
                            <option value="50">50 কেজি</option>
                        </select>
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

export default StockList;
