import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-floral opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight decoration-dots">
            ملف <span className="text-gradient">الإنجازات التعليمية</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            توثيق مسيرتي التعليمية وإنجازاتي المهنية في مجال التعليم. استعراض شهاداتي ومشاريعي التربوية والتعليمية.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/profile" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-md"
            >
              السيرة الذاتية
            </Link>
            <Link 
              to="/achievements" 
              className="inline-flex items-center justify-center px-8 py-3 border border-pink-200 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-sm"
            >
              إنجازاتي
            </Link>
          </div>
        </div>
      </div>

      {/* عناصر زخرفية */}
      <div className="absolute -bottom-10 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-30 transform translate-x-1/3"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-200 rounded-full opacity-40"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-40"></div>
      
      {/* زخارف إضافية - أزهار وأشكال مختلفة */}
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-pink-300 rounded-full opacity-40"></div>
      <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-purple-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-40"></div>
    </div>
  );
} 