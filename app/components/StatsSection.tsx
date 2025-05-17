import { useState } from "react";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section className="py-12 bg-white relative">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      {/* زخارف وتأثيرات بصرية */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-100 rounded-full opacity-40 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-100 rounded-full opacity-40 transform translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatCard 
            number="15" 
            label="سنة خبرة" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            } 
            color="pink"
          />
          <StatCard 
            number="32" 
            label="مشروع تعليمي" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
              </svg>
            } 
            color="purple"
          />
          <StatCard 
            number="24" 
            label="شهادة وتكريم" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A.75.75 0 0 0 1.5 5.555v5.391a.75.75 0 0 0 1.085.67L6 10.12v5.63a.75.75 0 0 0 .691.746c1.503.138 3.01.199 4.535.182a.75.75 0 0 0 .736-.736c.017-1.615-.032-3.216-.199-4.797a.75.75 0 0 1 .466-.756 49.118 49.118 0 0 1 5.333-1.591.75.75 0 0 0 .546-.841c-.307-1.858-.742-3.735-1.3-5.566a.75.75 0
                 0-.688-.537 50.378 50.378 0 0 0-5.007-.557.75.75 0 0 1-.71-.777c.012-.566.044-1.132.095-1.695a.75.75 0 0 0-.546-.77A49.432 49.432 0 0 0 7.596 1.937
                 .75.75 0 0 0 6.862 2.5c.047.471.078.943.094 1.416a.75.75 0 0 1-.555.732 48.726 48.726 0 0 0-1.151.261Z" />
              </svg>
            } 
            color="fuchsia"
          />
          <StatCard 
            number="480" 
            label="طالبة وطالب" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            } 
            color="rose"
          />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  color: 'pink' | 'purple' | 'fuchsia' | 'rose';
}

function StatCard({ number, label, icon, color }: StatCardProps) {
  // ألوان متنوعة للبطاقات
  const colorClasses = {
    pink: 'from-pink-300 to-pink-500',
    purple: 'from-purple-300 to-purple-500',
    fuchsia: 'from-fuchsia-300 to-fuchsia-500',
    rose: 'from-rose-300 to-rose-500',
  };

  const bgColor = `bg-gradient-to-br ${colorClasses[color]}`;

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg group card-hover-effect border-decorative">
      <div className={`${bgColor} p-6 h-full flex flex-col items-center justify-center text-white relative z-10`}>
        <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-20 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-20 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="rounded-full bg-white/30 p-3 mb-3 transition-transform group-hover:scale-110 duration-300">
          {icon}
        </div>
        <div className="text-3xl font-bold">{number}</div>
        <div className="text-sm opacity-90 font-medium">{label}</div>
      </div>
    </div>
  );
} 