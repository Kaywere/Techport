import { Link } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-50 via-white to-pink-50 shadow-lg sticky top-0 z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-0 w-24 h-24 bg-pink-200 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-purple-200 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="flex items-center justify-between h-16 relative z-10">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold ">      
                        شواهد              </Link>
            </div>
            <div className="hidden md:block">
              <div className="mr-10 flex items-baseline space-x-4 rtl:space-x-reverse">
                <Link
                  to="/"
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
                >
                  الرئيسية
                </Link>
                <Link
                  to="/profile"
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
                >
                  الملف الشخصي
                </Link>
                <Link
                  to="/certificates"
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
                >
                  الشهادات
                </Link>
                <Link
                  to="/projects"
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
                >
                  المشاريع
                </Link>
                <Link
                  to="/achievements"
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
                >
                  الإنجازات
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
                >
                  اتصل بي
                </Link>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-primary-500 hover:text-white hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-300"
            >
              <span className="sr-only">فتح القائمة الرئيسية</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* القائمة المنسدلة للموبايل */}
      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-sm border-t border-pink-100 rounded-b-xl shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3 sm:px-6 relative z-20">
            <Link
              to="/"
              className="block px-4 py-2 rounded-full text-base font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
            >
              الرئيسية
            </Link>
            <Link
              to="/profile"
              className="block px-4 py-2 rounded-full text-base font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
            >
              الملف الشخصي
            </Link>
            <Link
              to="/certificates"
              className="block px-4 py-2 rounded-full text-base font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
            >
              الشهادات
            </Link>
            <Link
              to="/projects"
              className="block px-4 py-2 rounded-full text-base font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
            >
              المشاريع
            </Link>
            <Link
              to="/achievements"
              className="block px-4 py-2 rounded-full text-base font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
            >
              الإنجازات
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 rounded-full text-base font-medium text-gray-800 hover:bg-pink-100 hover:text-primary-600 transition-colors duration-200"
            >
              اتصل بي
            </Link>
          </div>
          {/* زخارف دائرية */}
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-200 rounded-full opacity-10 transform translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-200 rounded-full opacity-10 transform translate-y-1/2 translate-x-1/2"></div>
        </div>
      )}
    </nav>
  );
} 