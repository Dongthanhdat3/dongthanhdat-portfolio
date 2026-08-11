export type Project = {
  slug: string;
  brand: string;
  title: string;
  category: string;
  sample: string;
  methods: string;
  tools: string[];
  description: string;
  keyThemes: string[];
  logoTreatment: "mobifone" | "tiktok" | "mbbank";
  cover: string;
  pdf: string;
};

export type Certificate = {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  courseCount: number;
  credentialId: string;
  verificationUrl: string;
  summary: string;
  thumbnail: string;
  pdf: string;
};

export const portfolio = {
  person: {
    name: "Đồng Thành Đạt",
    role: "Market Research Analyst",
    domains: "Consumer Insights · Data Analytics · Business Analysis",
    eyebrow: "Nghiên cứu thị trường · Phân tích dữ liệu",
    headline:
      "Biến câu hỏi kinh doanh thành một quy trình nghiên cứu có cấu trúc, dữ liệu có kiểm chứng và insight có thể hỗ trợ quyết định.",
    about:
      "Tôi định hướng phát triển trong lĩnh vực nghiên cứu thị trường, Consumer Insights và Business Analysis. Điểm mạnh của tôi là khả năng xây dựng một quy trình nghiên cứu hoàn chỉnh: bắt đầu từ vấn đề kinh doanh, chuyển hóa thành mô hình và thang đo, thiết kế công cụ thu thập, xử lý và phân tích dữ liệu, sau đó diễn giải kết quả theo ngôn ngữ quản trị thay vì chỉ dừng ở các chỉ số thống kê. Với nền tảng Marketing, tôi quan tâm đến việc kết nối dữ liệu với hành vi khách hàng, bối cảnh thị trường và quyết định kinh doanh, để mỗi phân tích đều trả lời được câu hỏi: dữ liệu này có ý nghĩa gì và nên làm gì tiếp theo?",
    avatar: "/images/avatar.jpg",
    cv: null as string | null,
  },
  navigation: [
    { label: "Trang chủ", href: "/#trang-chu" },
    { label: "Về tôi", href: "/#ve-toi" },
    { label: "Năng lực", href: "/#nang-luc" },
    { label: "Dự án", href: "/#du-an" },
    { label: "Học vấn", href: "/#hoc-van" },
    { label: "Chứng chỉ", href: "/#chung-chi" },
    { label: "Liên hệ", href: "/#lien-he" },
  ],
  capabilities: {
    research: [
      "Thiết kế nghiên cứu định tính và định lượng.",
      "Xây dựng mô hình, giả thuyết và thang đo.",
      "Thiết kế bảng hỏi và tiêu chí sàng lọc mẫu.",
      "Làm sạch, kiểm tra và chuẩn hóa dữ liệu.",
      "Diễn giải insight và đề xuất giải pháp.",
    ],
    analysis: [
      "Thống kê mô tả.",
      "Cronbach’s Alpha, EFA và CFA.",
      "Regression, SEM và PLS-SEM.",
      "Mediation, Moderation và Nonlinear Modeling.",
      "T-test, ANOVA và Bootstrap.",
      "Machine Learning, SHAP và Segmentation.",
    ],
  },
  tools: [
    { name: "Excel", mark: "X" },
    { name: "SQL", mark: "SQL" },
    { name: "SPSS", mark: "S" },
    { name: "Google Analytics", mark: "GA" },
    { name: "Python", mark: "Py" },
    { name: "Google Apps Script", mark: "GS" },
    { name: "Tableau", mark: "T" },
  ],
  education: {
    institution: "Trường Đại học Nguyễn Tất Thành",
    degree: "Cử nhân Marketing",
    period: "2022–2026",
    graduation: "Tốt nghiệp tháng 08/2026",
  },
  contact: {
    email: "dongthanhdat2003@gmail.com",
    linkedinLabel: "linkedin.com/in/đồng-thành-đạt",
    linkedin:
      "https://www.linkedin.com/in/%C4%91%E1%BB%93ng-th%C3%A0nh-%C4%91%E1%BA%A1t",
    phone: "0879693902",
  },
} as const;

