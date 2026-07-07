// 개인정보 보호: 성명은 익명 브랜드 핸들, 휴대폰/주소는 비공개.
export const profile = {
  name: "Ethan Aurelio",
  handle: "Ethan",
  title: "AI · 디지털 트윈 개발자\n& 인공지능 융합 교육 연구자",
  role: "AI · 디지털 트윈 개발자 & 인공지능 융합 교육 연구자",
  email: "intertab14@gmail.com",
  phone: "비공개 · 이메일로 문의",
  location: "대한민국",
  logo: "assets/EthanAurelioLogo.png",
  intro:
    "제조·물류 현장의 디지털 트윈과 실감형 시뮬레이션을 개발하고, AI를 융합한 교육을 연구·설계하는 개발자이자 교육 연구자입니다. 현장에서 검증된 기술을 커리큘럼으로 옮겨, 다양한 수준의 학습자가 AI·디지털 트윈 역량을 갖추도록 돕습니다.",
  stats: [
    { value: "1,000h", label: "KDT 커리큘럼 기획·강의" },
    { value: "Unity 6", label: "· Unreal 5.7.1" },
    { value: "2", label: "공인 강사 자격 (Intel·Unity)" },
    { value: "AI", label: "디지털 트윈 융합" },
  ],
};

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "AI · 데이터",
    items: ["Python", "PyTorch", "Streamlit", "FastAPI", "LSTM", "IsolationForest", "LLM 응용"],
  },
  {
    category: "디지털 트윈 · 시뮬레이션",
    items: ["Unity 6", "Unreal Engine 5.7.1", "AGV/AMR 제어", "MQTT", "InfluxDB", "실시간 데이터 연동"],
  },
  {
    category: "융합 교육 설계",
    items: ["K-Digital Training", "NCS 커리큘럼", "AI 튜터 멘토링", "실습형 프로젝트 설계"],
  },
];

export type Project = {
  tag: string;
  title: string;
  desc: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    tag: "Digital Twin",
    title: "제조 / 물류 디지털 트윈",
    desc: "AGV·AMR 등 자율주행 물류 로봇의 이동·작업을 가상 공간에서 제어·검증하는 디지털 트윈. 실제 설비와 실시간 동기화하여 물류 흐름을 최적화합니다.",
    stack: ["AGV / AMR 제어", "실시간 동기화", "물류 최적화"],
  },
  {
    tag: "Simulation",
    title: "Unity 6 & Unreal Engine 5.7.1 시뮬레이션",
    desc: "최신 엔진(Unity 6, Unreal Engine 5.7.1) 기반의 고정밀 실감형 시뮬레이션. 물리·렌더링·인터랙션을 결합해 현장을 사실적으로 재현합니다.",
    stack: ["Unity 6", "Unreal Engine 5.7.1", "실감형 XR"],
  },
  {
    tag: "AI Platform",
    title: "AI 기반 심리 상담 플랫폼",
    desc: "LLM을 활용해 사용자의 심리 상태를 이해하고 대화형 상담을 제공하는 플랫폼. Streamlit으로 빠르게 프로토타이핑하여 서비스화했습니다.",
    stack: ["Streamlit", "LLM", "대화형 AI"],
  },
];

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  desc: string;
};

// 교육(Experience) 타임라인
export const experience: ExperienceItem[] = [
  {
    period: "KDT",
    title: "K-Digital Training 1,000시간 커리큘럼 기획 · 메인 강사",
    org: "K-Digital Training",
    desc: "AI·디지털 트윈 융합 과정 1,000시간 커리큘럼을 직접 기획하고 메인 강사로 전 과정을 이끌었습니다. 이론과 현장 프로젝트를 연결한 실습 중심 설계.",
  },
  {
    period: "Certified",
    title: "인텔 · 유니티 공인 강사 자격",
    org: "Intel · Unity",
    desc: "인텔(인공지능)과 유니티(실감형 콘텐츠) 공인 강사 자격을 보유하여, 공신력 있는 커리큘럼으로 전문 교육을 진행합니다.",
  },
  {
    period: "Mentoring",
    title: "AI 튜터 멘토링",
    org: "다양한 수준의 수강생 대상",
    desc: "입문자부터 실무자까지 서로 다른 수준의 학습자를 위해 눈높이 맞춤 AI 튜터 멘토링을 제공하여, 각자의 목표 역량 달성을 지원했습니다.",
  },
];
