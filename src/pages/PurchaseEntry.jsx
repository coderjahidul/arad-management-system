import { Save } from 'lucide-react';

const PurchaseEntry = () => {
    return (
        <div>
            <h1 className="mb-6 text-primary text-2xl font-bold">নতুন ক্রয় এন্ট্রি (Purchase)</h1>

            <div className="bg-white rounded-lg p-8 shadow-sm max-w-[800px]">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">মিলারের নাম</label>
                            <select className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option>নির্বাচন করুন</option>
                                <option>সাথী অটো রাইস মিল</option>
                                <option>রহিম এগ্রো ফুডস</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 font-medium">চালের ধরন</label>
                            <select className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option>নির্বাচন করুন</option>
                                <option>মিনিকেট</option>
                                <option>নাজিরশাইল</option>
                                <option>BR28</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 font-medium">বস্তা সংখ্যা</label>
                            <input type="number" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="0" />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 font-medium">প্রতি বস্তার ওজন (কেজি)</label>
                            <select className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option>নির্বাচন করুন</option>
                                <option>25 কেজি</option>
                                <option>50 কেজি</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 font-medium">প্রতি বস্তার দর (টাকা)</label>
                            <input type="number" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="0.00" />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 font-medium">মোট টাকা</label>
                            <input type="number" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg" placeholder="0.00" readOnly />
                        </div>
                    </div>

                    <div className="border-t border-border my-6"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">পরিবহন ভাড়া</label>
                            <input type="number" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="0.00" />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 font-medium">অন্যান্য খরচ</label>
                            <input type="number" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="0.00" />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 font-medium">সর্বমোট টাকা</label>
                            <input type="number" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg" placeholder="0.00" readOnly />
                        </div>
                    </div>

                    <div className="mt-8 text-right">
                        <button type="button" className="px-8 py-3 text-base flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white rounded-md font-medium transition-colors inline-flex">
                            <Save size={20} /> ক্রয় সংরক্ষণ করুন
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PurchaseEntry;
