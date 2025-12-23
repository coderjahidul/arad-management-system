import { useState } from 'react';
import { TrendingUp, Clock, History, Edit2, Save } from 'lucide-react';
import Modal from '../components/Modal';

const MarketRates = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const rates = [
        { id: 1, name: 'মিনিকেট (সরু)', price: 65.00, lastUpdate: 'আজ সকাল ১০:০০' },
        { id: 2, name: 'নাজিরশাইল (প্রিমিয়াম)', price: 72.00, lastUpdate: 'আজ সকাল ১০:০০' },
        { id: 3, name: 'কাটারি ভোগ', price: 85.00, lastUpdate: 'গতকাল' },
        { id: 4, name: 'BR28 (বোরো)', price: 55.00, lastUpdate: 'আজ সকাল ১০:০০' },
        { id: 5, name: 'স্বর্ণা (মোটা)', price: 48.00, lastUpdate: '২ দিন আগে' },
    ];

    return (
        <div>
            <h1 className="text-primary text-2xl font-bold mb-6">বাজার দর (Market Rates)</h1>

            <div className="grid grid-cols-[2fr_1fr] gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-medium">আজকের চালের বাজার দর</h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-3 py-1.5 rounded text-sm font-medium transition-colors"
                        >
                            <Edit2 size={16} /> দর আপডেট করুন
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-left">
                                    <th className="p-3 border-b border-border font-semibold">চালের নাম</th>
                                    <th className="p-3 border-b border-border font-semibold text-right">বর্তমান দর (কেজি)</th>
                                    <th className="p-3 border-b border-border font-semibold text-right">সর্বশেষ আপডেট</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rates.map((r) => (
                                    <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-3 border-b border-border font-semibold">{r.name}</td>
                                        <td className="p-3 border-b border-border text-right font-bold text-primary">৳ {r.price.toFixed(2)}</td>
                                        <td className="p-3 border-b border-border text-right text-text-muted text-sm">
                                            <div className="flex items-center justify-end gap-1">
                                                <Clock size={14} /> {r.lastUpdate}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <div className="bg-[#ecfccb] border-l-4 border-[#84cc16] p-6 rounded-lg shadow-sm mb-6">
                        <h3 className="text-[#3f6212] font-medium mb-2">বাজার বিশ্লেষণ</h3>
                        <p className="text-[#4d7c0f] text-sm">
                            গত সপ্তাহের তুলনায় <strong>নাজিরশাইল</strong> চালের দাম প্রতি কেজিতে ৳ ২.০০ বৃদ্ধি পেয়েছে।
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h3 className="text-base font-medium mb-4 border-b border-border pb-2">দর ইতিহাস</h3>
                        <button className="w-full flex justify-between items-center border border-border hover:bg-bg px-4 py-2 rounded-md font-medium transition-colors">
                            <span>পুরনো দর দেখুন</span>
                            <History size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="বাজার দর আপডেট করুন"
            >
                <form className="space-y-4">
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">চালের নাম</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option value="">নির্বাচন করুন</option>
                            {rates.map(r => (
                                <option key={r.id} value={r.id}>{r.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">নতুন দর (প্রতি কেজি)</label>
                        <input
                            type="number"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0.00"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">মন্তব্য (ঐচ্ছিক)</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="কোনো বিশেষ কারণ..."
                            rows="2"
                        ></textarea>
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

export default MarketRates;
