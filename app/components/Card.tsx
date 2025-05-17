interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  date?: string;
  category?: string;
  link?: string;
  tags?: string[];
  defaultImageType?: "project" | "certificate" | "profile";
}

export default function Card({
  title,
  description,
  imageUrl,
  date,
  category,
  link,
  tags = [],
  defaultImageType = "project",
}: CardProps) {
  // التحقق من وجود الصورة
  const hasImage = Boolean(imageUrl);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full card-hover-effect border border-pink-100">
      <div className="h-48 overflow-hidden relative">
        {hasImage ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // في حالة فشل تحميل الصورة، استخدم بيانات للصورة الافتراضية
              (e.target as HTMLElement).setAttribute("data-default-img", defaultImageType);
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLElement).parentElement!.setAttribute("data-default-img", defaultImageType);
            }}
          />
        ) : (
          <div 
            data-default-img={defaultImageType}
            className="w-full h-full"
          ></div>
        )}
        
        {/* زخرفة بسيطة */}
        <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-pink-200 opacity-40"></div>
      </div>
      <div className="p-6 flex-grow relative">
        {/* زخرفة للبطاقة */}
        <div className="absolute top-0 right-0 w-20 h-20 circle-decoration"></div>
        
        <div className="flex items-center justify-between mb-2 relative z-10">
          {category && (
            <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-primary-600 bg-primary-100">
              {category}
            </span>
          )}
          {date && <span className="text-gray-500 text-sm">{date}</span>}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 relative z-10">{title}</h3>
        <p className="text-gray-600 mb-4 relative z-10">{description}</p>
        
        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2 relative z-10">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium inline-block py-1 px-3 rounded-full text-gray-600 bg-pink-50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {link && (
        <div className="px-6 pb-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
          >
            عرض التفاصيل
          </a>
        </div>
      )}
    </div>
  );
} 