export const projects: Project[] = [
  {
    slug: "mobifone",
    brand: "MobiFone",
    title:
      "Nghiên cứu các yếu tố ảnh hưởng đến lòng trung thành khách hàng thông qua sự hài lòng đối với Công ty Viễn thông MobiFone tại TP.HCM",
    category: "Dự án nghiên cứu thị trường",
    sample: "450 khách hàng MobiFone tại TP.HCM",
    methods:
      "Cronbach’s Alpha · EFA · Hồi quy tuyến tính · T-test · ANOVA · Đối chiếu Google Maps",
    tools: ["SPSS", "Excel"],
    description:
      "Nghiên cứu kiểm tra cách chất lượng dịch vụ, giá trị cảm nhận, chăm sóc khách hàng và trải nghiệm số liên hệ với sự hài lòng, rồi chuyển thành lòng trung thành. Phản hồi từ 50 cửa hàng trên Google Maps được dùng như một lớp đối chiếu thực địa.",
    keyThemes: [
      "Chất lượng dịch vụ cảm nhận",
      "Chăm sóc khách hàng",
      "Sự hài lòng và lòng trung thành",
    ],
    logoTreatment: "mobifone",
    cover: "/projects/mobifone-cover.png",
    pdf: "/projects/mobifone.pdf",
  },
  {
    slug: "tiktok-shop",
    brand: "TikTok Shop",
    title:
      "Nghiên cứu các yếu tố ảnh hưởng đến niềm tin phục hồi và ý định tiếp tục mua sau sự cố sản phẩm không đúng mô tả trên TikTok Shop",
    category: "Dự án Consumer Insights",
    sample: "1.087 người mua đã hoàn tất trả hàng hoặc hoàn tiền",
    methods:
      "Cronbach’s Alpha · EFA · PLS-SEM · Machine Learning · SHAP · Segmentation",
    tools: ["Python", "Excel"],
    description:
      "Nghiên cứu xem xét cách mức độ sai lệch sản phẩm, ma sát trả hàng - hoàn tiền, tính công bằng và minh bạch xử lý định hình niềm tin phục hồi, từ đó ảnh hưởng đến ý định tiếp tục mua.",
    keyThemes: [
      "Sản phẩm không đúng mô tả",
      "Phục hồi dịch vụ",
      "Niềm tin và ý định mua lại",
    ],
    logoTreatment: "tiktok",
    cover: "/projects/tiktok-shop-cover.png",
    pdf: "/projects/tiktok-shop.pdf",
  },
  {
    slug: "mb-bank",
    brand: "MB Bank",
    title:
      "Nghiên cứu các yếu tố ảnh hưởng đến niềm tin vào xác thực sinh trắc học và ý định tiếp tục sử dụng App MBBank của khách hàng cá nhân tại TP. Hồ Chí Minh",
    category: "Dự án phân tích trải nghiệm số",
    sample: "1.187 hồ sơ theo cấu trúc bảng hỏi",
    methods:
      "Cronbach’s Alpha · EFA · PLS-SEM · Moderation · PLSpredict · Kiểm tra độ bền",
    tools: ["Python", "Excel"],
    description:
      "Nghiên cứu phân tích cách hiệu quả bảo mật cảm nhận, độ tin cậy, tính minh bạch, quyền riêng tư và nỗ lực xác thực liên hệ với niềm tin và ý định tiếp tục dùng App MBBank.",
    keyThemes: [
      "Xác thực sinh trắc học",
      "Niềm tin và quyền riêng tư",
      "Nỗ lực thao tác và self-efficacy",
    ],
    logoTreatment: "mbbank",
    cover: "/projects/mb-bank-cover.png",
    pdf: "/projects/mb-bank.pdf",
  },
];

export const certificates: Certificate[] = [
  {
    slug: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
    date: "10/08/2026",
    courseCount: 9,
    credentialId: "4MXR5IP6JIWD",
    verificationUrl:
      "https://coursera.org/verify/professional-cert/4MXR5IP6JIWD",
    summary:
      "Chương trình thực hành về quy trình chuẩn bị, xử lý, phân tích và trực quan hóa dữ liệu với spreadsheets, SQL, Tableau và Python.",
    thumbnail: "/certificates/google-data-analytics.png",
    pdf: "/certificates/google-data-analytics.pdf",
  },
  {
    slug: "google-advanced-data-analytics",
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
    date: "22/05/2026",
    courseCount: 7,
    credentialId: "BH7ZVQYKFKAB",
    verificationUrl:
      "https://coursera.org/verify/professional-cert/BH7ZVQYKFKAB",
    summary:
      "Chương trình củng cố nền tảng thống kê, regression, machine learning, predictive modeling và quy trình data science.",
    thumbnail: "/certificates/google-advanced-data-analytics.png",
    pdf: "/certificates/google-advanced-data-analytics.pdf",
  },
];

export const findProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const findCertificate = (slug: string) =>
  certificates.find((certificate) => certificate.slug === slug);
