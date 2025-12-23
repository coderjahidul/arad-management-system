import { useState } from 'react';
import { Save, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const PaymentEntry = () => {
    const [type, setType] = useState('received'); // 'received' or 'paid'

    return (
        <div>
            <h1 className="text-primary text-2xl font-bold mb-6">পেমেন্ট / আদায়</h1>

            <div className="bg-white rounded-lg p-6 shadow-sm max-w-[600px] mx-auto">
                <div className="flex mb-8 border-b border-border">
                    <button
                        onClick={() => setType('received')}
                        className={`flex-1 p-4 border-none bg-transparent font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors ${type === 'received'
                                ? 'border-b-4 border-success text-success'
                                : 'text-text-muted hover:text-text-main'
                            }`}
                    >
                        <ArrowDownCircle size={20} /> টাকা গ্রহণ (জমা)
                    </button>
                    <button
                        onClick={() => setType('paid')}
                        className={`flex-1 p-4 border-none bg-transparent font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors ${type === 'paid'
                                ? 'border-b-4 border-danger text-danger'
                                : 'text-text-muted hover:text-text-main'
                            }`}
                    >
                        <ArrowUpCircle size={20} /> টাকা প্রদান (খরচ)
                    </button>
                </div>

                <form>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">{type === 'received' ? 'টাকা দাতা (পার্টি)' : 'টাকা গ্রহীতা (পার্টি)'}</label>
                        <select className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option>পার্টি নির্বাচন করুন</option>
                            <option>ভাই ভাই স্টোর</option>
                            <option>মেসার্স লিটন এন্টারপ্রাইজ</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">তারিখ</label>
                        <input type="date" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">পরিমাণ (টাকা)</label>
                        <input
                            type="number"
                            className={`w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-bold text-xl ${type === 'received' ? 'text-success' : 'text-danger'
                                }`}
                            placeholder="0.00"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">পেমেন্ট মেথড</label>
                        <div className="flex gap-2">
                            <button type="button" className="flex-1 py-2 border border-primary bg-green-50 text-primary rounded transition-colors font-medium">নগদ</button>
                            <button type="button" className="flex-1 py-2 border border-border hover:bg-bg rounded transition-colors font-medium">ব্যাংক</button>
                            <button type="button" className="flex-1 py-2 border border-border hover:bg-bg rounded transition-colors font-medium">মোবাইল</button>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">মন্তব্য (অপশনাল)</label>
                        <textarea className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" rows="2" placeholder="প্রয়োজনে মন্তব্য লিখুন..."></textarea>
                    </div>

                    <div className="mt-8">
                        <button type="button" className={`w-full p-3 flex items-center justify-center gap-2 text-white rounded-md font-medium transition-colors ${type === 'received' ? 'bg-primary hover:bg-primary-hover' : 'bg-danger hover:bg-red-600'}`}>
                            <Save size={18} /> {type === 'received' ? 'টাকা গ্রহণ সংরক্ষণ করুন' : 'পেমেন্ট প্রদান সংরক্ষণ করুন'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentEntry;
