import { profileData } from "../data/siteData";
import { useState } from "react";

export function meta() {
  return [
    { title: `${profileData.name} - الملف الشخصي | منصة شواهد` },
    { name: "description", content: profileData.bio },
  ];
}

export default function Profile() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 py-16 relative overflow-hidden">
      {/* زخارف الصفحة */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-purple-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-pink-300 rounded-full opacity-30"></div>
      <div className="absolute top-2/3 left-1/3 w-12 h-12 bg-purple-300 rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* بطاقة الملف الشخصي الرئيسية */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-pink-100 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 opacity-50 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 opacity-50 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="md:flex relative z-10">
            <div className="md:flex-shrink-0 p-8 md:p-10 flex items-center justify-center">
              <div className="relative">
                {/* زخرفة حول الصورة */}
                <div className="absolute inset-0 border-4 border-pink-200 rounded-full transform rotate-12 w-52 h-52"></div>
                <div className="absolute inset-0 border-4 border-primary-200 rounded-full transform -rotate-6 w-52 h-52"></div>
                
                {!imageError ? (
                  <img 
                    src={profileData.avatar} 
                    alt={profileData.name}
                    className="h-48 w-48 rounded-full object-cover border-4 border-white shadow-md z-10 relative"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div 
                    data-default-img="profile"
                    className="h-48 w-48 rounded-full border-4 border-white shadow-md z-10 relative flex items-center justify-center"
                  >
                    <span className="sr-only">صورة المستخدم</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-8 md:p-12 w-full relative">
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
                {profileData.title}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6 relative">
                <span className="relative z-10">{profileData.name}</span>
                <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-pink-200 opacity-40 transform -rotate-1"></span>
              </h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {profileData.bio}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-pink-50 px-4 py-2 rounded-full">
                  <svg className="h-5 w-5 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-700">{profileData.email}</span>
                </div>
                <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                  <svg className="h-5 w-5 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-700">+{profileData.phone}</span>
                </div>
                <div className="flex items-center bg-fuchsia-50 px-4 py-2 rounded-full">
                  <svg className="h-5 w-5 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{profileData.location}</span>
                </div>
              </div>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {profileData.socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600 transition-colors duration-200 transform hover:scale-110"
                  >
                    <span className="sr-only">{social.platform}</span>
                    {social.icon === "twitter" && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )}
                    {social.icon === "linkedin" && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {social.icon === "facebook" && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* قسم التعليم */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-fit border border-pink-100 card-hover-effect relative">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-pattern opacity-10"></div>
            <div className="p-8 relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-pink-100 relative">
                <span className="relative z-10">التعليم</span>
                <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-pink-200 opacity-30 transform -rotate-1"></span>
              </h2>
              <div className="space-y-6">
                {profileData.education.map((edu, index) => (
                  <div key={index} className={index !== profileData.education.length - 1 ? "pb-6 border-b border-pink-50" : ""}>
                    <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                    <div className="text-primary-600 font-medium">{edu.school}</div>
                    <div className="text-gray-500 text-sm mt-1">{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* قسم الخبرات */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden col-span-1 lg:col-span-2 border border-pink-100 card-hover-effect relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-floral opacity-10"></div>
            <div className="p-8 relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-pink-100 relative">
                <span className="relative z-10">الخبرات المهنية</span>
                <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-purple-200 opacity-30 transform -rotate-1"></span>
              </h2>
              <div className="space-y-8">
                {profileData.experience.map((exp, index) => (
                  <div key={index} className={index !== profileData.experience.length - 1 ? "pb-8 border-b border-pink-50" : ""}>
                    <div className="flex flex-wrap justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                      <span className="text-primary-600 text-sm font-medium px-3 py-1 bg-primary-50 rounded-full">{exp.duration}</span>
                    </div>
                    <div className="text-gray-700 font-medium mb-2">{exp.company}</div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* قسم المهارات */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden col-span-1 lg:col-span-3 border border-pink-100 card-hover-effect relative">
            <div className="absolute top-0 left-0 w-40 h-40 circle-decoration"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 ribbon-decoration"></div>
            
            <div className="p-8 relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-pink-100 relative">
                <span className="relative z-10">المهارات</span>
                <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-fuchsia-200 opacity-30 transform -rotate-1"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {profileData.skills.map((skillGroup, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-pink-50 p-6 rounded-2xl shadow-sm border border-pink-50">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillGroup.items.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white text-gray-800 rounded-full text-sm shadow-sm border border-pink-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 