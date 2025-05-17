import { useState } from "react";
import { certificates } from "../data/siteData";
import Card from "../components/Card";

export function meta() {
  return [
    { title: "الشهادات والمؤهلات | منصة شواهد" },
    { name: "description", content: "استعراض الشهادات والمؤهلات العلمية والمهنية" },
  ];
}

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState<string>("الكل");
  
  // استخراج جميع الفئات المتاحة في الشهادات
  const categories = ["الكل", ...Array.from(new Set(certificates.map(cert => cert.category)))];
  
  // فلترة الشهادات حسب الفئة المحددة
  const filteredCertificates = activeFilter === "الكل" 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);
    
  return (
    <div className="bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 py-16 relative overflow-hidden">
      {/* زخارف الصفحة */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-purple-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-pink-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-purple-300 rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            <span className="relative z-10">الشهادات والمؤهلات</span>
            <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-300 to-purple-400 opacity-40 transform -rotate-1"></span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            عرض للشهادات والمؤهلات العلمية والمهنية التي حصلت عليها خلال مسيرتي التعليمية والمهنية
          </p>
        </div>
        
        {/* مصفاة التصنيفات */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm ${                activeFilter === category                  ? "bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-md transform -translate-y-0.5"                  : "bg-white text-gray-700 hover:bg-pink-50 hover:text-primary-600 border border-pink-100"              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* عرض الشهادات */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <div className="absolute -z-10 top-1/2 left-1/2 w-96 h-96 bg-floral opacity-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            {filteredCertificates.map((cert) => (
              <Card
                key={cert.id}
                title={cert.title}
                description={cert.description}
                imageUrl={cert.imageUrl}
                date={cert.date}
                category={cert.category}
                link={cert.link}
                tags={[cert.issuer]}
                defaultImageType="certificate"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl shadow-md border border-pink-100">
            <div className="mb-4">
              <svg className="w-16 h-16 text-pink-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 16h.01M12 13a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">لا توجد شهادات في هذا التصنيف.</p>
            <button
              onClick={() => setActiveFilter("الكل")}
              className="px-6 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              عرض جميع الشهادات
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 