/**
 * بيانات موقع معرض أعمال سامي العمر
 * مصمم جرافيك ومصمم هويات بصرية
 * يمكن تعديل كافة النصوص والمشاريع والصور من هذا الملف بسهولة
 */

export interface Project {
  id: string;
  title: string;
  category: 'logos' | 'identities' | 'social';
  categoryLabel: string;
  image: string;
  shortDesc: string;
  client: string;
  year: string;
  duration: string;
  tools: string[];
  challenge: string;
  solution: string;
  deliverables: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const DESIGNER_INFO = {
  name: 'سامي العمر',
  role: 'مصمم جرافيك ومصمم هويات بصرية',
  experienceYears: '5+',
  completedProjects: '75+',
  happyClients: '50+',
  satisfactionRate: '100%',
  location: 'الرياض، المملكة العربية السعودية',
  email: 'sami.alomar.design@gmail.com',
  whatsapp: '+966501234567',
  whatsappUrl: 'https://wa.me/966501234567?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B3%D8%A7%D9%85%D9%8A%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85',
  instagram: 'sami.design.sa',
  instagramUrl: 'https://instagram.com',
  linkedin: 'sami-alomar-design',
  linkedinUrl: 'https://linkedin.com',
  behanceUrl: 'https://behance.net',
  bioShort:
    'مصمم بخبرة أكثر من 5 سنوات، أحوّل أفكار العملاء إلى هويات بصرية وشعارات وتصاميم تعكس شخصية علاماتهم التجارية وتجذب جمهورهم.',
  bioFull:
    'أنا سامي العمر، مصمم جرافيك متخصص في بناء الهويات البصرية المتكاملة وتصميم الشعارات الاحترافية والتصاميم الترويجية الرقمية. على مدار أكثر من 5 سنوات، ساعدت أكثر من 50 شركة ناشئة وعلامة تجارية في المملكة والخليج على تكوين حضور بصري استثنائي يجمع بين جماليات الخط العربي ورصانة التصميم المعاصر.',
  portraitImage: '/src/assets/images/designer_portrait_1792183326713.jpg',
};

export const SKILLS_DATA: Skill[] = [
  {
    name: 'تصميم الشعارات',
    level: 96,
    category: 'إبداعي',
    description: 'ابتكار شعارات رمزية وخطية فريدة ذات قابلية عالية للتذكر وتطبيقات متعددة.',
  },
  {
    name: 'الهوية البصرية',
    level: 98,
    category: 'استراتيجي',
    description: 'تطوير أدلة إرشادية شاملة تشمل أنظمة الألوان، الخطوط، المطبوعات، والتطبيقات.',
  },
  {
    name: 'تصميم السوشيال ميديا',
    level: 92,
    category: 'رقمي',
    description: 'إنشاء حملات إعلانية وتصاميم لافتة تعزز التفاعل وتزيد من معدل التحويلات.',
  },
  {
    name: 'Adobe Photoshop',
    level: 94,
    category: 'برمجيات',
    description: 'معالجة الصور الاحترافية، تصميم الدمج الإبداعي، وإعداد الموك أب الواقعي.',
  },
  {
    name: 'Adobe Illustrator',
    level: 96,
    category: 'برمجيات',
    description: 'الرسم المتجهي (Vector)، هندسة الشعارات، وبناء المخططات والأيقونات المعقدة.',
  },
  {
    name: 'Figma',
    level: 90,
    category: 'برمجيات',
    description: 'تنظيم أصول الهويات البصرية ومشاركة نماذج العرض التفاعلية وتصاميم واجهات الحملات.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'turath-al-dhahab',
    title: 'تراث الذهب — هوية وشعار فاخر',
    category: 'logos',
    categoryLabel: 'شعارات',
    image: '/src/assets/images/luxury_arabic_logo_1792183327612.jpg',
    shortDesc: 'شعار عربي كوفي معاصر مطبوع بالرقائق الذهبية والزمردية لعلامة عطور ومقتنيات فاخرة.',
    client: 'شركة تراث الذهب',
    year: '2025',
    duration: '3 أسابيع',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    challenge:
      'ابتكار رمز يعبر عن الفخامة الشرقية والعراقة التاريخية دون الوقوع في الأنماط التقليدية المكررة.',
    solution:
      'تم بناء خط كوفي حر مخصص يعانق الحروف برقة، مع استخدام ثنائية الذهب المطفي والأخضر الزمردي لمنح العلامة فخامة ملكية تلفت الأنظار.',
    deliverables: ['الشعار الأساسي والثانوي', 'دليل الألوان والخطوط', 'نماذج الطباعة المذهبة', 'ملفات الفيكتور الكاملة'],
  },
  {
    id: 'folk-and-fire',
    title: 'فولك آند فاير — هوية مقهى ومحمصة',
    category: 'identities',
    categoryLabel: 'هويات بصرية',
    image: '/src/assets/images/coffee_identity_1792183328478.jpg',
    shortDesc: 'هوية بصرية دافئة وتصميم عبوات قهوة مختصة ومطبوعات مكتبية وقوائم طعام عصرية.',
    client: 'محمصة Folk & Fire',
    year: '2024',
    duration: '4 أسابيع',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    challenge:
      'دمج فكرة النار المحمصة وأصالة المجتمع في هوية تبتعد عن التصاميم الصناعية الباردة.',
    solution:
      'اعتماد خطوط عريضة مريحة مع لوحة ألوان دافئة مستوحاة من رمال الصحراء وحبوب البن، وصياغة تصميم أكياس القهوة بأسلوب عضوي فاخر.',
    deliverables: ['شعار المحمصة والمونوغرام', 'أكياس القهوة وأكواب التقديم', 'بطاقات العمل وقوائم المقهى', 'دليل الهوية الكامل'],
  },
  {
    id: 'velo-audio',
    title: 'سماعات ڤيلو — حملة سوشيال ميديا',
    category: 'social',
    categoryLabel: 'سوشيال ميديا',
    image: '/src/assets/images/social_campaign_1792183328780.jpg',
    shortDesc: 'سلسلة منشورات وقصص ترويجية مبتكرة لإطلاق جيل جديد من السماعات الصوتية اللاسلكية.',
    client: 'شركة Velo Audio',
    year: '2025',
    duration: 'أسبوعان',
    tools: ['Adobe Photoshop', 'Figma'],
    challenge:
      'إبراز نقاء الصوت والتقنية الحديثة في منصات السوشيال ميديا لجذب الفئة العمرية الشابة ومحبي الموسيقى.',
    solution:
      'تصميم شبكة متناغمة من البوسترات الرقمية باللون الأزرق الداكن والذهبي الفاتح مع إبراز التفاصيل الميكانيكية للسماعة والتركيز على العناوين القوية.',
    deliverables: ['12 تصميماً لمنشورات إنستغرام', '6 تصاميم متحركة للقصص (Stories)', 'قوالب مفتوحة المصدر قابلة للتعديل'],
  },
  {
    id: 'architectura-studio',
    title: 'أركيتكتورا ستوديو — شعار هندسي',
    category: 'logos',
    categoryLabel: 'شعارات',
    image: '/src/assets/images/tech_startup_logo_1792183328803.jpg',
    shortDesc: 'ابتكار شعار هندسي دقيق مبني على شبكة بنائية قياسية لاستوديو عمارة وتصميم مساحات.',
    client: 'استوديو Architectura',
    year: '2024',
    duration: 'أسبوعان',
    tools: ['Adobe Illustrator', 'Figma'],
    challenge:
      'عكس الدقة الرياضية والجمال الإنشائي في رمز بصري بسيط وقوي يتناسب مع المخططات الهندسية والمطبوعات الكبيرة.',
    solution:
      'تطوير رمز مستوحى من الحرف الأول مع هيكل مثلثي هندسي يعبر عن التوازن والثبات، مدعوماً بلون أخضر غابي رصين ودرجة رملية هادئة.',
    deliverables: ['مخطط الشبكة البنائية للشعار', 'نسخ الشعار الأحادية والملونة', 'أوراق المراسلات والخرائط الرسمية'],
  },
  {
    id: 'aether-botanicals',
    title: 'إيثر بوتانيكالز — تغليف وهوية عناية',
    category: 'identities',
    categoryLabel: 'هويات بصرية',
    image: '/src/assets/images/skincare_packaging_1792183330103.jpg',
    shortDesc: 'تصميم علامة تجارية وتغليف متكامل لمستحضرات العناية الطبيعية والزيوت العضوية المستدامة.',
    client: 'Aether Botanicals',
    year: '2025',
    duration: '4 أسابيع',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    challenge:
      'خلق شعور بالنقاء والهدوء العضوي الفاخر يتفوق على مستحضرات التجميل التقليدية في أرفف المتاجر.',
    solution:
      'اختيار ورق تكتشف ملمسه اليد مع زجاج عنبري داكن وطباعة أنيقة بأحرف دقيقة متوازنة توحي بالموثوقية الطبية واللمسة الطبيعية.',
    deliverables: ['شعار وهوية العلامة التجارية', 'ملصقات الزجاجات والعلب الكرتونية', 'مواد الترويج التوضيحية', 'ملفات الإنتاج والطباعة'],
  },
  {
    id: 'al-majlis-restaurant',
    title: 'مطعم المجلس — محتوى رقمي متكامل',
    category: 'social',
    categoryLabel: 'سوشيال ميديا',
    image: '/src/assets/images/food_social_media_1792183330456.jpg',
    shortDesc: 'إدارة وتصميم شبكة إعلانات سوشيال ميديا وقوائم طعام رقمية لمطعم مأكولات شرقية راقٍ.',
    client: 'مطعم المجلس الفاخر',
    year: '2025',
    duration: '3 أسابيع',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    challenge:
      'إبراز أصالة الأطباق الشعبية بنكهة عصرية تفتح الشهية وتحفّز الحجوزات اليومية.',
    solution:
      'تأطير صور الأطباق باحترافية مع خطوط عربية أنيقة وزخارف شرقية خافتة تعكس كرم الضيافة وأجواء المطعم المترفة.',
    deliverables: ['18 قالباً ترويجياً للمواسم والعروض', 'قائمة طعام رقمية تفاعلية', 'إعلانات مخصصة لحملات الانستغرام والتيك توك'],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'م. فهد السبيعي',
    role: 'المؤسس والرئيس التنفيذي',
    company: 'محمصة ومقهى فولك آند فاير',
    quote:
      'تجربتنا مع سامي في تصميم الهوية البصرية كانت مبهرة بكل المقاييس. فهم روح المشروع ورؤيتنا منذ اللقاء الأول واستطاع ترجمة أفكارنا إلى هوية بصرية وتغليف نال إشادة عملائنا وزاد من مبيعاتنا بشكل ملموس.',
    rating: 5,
  },
  {
    id: '2',
    name: 'أ. سارة المنصور',
    role: 'مديرة التسويق وتطوير الأعمال',
    company: 'إيثر بوتانيكالز للعناية الطبيعية',
    quote:
      'شغف سامي واهتمامه الدقيق بأصغر التفاصيل نادر الوجود. تصاميم الهوية وتغليف عبوات المنتجات ساعدتنا في دخول أكبر المتاجر فور إطلاقنا. الالتزام بالوقت والاحترافية كانا ميزة استثنائية.',
    rating: 5,
  },
  {
    id: '3',
    name: 'د. خالد العتيبي',
    role: 'الشريك الإداري',
    company: 'استوديو أركيتكتورا للتصميم الهندسي',
    quote:
      'أفضل مصمم تعاملت معه في صياغة الشعار الهندسي وتطبيقات العلامة. يمتلك حسّاً جمالياً رفيعاً وقدرة فائقة على تقديم حلول إبداعية مبتكرة تتناغم مع طبيعة عملنا المعماري.',
    rating: 5,
  },
];
