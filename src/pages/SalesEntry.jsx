import { Save, Printer } from 'lucide-react';

const SalesEntry = () => {
    return (
        <div>
            <h1 className="mb-6 text-primary text-2xl font-bold">নতুন বিক্রয় (Sales)</h1>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-lg font-medium mb-6 border-b border-border pb-3">বিক্রয় তথ্য</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">কাস্টমারের নাম</label>
                            <div className="flex gap-4">
                                <select className="flex-1 p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                    <option>নির্বাচন করুন</option>
                                    <option>ভাই ভাই স্টোর</option>
                                    <option>মেসার্স লিটন এন্টারপ্রাইজ</option>
                                </select>
                                <button type="button" className="px-3 py-2 border border-border rounded-md hover:bg-bg transition-colors">+</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block mb-2 font-medium">চালের ধরন</label>
                                <select className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                    <option>নির্বাচন করুন</option>
                                    <option>মিনিকেট</option>
                                    <option>নাজিরশাইল</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-medium">বর্তমান স্টক</label>
                                <input type="text" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg" value="৫০ বস্তা" readOnly />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block mb-2 font-medium">বস্তা সংখ্যা</label>
                                <input type="number" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="0" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-medium">মোট বিল</label>
                                <input type="number" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-bold text-primary" placeholder="0.00" readOnly />
                            </div>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <button type="button" className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-md font-medium transition-colors">
                                <Save size={18} /> বিক্রয় সংরক্ষণ করুন
                            </button>
                            <button type="button" className="flex items-center justify-center gap-2 border border-border hover:bg-bg px-6 rounded-md font-medium transition-colors">
                                <Printer size={18} /> রসিদ প্রিন্ট
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
                    <h2 className="text-lg font-medium mb-6 border-b border-border pb-3">পেমেন্ট</h2>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">মোট বিল</label>
                        <div className="text-3xl font-bold text-primary text-right mb-4">৳ ০.০০</div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">নগদ গ্রহণ</label>
                        <input type="number" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-xl font-semibold" placeholder="0.00" />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">বাকি থাকবে</label>
                        <input type="number" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-amber-50 text-amber-600 font-semibold" placeholder="0.00" readOnly />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">পেমেন্ট মেথড</label>
                        <div className="flex gap-2">
                            <button className="flex-1 py-2 border border-primary bg-green-50 text-primary rounded transition-colors font-medium">নগদ</button>
                            <button className="flex-1 py-2 border border-border hover:bg-bg rounded transition-colors font-medium">ব্যাংক</button>
                            <button className="flex-1 py-2 border border-border hover:bg-bg rounded transition-colors font-medium">বিকাশ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesEntry;
