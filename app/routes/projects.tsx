import { useState } from "react";
import { projects } from "../data/siteData";
import Card from "../components/Card";

export function meta() {
  return [
    { title: "المشاريع | منصة شواهد" },
    { name: "description", content: "استعراض المشاريع والأعمال التي قمت بها خلال مسيرتي المهنية" },
  ];
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("الكل");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // استخراج جميع الفئات المتاحة في المشاريع
  const categories = ["الكل", ...Array.from(new Set(projects.map(project => project.category)))];
  
  // فلترة المشاريع حسب الفئة والبحث
  const filteredProjects = projects
    .filter(project => activeFilter === "الكل" || project.category === activeFilter)
    .filter(project => 
      searchQuery === "" || 
      project.title.includes(searchQuery) || 
      project.description.includes(searchQuery) ||
      project.tags.some(tag => tag.includes(searchQuery))
    );
    
  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 relative overflow-hidden">
      {/* زخارف الصفحة */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-fuchsia-300 rounded-full opacity-30"></div>
      <div className="absolute top-2/3 left-1/4 w-10 h-10 bg-purple-300 rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            <span className="relative z-10">المشاريع</span>
            <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-300 to-purple-400 opacity-40 transform -rotate-1"></span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            استعراض للمشاريع والأعمال التي قمت بها خلال مسيرتي المهنية في مجال التعليم والتطوير
          </p>
        </div>
        
        {/* البحث والتصفية */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن مشروع..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 pr-12 border border-pink-100 rounded-full focus:ring-primary-400 focus:border-primary-400 bg-white shadow-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${                    activeFilter === category                      ? "bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-md transform -translate-y-0.5"                      : "bg-white text-gray-700 hover:bg-pink-50 hover:text-primary-600 border border-pink-100 shadow-sm"                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* عرض المشاريع */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <div className="absolute -z-10 top-1/2 left-1/2 w-[40rem] h-[40rem] bg-pattern opacity-5 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                date={project.date}
                category={project.category}
                link={project.link}
                tags={project.tags}
                defaultImageType="project"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl shadow-md border border-pink-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-pink-100 opacity-40 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-purple-100 opacity-40 transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <svg className="w-20 h-20 text-pink-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">لم يتم العثور على مشاريع تطابق معايير البحث.</p>
              <button 
                onClick={() => {
                  setActiveFilter("الكل");
                  setSearchQuery("");
                }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                إعادة ضبط البحث
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 