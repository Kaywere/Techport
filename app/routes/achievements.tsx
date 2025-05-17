import { achievements } from "../data/siteData";

export function meta() {
  return [
    { title: "الإنجازات | منصة شواهد" },
    { name: "description", content: "عرض الإنجازات والجوائز التي حصلت عليها خلال مسيرتي المهنية والتعليمية" },
  ];
}

export default function Achievements() {
  // تنظيم الإنجازات حسب الأعوام مع أحدث الإنجازات أولاً
  const achievementsByYear: Record<string, typeof achievements> = {};
  
  achievements.sort((a, b) => {
    // استخراج السنة من حقل التاريخ (افتراض أن آخر 4 أرقام تمثل السنة)
    const yearA = a.date.slice(-4);
    const yearB = b.date.slice(-4);
    return yearB.localeCompare(yearA);
  });
  
  achievements.forEach(achievement => {
    // استخراج السنة من حقل التاريخ
    const year = achievement.date.slice(-4);
    if (!achievementsByYear[year]) {
      achievementsByYear[year] = [];
    }
    achievementsByYear[year].push(achievement);
  });
  
  // تحويل القاموس إلى مصفوفة من السنوات مرتبة تنازلياً
  const years = Object.keys(achievementsByYear).sort((a, b) => b.localeCompare(a));
  
  return (
    <div className="bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 py-16 relative overflow-hidden">
      {/* زخارف الصفحة */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full opacity-20 transform -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-fuchsia-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-purple-300 rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            <span className="relative z-10">الإنجازات</span>
            <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-300 to-purple-400 opacity-40 transform -rotate-1"></span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            عرض الإنجازات والجوائز التي حصلت عليها خلال مسيرتي المهنية والتعليمية
          </p>
        </div>
        
        <div className="relative mr-4 pr-8 md:mr-0 md:pr-0">
          {/* خط الزمن العمودي (للشاشات الصغيرة فقط) */}
          <div className="absolute top-0 right-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-pink-200 to-purple-200 mr-4 md:hidden"></div>
          
          {years.map((year, yearIndex) => (
            <div key={year} className="mb-16">
              <div className="sticky top-20 mb-10 z-10">
                <h2 className="text-2xl font-bold text-primary-600 mb-4 flex items-center">
                  <span className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 text-white rounded-full inline-flex items-center justify-center ml-4 shadow-md">
                    {year}
                  </span>
                  <span className="relative z-10">إنجازات عام {year}</span>
                  <span className="absolute -z-10 bottom-0 left-0 right-0 h-2 bg-pink-200 opacity-30 transform -rotate-1 w-36"></span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievementsByYear[year].map((achievement, index) => (
                  <div 
                    key={achievement.id}
                    className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100 card-hover-effect"
                  >
                    {/* خط متصل بالإنجاز (للشاشات الصغيرة فقط) */}
                    <div className="absolute right-[calc(-2rem-1px)] top-8 w-8 h-0.5 bg-gradient-to-r from-pink-300 to-primary-300 md:hidden"></div>
                    {/* نقطة مشيرة إلى الإنجاز (للشاشات الصغيرة فقط) */}
                    <div className="absolute right-[-2rem] top-8 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 shadow-sm md:hidden"></div>
                    
                    <div className="absolute top-0 right-0 w-24 h-24 circle-decoration opacity-30"></div>
                    
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-600 mb-4">
                        {achievement.category}
                      </span>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{achievement.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
                      <p className="text-sm text-primary-500 font-medium">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 