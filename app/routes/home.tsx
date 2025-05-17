import type { Route } from "./+types/home";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import Card from "../components/Card";
import { projects, certificates, achievements } from "../data/siteData";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "الملف التعليمي - الرئيسية" },
    { name: "description", content: "ملف الإنجازات التعليمية والبورتفوليو المهني للمعلمة" },
  ];
}

export default function Home() {
  // اختر آخر 3 مشاريع للعرض
  const recentProjects = projects.slice(0, 3);
  // اختر آخر 4 شهادات للعرض
  const recentCertificates = certificates.slice(0, 4);
  // اختر آخر 3 إنجازات للعرض
  const recentAchievements = achievements.slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-white to-fuchsia-50/30">
      <Hero />
      
      <StatsSection />
      
      {/* قسم المشاريع الحديثة */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50 relative">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
              <span className="relative z-10">أحدث المشاريع</span>
              <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-pink-200 opacity-40 transform -rotate-1"></span>
            </h2>
            <Link 
              to="/projects" 
              className="text-primary-600 hover:text-primary-500 font-medium group flex items-center"
            >
              <span>عرض جميع المشاريع</span>
              <span aria-hidden="true" className="inline-block mr-1 transition-transform group-hover:-translate-x-1"> &larr;</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
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
        </div>
      </section>
      
      {/* قسم الشهادات */}
      <section className="py-16 bg-white relative circle-decoration">
        <div className="absolute inset-0 bg-floral opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 relative">
              <span className="relative z-10">الشهادات والمؤهلات</span>
              <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-purple-200 opacity-40 transform -rotate-1"></span>
            </h2>
            <Link 
              to="/certificates" 
              className="text-primary-600 hover:text-primary-500 font-medium group flex items-center"
            >
              <span>عرض جميع الشهادات</span>
              <span aria-hidden="true" className="inline-block mr-1 transition-transform group-hover:-translate-x-1"> &larr;</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentCertificates.map((cert) => (
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
        </div>
      </section>
      
      {/* قسم الإنجازات */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50 relative ribbon-decoration">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 relative">
              <span className="relative z-10">أبرز الإنجازات</span>
              <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-fuchsia-200 opacity-40 transform -rotate-1"></span>
            </h2>
            <Link 
              to="/achievements" 
              className="text-primary-600 hover:text-primary-500 font-medium group flex items-center"
            >
              <span>عرض جميع الإنجازات</span>
              <span aria-hidden="true" className="inline-block mr-1 transition-transform group-hover:-translate-x-1"> &larr;</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentAchievements.map((achievement) => (
              <div 
                key={achievement.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100 card-hover-effect"
              >
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-600 mb-4">
                  {achievement.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* قسم التواصل والدعوة للعمل */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-purple-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 transform -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 transform translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">للتواصل معي</h2>
          <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
            أسعد بالتواصل معكم حول الاستشارات التعليمية، والتعاون في المشاريع التعليمية، أو المساعدة في تطوير أساليب التدريس الحديثة.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-md transition-all"
          >
            تواصل معي الآن
          </Link>
        </div>
      </section>
    </div>
  );
}
