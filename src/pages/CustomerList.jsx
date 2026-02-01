import { useState } from 'react';
import { Phone, MapPin, Edit, Trash2, Plus, Save } from 'lucide-react';
import Modal from '../components/Modal';

const CustomerList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const customers = [
        { id: 2, name: 'ভাই ভাই স্টোর', type: 'খুচরা', phone: '01812345678', address: 'যাত্রাবাড়ী', due: 5000, receivable: 0 },
        { id: 3, name: 'মেসার্স লিটন এন্টারপ্রাইজ', type: 'পাইকার', phone: '01912345678', address: 'বাবুবাজার', due: 12000, receivable: 0 },
    ];

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <h1 className="text-primary text-2xl font-bold">কাস্টমার তালিকা (Customer List)</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md font-medium transition-colors w-full sm:w-auto"
                >
                    <Plus size={18} /> নতুন কাস্টমার যোগ করুন
                </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="p-3 border-b border-border font-semibold">নাম</th>
                                <th className="p-3 border-b border-border font-semibold">ধরন</th>
                                <th className="p-3 border-b border-border font-semibold">যোগাযোগ</th>
                                <th className="p-3 border-b border-border font-semibold">ঠিকানা</th>
                                <th className="p-3 border-b border-border font-semibold">বকেয়া (পাবো)</th>
                                <th className="p-3 border-b border-border font-semibold">অ্যাকশন</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((p) => (
                                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-3 border-b border-border font-semibold">{p.name}</td>
                                    <td className="p-3 border-b border-border">
                                        <span className="px-2 py-1 rounded text-xs bg-amber-100 text-amber-800">
                                            {p.type}
                                        </span>
                                    </td>
                                    <td className="p-3 border-b border-border">
                                        <div className="flex items-center gap-1 text-sm">
                                            <Phone size={14} /> {p.phone}
                                        </div>
                                    </td>
                                    <td className="p-3 border-b border-border">
                                        <div className="flex items-center gap-1 text-sm">
                                            <MapPin size={14} /> {p.address}
                                        </div>
                                    </td>
                                    <td className={`p-3 border-b border-border font-semibold ${p.due > 0 ? 'text-danger' : 'text-success'}`}>
                                        {p.due > 0 ? `৳ ${p.due}` : '-'}
                                    </td>
                                    <td className="p-3 border-b border-border">
                                        <div className="flex gap-2">
                                            <button className="p-1 border border-border rounded hover:bg-bg transition-colors" title="এডিট">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-1 border border-red-200 text-danger rounded hover:bg-red-50 transition-colors" title="মুছুন">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
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
                title="নতুন কাস্টমার যোগ করুন"
            >
                <form className="space-y-4">
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">কাস্টমারের নাম</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="উদাহরণ: ভাই ভাই স্টোর"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">ধরন</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option value="">নির্বাচন করুন</option>
                            <option value="paikar">পাইকার</option>
                            <option value="khuchra">খুচরা</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">স্ট্যাটাস</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option value="milar">ডেবিট</option>
                            <option value="milar">ক্রেডিট</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">মোবাইল</label>
                        <input
                            type="tel"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="017xxxxxxxx"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">ঠিকানা</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="ঠিকানা লিখুন..."
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

export default CustomerList;
