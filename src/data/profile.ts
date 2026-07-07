// 개인정보 보호를 위해 성명은 익명 핸들, 휴대폰/주소는 비공개로 처리했습니다.
export const profile = {
  name: "ETHAN", // 익명 핸들 (실명 대신)
  role: "XR · 메타버스 · 3D 시뮬레이션 전문가",
  subRoles: ["대학교수", "NCS 공인강사", "개발기업 대표"],
  email: "intertab14@gmail.com",
  phone: "비공개 · 이메일로 문의",
  location: "대한민국",
  photo: "assets/이름1.png",
  intro:
    "1989년부터 약 35년간 CAD·VR에서 출발해 XR·메타버스·디지털트윈까지 실감형 기술의 최전선을 걸어왔습니다. 원자력발전소 VR 플랜트, 자동차 Web3D, 스마트팩토리 시뮬레이터 등 대형 프로젝트를 기술 총괄로 이끌었고, 홍익대·성균관대·강남대 등에서 차세대 XR 인재를 양성해 왔습니다.",
  stats: [
    { value: "35+", label: "년 경력" },
    { value: "12+", label: "대형 프로젝트" },
    { value: "20+", label: "강의 과정" },
    { value: "7", label: "NCS 공인강사 자격" },
  ],
};

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "XR · 메타버스",
    items: [
      "Unity3D",
      "Unreal Engine",
      "메타버스 멀티플랫폼",
      "메타휴먼 (Android/iOS)",
      "실감형 3D/2D/XR 콘텐츠",
      "VRMCR",
      "VR-CMS",
    ],
  },
  {
    category: "3D · CAD · 그래픽",
    items: [
      "Blender",
      "3DSMAX",
      "Rhino3D",
      "SolidWorks",
      "Substance Designer/Painter",
      "3D 스캐닝 / 리버스엔지니어링",
      "3D 프린팅",
    ],
  },
  {
    category: "개발 · 프로그래밍",
    items: [
      "C / C++",
      "C#",
      "Python",
      "Next.js",
      "TypeScript",
      "NestJS",
      "React Three Fiber",
      "FastAPI",
    ],
  },
  {
    category: "데이터 · AI · 인프라",
    items: [
      "디지털트윈",
      "스마트팩토리",
      "PostgreSQL",
      "MQTT",
      "InfluxDB",
      "LSTM / IsolationForest",
      "Docker",
      "AWS",
    ],
  },
  {
    category: "피지컬 컴퓨팅",
    items: ["Arduino", "Raspberry Pi"],
  },
];

export type CareerItem = {
  org: string;
  period: string;
  role: string;
  desc: string;
  place: string;
};

export const career: CareerItem[] = [
  { org: "강남대학교", period: "2023.08 ~ 2024.07", role: "ICT공학부 / 교수", desc: "VR/AR 프로그래밍 강의", place: "용인" },
  { org: "㈜에이티씨네트웍스코리아", period: "2016.01 ~ 2021.08", role: "기술고문", desc: "XR(VR/AR/MR) 기술 컨설팅", place: "서울" },
  { org: "㈜티움솔루션즈", period: "2019.10 ~ 2020.03", role: "기술고문", desc: "VR Plant 기술개발 자문", place: "서울" },
  { org: "세한대학교", period: "2016.03 ~ 2019.08", role: "디자인학과 겸임교수", desc: "VR 프로덕션 시뮬레이션", place: "당진" },
  { org: "㈜인터탭", period: "2009.03 ~ 2016.10", role: "사장 / 기술이사", desc: "VR 시뮬레이터 개발 · CMS", place: "성남" },
  { org: "㈜에버소프트", period: "1997.10 ~ 2006.06", role: "대표이사", desc: "CAD/VR · 가상 모델하우스", place: "성남" },
  { org: "㈜큐닉스컴퓨터", period: "1996.09 ~ 1997.10", role: "CAD사업부 / 과장", desc: "AutoCAD ADS 기술개발", place: "서울" },
  { org: "엘지디스플레이㈜", period: "1989.01 ~ 1996.06", role: "CAD사업실 / 대리", desc: "CAD/VR 개발 및 기술교육", place: "서울" },
];

export type ProjectItem = {
  title: string;
  period: string;
  role: string;
  client: string;
};

