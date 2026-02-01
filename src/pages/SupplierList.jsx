import { useState } from 'react';
import { Phone, MapPin, Edit, Trash2, Plus, Save, Filter, Search } from 'lucide-react';
import Modal from '../components/Modal';

const SupplierList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterType, setFilterType] = useState('all');
    const [filterDue, setFilterDue] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const suppliers = [
        { id: 1, name: 'সাথী অটো রাইস মিল', type: 'মিলার', phone: '01712345678', address: 'দিনাজপুর', due: 0, receivable: 0 },
        { id: 2, name: 'মেসার্স জামান ট্রেডার্স', type: 'মিলার', phone: '01987654321', address: 'রংপুর', due: 15000, receivable: 0 },
        { id: 3, name: 'বসুন্ধরা গ্রুপ', type: 'মিলার', phone: '01812345678', address: 'ঢাকা', due: 0, receivable: 0 },
    ];

    const filteredSuppliers = suppliers.filter(supplier => {
        const matchesType = filterType === 'all' || supplier.type === filterType;
        const matchesDue = filterDue === 'all' ||
            (filterDue === 'has_due' && supplier.due > 0) ||
            (filterDue === 'no_due' && supplier.due === 0);
        const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            supplier.phone.includes(searchQuery);

        return matchesType && matchesDue && matchesSearch;
    });

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <h1 className="text-primary text-2xl font-bold">সাপ্লায়ার তালিকা (Supplier List)</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md font-medium transition-colors w-full sm:w-auto"
                >
                    <Plus size={18} /> নতুন সাপ্লায়ার যোগ করুন
                </button>
            </div>

            <div className="flex flex-col gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col sm:flex-row gap-4 items-center flex-wrap">
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="নাম বা মোবাইল নম্বর দিয়ে খুঁজুন..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 font-medium">
                        <Filter size={18} />
                        ফিল্টার:
                    </div>
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full sm:w-auto min-w-[150px]"
                    >
                        <option value="all">সকল ধরন</option>
                        <option value="মিলার">মিলার</option>
                    </select>

                    <select
                        value={filterDue}
                        onChange={(e) => setFilterDue(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full sm:w-auto min-w-[150px]"
                    >
                        <option value="all">সকল বকেয়া</option>
                        <option value="has_due">বকেয়া আছে</option>
                        <option value="no_due">বকেয়া নেই</option>
                    </select>
                </div>
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
                            {filteredSuppliers.length > 0 ? (
                                filteredSuppliers.map((p) => (
                                    <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-3 border-b border-border font-semibold">{p.name}</td>
                                        <td className="p-3 border-b border-border">
                                            <span className="px-2 py-1 rounded text-xs bg-indigo-100 text-indigo-800">
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
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-4 text-center text-gray-500">
                                        কোন তথ্য পাওয়া যায়নি
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="নতুন সাপ্লায়ার যোগ করুন"
            >
                <form className="space-y-4">
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">সাপ্লায়ারের নাম</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="উদাহরণ: সাথী অটো রাইস মিল"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">ধরন</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option value="milar">মিলার</option>
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

export default SupplierList;
