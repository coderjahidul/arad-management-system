import { Printer, Download, Share2 } from 'lucide-react';

const Invoice = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6 no-print">
                <h1 className="text-primary text-2xl font-bold">ইনভয়েস / রসিদ</h1>
                <div className="flex gap-3">
                    <button onClick={handlePrint} className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2">
                        <Printer size={18} /> প্রিন্ট করুন
                    </button>
                    <button className="border border-border hover:bg-bg px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2">
                        <Download size={18} /> PDF ডাউনলোড
                    </button>
                    <button className="border border-[#25D366] text-[#25D366] hover:bg-green-50 px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2">
                        <Share2 size={18} /> WhatsApp
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg p-12 shadow-sm max-w-[800px] mx-auto print:shadow-none print:border-none print:p-0" id="invoice-area">
                {/* Header */}
                <div className="text-center mb-8 border-b-2 border-border pb-6">
                    <h1 className="text-primary text-3xl font-bold mb-2">মেসার্স সুরুজ কমিশনার চালের আড়ৎ</h1>
                    <p className="text-text-muted">লাকসাম, বাজার, কুমিল্লা।</p>
                    <p className="text-text-muted">মোবাইল: ০১৭১২-৩৪৫৬৭৮</p>
                </div>

                {/* Info */}
                <div className="flex justify-between mb-8">
                    <div>
                        <h3 className="text-gray-400 text-base mb-1">কাস্টমার:</h3>
                        <p className="font-bold text-lg">ভাই ভাই স্টোর</p>
                        <p className="text-text-muted">যাত্রাবাড়ী, ঢাকা</p>
                        <p className="text-text-muted">০১৭১১-০০০০০০</p>
                    </div>
                    <div className="text-right">
                        <h3 className="text-gray-400 text-base mb-1">ইনভয়েস তথ্য:</h3>
                        <p><strong>ইনভয়েস নং:</strong> #INV-2025-001</p>
                        <p><strong>তারিখ:</strong> ১২ জানুয়ারী, ২০২৫</p>
                    </div>
                </div>

                {/* Table */}
                <div className="mb-8">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b-2 border-border">
                                <th className="p-3 text-left font-bold">বিবরণ</th>
                                <th className="p-3 text-center font-bold">বস্তা</th>
                                <th className="p-3 text-right font-bold">দর (কেজি)</th>
                                <th className="p-3 text-right font-bold">মোট টাকা</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border">
                                <td className="p-3">
                                    <div className="font-semibold">মিনিকেট (স্পেশাল)</div>
                                    <small className="text-text-muted">৫০ কেজি বস্তা</small>
                                </td>
                                <td className="p-3 text-center">৫০</td>
                                <td className="p-3 text-right">৳ ৬৫.০০</td>
                                <td className="p-3 text-right">৳ ১,৬২,৫০০</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-3">
                                    <div className="font-semibold">নাজিরশাইল</div>
                                    <small className="text-text-muted">৫০ কেজি বস্তা</small>
                                </td>
                                <td className="p-3 text-center">২০</td>
                                <td className="p-3 text-right">৳ ৭০.০০</td>
                                <td className="p-3 text-right">৳ ৭০,০০০</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Summary */}
                <div className="flex justify-end mb-12">
                    <div className="w-[300px]">
                        <div className="flex justify-between py-2 border-b border-border">
                            <span>মোট বিল:</span>
                            <span className="font-semibold">৳ ২,৩২,৫০০</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                            <span>লেবার খরচ:</span>
                            <span className="font-semibold">৳ ৫০০</span>
                        </div>
                        <div className="flex justify-between py-2 border-b-2 border-border text-xl font-bold text-primary">
                            <span>সর্বমোট:</span>
                            <span>৳ ২,৩৩,০০০</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border mt-2">
                            <span>জমা (পরিশোধ):</span>
                            <span className="font-semibold text-success">(-) ৳ ১,০০,০০০</span>
                        </div>
                        <div className="flex justify-between py-2 text-danger font-bold">
                            <span>বকেয়া থাকবে:</span>
                            <span>৳ ১,৩৩,০০০</span>
                        </div>
                    </div>
                </div>

                {/* Signatures */}
                <div className="flex justify-between mt-16">
                    <div className="border-t border-gray-400 w-[200px] text-center pt-2 text-text-muted">
                        কাস্টমারের স্বাক্ষর
                    </div>
                    <div className="border-t border-gray-400 w-[200px] text-center pt-2 text-text-muted">
                        কর্তৃপক্ষের স্বাক্ষর
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-gray-400">
                    <p>আমাদের সাথে ব্যবসা করার জন্য ধন্যবাদ।</p>
                </div>
            </div>

            <style>
                {`
          @media print {
            .no-print, aside, nav {
              display: none !important;
            }
            main {
              margin-left: 0 !important;
              width: 100% !important;
              padding: 0 !important;
            }
            body {
              background-color: white !important;
            }
          }
        `}
            </style>
        </div>
    );
};

export default Invoice;
