import { useNavigate } from 'react-router-dom';
import { Lock, Phone, ArrowRight } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg bg-gradient-to-br from-[#dcfce7] to-[#f3f4f6]">
            <div className="bg-white rounded-lg p-10 shadow-sm w-full max-w-[400px]">
                <div className="text-center mb-8">
                    <div className="w-[60px] h-[60px] bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        <Lock size={30} />
                    </div>
                    <h1 className="text-2xl text-primary mb-2 font-bold">লগইন</h1>
                    <p className="text-text-muted">মেসার্স সুরুজ কমিশনার চালের আড়ৎ</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">মোবাইল নম্বর</label>
                        <div className="relative">
                            <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                className="w-full p-3 pl-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="017xxxxxxxx"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium">পাসওয়ার্ড</label>
                        <div className="relative">
                            <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                className="w-full p-3 pl-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mb-6 text-sm">
                        <a href="#" className="text-primary font-medium no-underline hover:underline">পাসওয়ার্ড ভুলে গেছেন?</a>
                    </div>

                    <button type="submit" className="w-full py-3 text-base flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white rounded-md font-medium transition-colors">
                        প্রবেশ করুন <ArrowRight size={18} />
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-text-muted border-t border-border pt-6">
                    কোনো অ্যাকাউন্ট নেই? <a href="#" className="text-primary font-semibold no-underline hover:underline">নতুন অ্যাকাউন্ট তৈরি করুন</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
