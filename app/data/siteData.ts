export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
  link?: string;
  tags: string[];
}

export interface Certificate {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  issuer: string;
  category: string;
  link?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  email: string;
  phone: string;
  location: string;
  education: {
    degree: string;
    school: string;
    year: string;
  }[];
  experience: {
    position: string;
    company: string;
    duration: string;
    description: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  socialMedia: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

// استخدام المسارات الافتراضية للصور
const DEFAULT_PROJECT_IMAGE = "/images/projects/default.jpg";
const DEFAULT_CERTIFICATE_IMAGE = "/images/certificates/default.jpg";
const DEFAULT_PROFILE_IMAGE = "/images/profile/default.jpg";

export const projects: Project[] = [
  {
    id: 1,
    title: "تصميم منهج تفاعلي لمادة العلوم",
    description: "تطوير منهج رقمي تفاعلي لمادة العلوم للمرحلة المتوسطة يتضمن أنشطة عملية ودروس تفاعلية.",
    imageUrl: DEFAULT_PROJECT_IMAGE,
    date: "مارس 2023",
    category: "تطوير المناهج",
    link: "#",
    tags: ["منهج رقمي", "علوم", "تعليم تفاعلي"]
  },
  {
    id: 2,
    title: "برنامج تنمية مهارات الإبداع لدى الطالبات",
    description: "تصميم وتنفيذ برنامج لتنمية مهارات الإبداع والابتكار لدى طالبات المرحلة المتوسطة.",
    imageUrl: DEFAULT_PROJECT_IMAGE,
    date: "يناير 2023",
    category: "تطوير مهارات",
    link: "#",
    tags: ["إبداع", "ابتكار", "تفكير ناقد"]
  },
  {
    id: 3,
    title: "معرض العلوم الإبداعي السنوي",
    description: "تنظيم وإدارة معرض العلوم السنوي للمدرسة، وإشراف على مشاريع الطالبات العلمية.",
    imageUrl: DEFAULT_PROJECT_IMAGE,
    date: "ديسمبر 2022",
    category: "أنشطة طلابية",
    link: "#",
    tags: ["معرض علمي", "مشاريع طلابية", "إبداع"]
  },
  {
    id: 4,
    title: "مجموعات التعلم التعاوني",
    description: "تأسيس مجموعات للتعلم التعاوني في مادة العلوم لتعزيز المهارات الاجتماعية والتعاونية لدى الطالبات.",
    imageUrl: DEFAULT_PROJECT_IMAGE,
    date: "سبتمبر 2022",
    category: "أساليب تدريس",
    link: "#",
    tags: ["تعلم تعاوني", "مهارات اجتماعية", "تعليم نشط"]
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "شهادة في استراتيجيات التعليم المتمايز",
    description: "شهادة معتمدة في تطبيق استراتيجيات التعليم المتمايز وتلبية احتياجات المتعلمات المختلفة.",
    imageUrl: DEFAULT_CERTIFICATE_IMAGE,
    date: "يونيو 2023",
    issuer: "وزارة التعليم",
    category: "طرق تدريس",
    link: "#"
  },
  {
    id: 2,
    title: "دبلوم في تصميم المحتوى الرقمي التعليمي",
    description: "دورة شاملة في تصميم وإنتاج المحتوى التعليمي الرقمي التفاعلي باستخدام أحدث التقنيات.",
    imageUrl: DEFAULT_CERTIFICATE_IMAGE,
    date: "فبراير 2023",
    issuer: "أكاديمية التعلم الرقمي",
    category: "تقنية تعليمية",
    link: "#"
  },
  {
    id: 3,
    title: "شهادة في مهارات الإشراف التربوي",
    description: "برنامج تدريبي متقدم في مهارات الإشراف التربوي وتطوير أداء المعلمات.",
    imageUrl: DEFAULT_CERTIFICATE_IMAGE,
    date: "نوفمبر 2022",
    issuer: "معهد التطوير التربوي",
    category: "إشراف وقيادة",
    link: "#"
  },
  {
    id: 4,
    title: "ماجستير في المناهج وطرق التدريس",
    description: "ماجستير متخصص في المناهج وطرق تدريس العلوم مع التركيز على التعلم النشط.",
    imageUrl: DEFAULT_CERTIFICATE_IMAGE,
    date: "مايو 2018",
    issuer: "جامعة الملك سعود",
    category: "مؤهل أكاديمي",
    link: "#"
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "جائزة المعلمة المتميزة",
    description: "حصلت على جائزة المعلمة المتميزة على مستوى إدارة التعليم للعام الدراسي 2022-2023.",
    date: "مايو 2023",
    category: "جوائز"
  },
  {
    id: 2,
    title: "تطوير مختبر العلوم التفاعلي",
    description: "قيادة مشروع تطوير مختبر العلوم بالمدرسة وتحويله إلى بيئة تعليمية تفاعلية حديثة.",
    date: "يناير 2023",
    category: "تطوير تعليمي"
  },
  {
    id: 3,
    title: "فوز طالباتي بالمركز الأول في مسابقة الابتكار العلمي",
    description: "إشرافي على فريق من الطالبات فاز بالمركز الأول في مسابقة الابتكار العلمي على مستوى المنطقة.",
    date: "نوفمبر 2022",
    category: "إنجازات طلابية"
  },
  {
    id: 4,
    title: "نشر مقالات تربوية",
    description: "نشر سلسلة من المقالات التربوية في مجلة متخصصة حول توظيف التقنية في تعليم العلوم.",
    date: "سبتمبر 2022",
    category: "نشر علمي"
  },
];

export const profileData: ProfileData = {
  name: "نورة سعد العامري",
  title: "معلمة مادة العلوم - المرحلة المتوسطة",
  bio: "معلمة متميزة ذات خبرة 15 عامًا في تدريس مادة العلوم للمرحلة المتوسطة. شغوفة بتطوير أساليب التدريس وتوظيف التقنية في التعليم. حاصلة على العديد من الجوائز والشهادات في مجال التعليم والتطوير المهني.",
  avatar: DEFAULT_PROFILE_IMAGE,
  email: "noura@example.com",
  phone: "966512345678",
  location: "الرياض، المملكة العربية السعودية",
  education: [
    {
      degree: "ماجستير في مناهج وطرق تدريس العلوم",
      school: "جامعة الملك سعود",
      year: "2018"
    },
    {
      degree: "بكالوريوس في العلوم - كيمياء",
      school: "جامعة الأميرة نورة",
      year: "2008"
    }
  ],
  experience: [
    {
      position: "معلمة مادة العلوم - المرحلة المتوسطة",
      company: "مدرسة الأمل المتوسطة للبنات",
      duration: "2018 - الآن",
      description: "تدريس مادة العلوم للصفوف الأول والثاني والثالث المتوسط. إعداد وتطوير المواد التعليمية وتنفيذ الأنشطة العملية والتجارب المخبرية."
    },
    {
      position: "معلمة مادة العلوم - المرحلة المتوسطة",
      company: "مدرسة الزهراء المتوسطة للبنات",
      duration: "2012 - 2018",
      description: "تدريس مادة العلوم، وإدارة النشاط العلمي، والإشراف على مختبر العلوم."
    },
    {
      position: "معلمة مادة العلوم - المرحلة الابتدائية",
      company: "مدرسة المستقبل الابتدائية للبنات",
      duration: "2008 - 2012",
      description: "تدريس مادة العلوم للصفوف العليا من المرحلة الابتدائية."
    }
  ],
  skills: [
    {
      category: "مهارات تدريسية",
      items: ["التعلم النشط", "التعليم المتمايز", "التقويم البديل", "التعلم بالمشاريع", "التعلم التعاوني"]
    },
    {
      category: "مهارات تقنية",
      items: ["تصميم المحتوى الرقمي", "منصات التعلم الإلكتروني", "تطبيقات تعليمية", "العروض التفاعلية", "إدارة الفصول الافتراضية"]
    },
    {
      category: "مهارات شخصية",
      items: ["القيادة", "الإبداع", "التواصل الفعال", "العمل الجماعي", "حل المشكلات"]
    }
  ],
  socialMedia: [
    {
      platform: "تويتر",
      url: "https://twitter.com/noura",
      icon: "twitter"
    },
    {
      platform: "لينكد إن",
      url: "https://linkedin.com/in/noura",
      icon: "linkedin"
    },
    {
      platform: "انستغرام",
      url: "https://instagram.com/noura",
      icon: "instagram"
    }
  ]
}; 