import { Save, User, Lock, Building, Globe } from 'lucide-react';

const Settings = () => {
    return (
        <div>
            <h1 className="text-primary text-2xl font-bold mb-6">সেটিংস (Settings)</h1>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">

                {/* Profile Settings */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-lg font-medium mb-6 border-b border-border pb-2 flex items-center gap-2">
                        <User size={20} /> প্রোফাইল
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">নাম</label>
                            <input type="text" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" defaultValue="মোঃ আব্দুল্লাহ" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">মোবাইল নম্বর</label>
                            <input type="text" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg" defaultValue="০১৭১২-৩৪৫৬৭৮" readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">পদবী</label>
                            <input type="text" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg" defaultValue="ম্যানেজার" readOnly />
                        </div>
                        <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-md font-medium transition-colors">
                            <Save size={18} /> সেভ করুন
                        </button>
                    </form>
                </div>

                {/* Security Settings */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-lg font-medium mb-6 border-b border-border pb-2 flex items-center gap-2">
                        <Lock size={20} /> পাসওয়ার্ড পরিবর্তন
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">বর্তমান পাসওয়ার্ড</label>
                            <input type="password" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="••••••••" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">নতুন পাসওয়ার্ড</label>
                            <input type="password" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="••••••••" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">পাসওয়ার্ড নিশ্চিত করুন</label>
                            <input type="password" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="••••••••" />
                        </div>
                        <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-md font-medium transition-colors">
                            <Save size={18} /> পাসওয়ার্ড পরিবর্তন করুন
                        </button>
                    </form>
                </div>

                {/* Business Settings */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-lg font-medium mb-6 border-b border-border pb-2 flex items-center gap-2">
                        <Building size={20} /> আড়তের তথ্য
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">আড়তের নাম</label>
                            <input type="text" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" defaultValue="মেসার্স সুরুজ কমিশনার চালের আড়ৎ" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">ঠিকানা</label>
                            <textarea className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" rows="2" defaultValue="লাকসাম, বাজার, কুমিল্লা।"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">যোগাযোগ</label>
                            <input type="text" className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" defaultValue="01711-326510" />
                        </div>
                        <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-md font-medium transition-colors">
                            <Save size={18} /> তথ্য আপডেট করুন
                        </button>
                    </form>
                </div>

                {/* App Settings */}
                <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
                    <h2 className="text-lg font-medium mb-6 border-b border-border pb-2 flex items-center gap-2">
                        <Globe size={20} /> অ্যাপ সেটিংস
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">ভাষা (Language)</label>
                            <select className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option>বাংলা</option>
                                <option>English</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">থিম (Theme)</label>
                            <select className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option>লাইট (Light)</option>
                                <option>ডার্ক (Dark)</option>
                            </select>
                        </div>
                        <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-md font-medium transition-colors">
                            <Save size={18} /> সেভ করুন
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Settings;
