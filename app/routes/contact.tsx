import { useState } from "react";
import { profileData } from "../data/siteData";

export function meta() {
  return [
    { title: "اتصل بي | منصة شواهد" },
    { name: "description", content: "تواصل معي للاستفسارات أو التعاون المهني" },
  ];
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // التحقق من صحة المدخلات
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        success: false,
        message: "الرجاء ملء جميع الحقول المطلوبة."
      });
      return;
    }
    
    // محاكاة إرسال النموذج
    setFormStatus({
      success: true,
      message: "تم إرسال رسالتك بنجاح. سيتم التواصل معك قريباً."
    });
    
    // إعادة تعيين النموذج
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // إخفاء الرسالة بعد 5 ثواني
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };
  
  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 relative overflow-hidden">
      {/* زخارف الصفحة */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-fuchsia-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-purple-300 rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            <span className="relative z-10">تواصل معي</span>
            <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-300 to-purple-400 opacity-40 transform -rotate-1"></span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            يسعدني تلقي استفساراتك أو طلبات التعاون المهني. يمكنك التواصل معي مباشرة عبر النموذج أدناه.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* معلومات التواصل */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-pink-100 relative overflow-hidden card-hover-effect">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pattern opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 circle-decoration"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 relative inline-block">
                  <span className="relative z-10">معلومات التواصل</span>
                  <span className="absolute -z-10 bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-300 to-primary-400 opacity-30 transform -rotate-1"></span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center ml-4">
                      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-900 mb-1">البريد الإلكتروني</p>
                      <p className="text-primary-600">{profileData.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center ml-4">
                      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-900 mb-1">الهاتف</p>
                      <p className="text-purple-600">+{profileData.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center ml-4">
                      <svg className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-900 mb-1">الموقع</p>
                      <p className="text-pink-600">{profileData.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-pink-100">
                  <h3 className="text-lg font-medium text-gray-900 mb-6 relative inline-block">
                    <span className="relative z-10">تابعني على</span>
                    <span className="absolute -z-10 bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-300 to-fuchsia-400 opacity-30 transform -rotate-1"></span>
                  </h3>
                  <div className="flex space-x-5 rtl:space-x-reverse">
                    {profileData.socialMedia.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-primary-500 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <span className="sr-only">{social.platform}</span>
                        {social.icon === "twitter" && (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        )}
                        {social.icon === "linkedin" && (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        )}
                        {social.icon === "facebook" && (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* نموذج التواصل */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-pink-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-floral opacity-10 transform -translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 ribbon-decoration"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 relative inline-block">
                  <span className="relative z-10">أرسل رسالة</span>
                                                         <span className="absolute -z-10 bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-300 to-purple-400 opacity-30 transform -rotate-1"></span>
                </h2>
                
                {formStatus && (
                  <div className={`p-6 mb-8 rounded-2xl ${formStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border border-pink-100 rounded-xl focus:ring-primary-400 focus:border-primary-400 bg-white shadow-sm transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border border-pink-100 rounded-xl focus:ring-primary-400 focus:border-primary-400 bg-white shadow-sm transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-pink-100 rounded-xl focus:ring-primary-400 focus:border-primary-400 bg-white shadow-sm transition-colors"
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      الرسالة <span className="text-primary-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-pink-100 rounded-xl focus:ring-primary-400 focus:border-primary-400 bg-white shadow-sm transition-colors"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      إرسال الرسالة
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 