export const projects: ProjectItem[] = [
  { title: "고층 권상형 모터 시뮬레이터", period: "2022.09 ~ 2023.01", role: "XR 기반 AR/MR 시뮬레이터 개발", client: "엘리베이터" },
  { title: "메타버스 멀티플랫폼", period: "2021.12 ~ 2022.06", role: "XR 기술 컨설팅 및 디바이스 연동", client: "엑스알터치" },
  { title: "AR/VR 기반 교육 훈련", period: "2019.09 ~ 2019.12", role: "Unity3D / Rhino 3D", client: "성균관대학교" },
  { title: "대부도 퍼스널모빌리티 테스트베드", period: "2019.08 ~ 2019.12", role: "AR/VR 응용 테스트베드 구축", client: "경기테크노파크" },
  { title: "SMART DUST CLEANER", period: "2019.05 ~ 2019.11", role: "스마트 코딩 디바이스", client: "과학기술인협동조합" },
  { title: "FPS-VR CMS 시스템 구축", period: "2015.02 ~ 2015.11", role: "기술총괄 · VR/RealTime Sim.", client: "현대중공업 선장사업부" },
  { title: "Web3D · WebVR 콘텐츠 제작", period: "2010.01 ~ 2012.08", role: "개발총괄 · Eon/Unity/Virtool", client: "KOTRA" },
  { title: "Realtime Web3D - 자동차", period: "2005.03 ~ 2008.05", role: "기술총괄 · VR/XML-ViewPoint", client: "삼성전자 · 쌍용 · 현대자동차" },
  { title: "VR Plant - 울진원자력", period: "2000.03 ~ 2004.05", role: "기술총괄 · EonStudio/Unity3D", client: "한국전력기술㈜" },
  { title: "가상 MCR - 고리원자력", period: "1999.04 ~ 1999.10", role: "기술기획 · OpenGL / 모션트래킹", client: "한국전력기술연구원" },
  { title: "건축 3D CAD 자동화시스템", period: "1998.01 ~ 1999.06", role: "기술기획 · 3D 설계자동화 총괄", client: "대한주택공사" },
  { title: "주택공사 가상 모델하우스", period: "1995.03 ~ 1996.05", role: "기술기획 · 실시간 시뮬레이터", client: "대한주택공사" },
];

export type LectureItem = { title: string; period: string; host: string; hours: string };

export const lectures: LectureItem[] = [
  { title: "XR 전문가 양성교육", period: "2021.06 ~ 07", host: "한국콘텐츠진흥원", hours: "80h" },
  { title: "전남 미래산업 연구인재 육성 (VR·AR+3D 모델링)", period: "2021.11", host: "순천대 산학협력단 · 노동부", hours: "48h" },
  { title: "혁신성장 VR/AR/MR 융합 콘텐츠 개발 실무", period: "2020.07 ~ 08", host: "과기정통부 · 인천테크노파크", hours: "100h" },
  { title: "리버스엔지니어링 기업전문가과정", period: "2020.07", host: "전북테크노파크", hours: "36h" },
  { title: "ICT 전문가 양성 (AR/VR 디바이스 개발)", period: "2019.10 ~ 12", host: "정보화진흥원", hours: "60h" },
  { title: "중장년 VR 전문가 양성과정", period: "2015.03 ~ 2016.12", host: "산업인력공단 · ㈜인터탭", hours: "150h" },
  { title: "프로덕션 디자인 - VR 프로토입", period: "2016.03 ~ 2018.08", host: "세한대학교", hours: "150h" },
  { title: "청년취업아카데미 - VR 특화기술", period: "2013.08 ~ 12", host: "남서울대학교", hours: "100h" },
  { title: "VR 제품기술응용", period: "2012.03 ~ 07", host: "홍익대학교 IDAS 대학원", hours: "50h" },
  { title: "제품디자인 실시간 비주얼라이제이션", period: "2004.03 ~ 2005.11", host: "홍익대학교", hours: "100h" },
  { title: "자바 전문개발자 과정", period: "2001.10 ~ 2002.08", host: "경실련 하이텔 정보교육원", hours: "200h" },
];

export type EduItem = { degree: string; school: string; major: string; period: string };

export const education: EduItem[] = [
  { degree: "MBA", school: "홍익대학교 국제디자인대학원", major: "디자인 뉴비전과정 수료", period: "2015" },
  { degree: "MBA", school: "한국디자인진흥원", major: "디자인 MBA과정 수료", period: "2003" },
  { degree: "MBA", school: "전국경제인연합회", major: "전경련 MBA과정 수료", period: "1998" },
  { degree: "학사", school: "전남대학교", major: "지질학 / 계산통계학", period: "1981 ~ 1988" },
];

export const certifications: string[] = [
  "NCS 공인강사 - 디지털트윈 (고용노동부, 2026)",
  "NCS 공인강사 - 스마트공장 설계 (고용노동부, 2024)",
  "인공지능 공인강사 [K-DT] (인텔코리아, 2024)",
  "NCS 공인강사 - 인공지능 (고용노동부, 2024)",
  "NCS 공인강사 - 문화 콘텐츠제작 (고용노동부, 2023)",
  "NCS 공인강사 - 실감형 콘텐츠제작 (고용노동부, 2022)",
  "NCS 공인강사 - 정보기술개발 (고용노동부, 2022)",
  "정교사 교원자격증 과학(과학/정보) 2급 (교육부, 1988)",
];
