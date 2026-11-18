export type Lang = 'en' | 'zh'

const translations: Record<string, Record<Lang, string>> = {
  'nav.about': {
    en: 'About',
    zh: '關於',
  },
  'nav.education': {
    en: 'Education',
    zh: '學歷',
  },
  'nav.research': {
    en: 'Research',
    zh: '研究',
  },
  'nav.publications': {
    en: 'Publications',
    zh: '發表論文',
  },
  'nav.talks': {
    en: 'Talks',
    zh: '學術演講',
  },
  'nav.experience': {
    en: 'Experience',
    zh: '經歷',
  },
  'nav.awards': {
    en: 'Awards',
    zh: '獎項',
  },
  'nav.contact': {
    en: 'Contact',
    zh: '聯繫',
  },
  'nav.guestbook': {
    en: 'Guestbook',
    zh: '留言板',
  },
  'nav.recruiter': {
    en: 'Recruiter Mode',
    zh: '招募模式',
  },
  'nav.story': {
    en: 'Story Mode',
    zh: '故事模式',
  },
  'hero.tag': {
    en: 'PhD Candidate · GeoAI Researcher',
    zh: '博士候選人 · 地理人工智慧研究員',
  },
  'hero.subtitle': {
    en: `Division of Geodetic Science | School of Earth Sciences
The Ohio State University`,
    zh: `大地測量科學系 | 地球科學學院
俄亥俄州立大學`,
  },
  'hero.cv': {
    en: 'Download CV (PDF)',
    zh: '下載履歷 (PDF)',
  },
  'hero.speech': {
    en: 'Psst... try hovering or clicking on the sea creatures swimming by.',
    zh: '噓... 試試把滑鼠移到游來游去的海洋生物上。',
  },
  'hero.speech.red': {
    en: 'They have things to say!',
    zh: '牠們有話要說！',
  },
  'hero.bio1': {
    en: 'I am a Ph.D. candidate in Geodetic Science at The Ohio State University. My research focuses on developing physics-informed and explainable AI methods for satellite-derived shallow-water bathymetry and coastal remote sensing, integrating machine learning, multispectral satellite imagery, airborne LiDAR, and physical models of underwater light propagation to improve the transferability, interpretability, and reliability of bathymetric mapping across diverse coastal environments.',
    zh: '我是俄亥俄州立大學大地測量科學的博士候選人。我的研究專注於開發物理資訊驅動且可解釋的人工智慧方法，用於衛星遙測淺水測深及海岸遙感，結合機器學習、多光譜衛星影像、機載光達與水下光傳播物理模型，以提升測深製圖在各類海岸環境的可轉移性、可解釋性與可靠性。',
  },
  'hero.bio2': {
    en: 'My broader interests include geospatial AI, uncertainty quantification for geophysical inverse problems, multi-temporal satellite data fusion, bathymetric change detection, open-source Earth observation tools, as well as landslide mapping, crime hotspot analysis, and GIS spatial analysis. I hold degrees from The Ohio State University and National Central University in Taiwan and previously studied geography and geographic education at National Taiwan Normal University.',
    zh: '我更廣泛的研究興趣包括地理空間人工智慧、地球物理反演問題的不確定性量化、多時相衛星資料融合、水深變化偵測、開源地球觀測工具，以及崩塌地圖製作、犯罪熱點分析和 GIS 空間分析。我分別取得俄亥俄州立大學和臺灣國立中央大學的學位，並曾就讀於國立臺灣師範大學地理與地理教育學系。',
  },
  'hero.bio3': {
    en: 'My work has been published in leading journals including ISPRS Journal of Photogrammetry and Remote Sensing and Remote Sensing, and presented at major international conferences (AGU, AAAS, EGU, IAG, EARSeL, IUGG). I am affiliated with the BuckAI Observatory at OSU and serve as Treasurer of International Friendships, a student organization supporting international students and scholars.',
    zh: '我的研究成果發表於頂級期刊，包括 ISPRS 攝影測量與遙感期刊及 Remote Sensing，並在多個國際會議上發表（AGU、AAAS、EGU、IAG、EARSeL、IUGG）。我隸屬於俄亥俄州立大學的 BuckAI Observatory，並擔任 International Friendships 的財務長，該組織致力於支持國際學生與學者。',
  },
  'section.news': {
    en: 'News & Highlights',
    zh: '最新消息',
  },
  'section.media': {
    en: 'Media & Outreach',
    zh: '媒體報導與外展',
  },
  'section.education': {
    en: 'Education',
    zh: '學歷',
  },
  'section.research': {
    en: 'Research',
    zh: '研究方向',
  },
  'section.studyAreas': {
    en: 'Study Areas',
    zh: '研究區域',
  },
  'section.publications': {
    en: 'Publications',
    zh: '發表論文',
  },
  'section.presentations': {
    en: 'Conference Presentations',
    zh: '學術會議演講',
  },
  'section.experience': {
    en: 'Experience',
    zh: '工作經歷',
  },
  'section.mentoring': {
    en: 'Mentoring',
    zh: '指導經歷',
  },
  'section.skills': {
    en: 'Technical Skills',
    zh: '專業技能',
  },
  'section.awards': {
    en: 'Awards & Honors',
    zh: '獎項與榮譽',
  },
  'section.financialSupport': {
    en: 'Financial Support',
    zh: '研究經費',
  },
  'section.affiliations': {
    en: 'Affiliations & Memberships',
    zh: '學術組織與會員',
  },
  'section.outreach': {
    en: 'Outreach & Service',
    zh: '社會服務與外展',
  },
  'section.contact': {
    en: 'Contact',
    zh: '聯繫方式',
  },
  'section.guestbook': {
    en: 'Guestbook',
    zh: '留言板',
  },
  'metric.publications': {
    en: 'Publications',
    zh: '篇論文',
  },
  'metric.presentations': {
    en: 'Conf. Presentations',
    zh: '場會議報告',
  },
  'metric.citations': {
    en: 'Citations',
    zh: '次引用',
  },
  'metric.studyRegions': {
    en: 'Study Regions',
    zh: '個研究區域',
  },
  'depth.shallow': {
    en: '0 m (shallow)',
    zh: '0 m（淺水）',
  },
  'depth.deep': {
    en: '-20 m (deep)',
    zh: '-20 m（深水）',
  },
  'ocean.hint': {
    en: 'Psst... try hovering or clicking on the sea creatures swimming by. They have things to say!',
    zh: '噓... 試試把滑鼠移到或點擊游來游去的海洋生物。牠們有話要說！',
  },
  'guestbook.subtitle': {
    en: 'Leave a message, say hi, or share your thoughts! (Sign in with GitHub)',
    zh: '留下訊息、打個招呼，或分享您的想法！（需登入 GitHub）',
  },
  'footer.switchRecruiter': {
    en: 'Switch to Recruiter Mode',
    zh: '切換至招募模式',
  },
  'footer.switchStory': {
    en: 'Switch to Story Mode',
    zh: '切換至故事模式',
  },
  'edu.advisor': {
    en: 'Advisor',
    zh: '指導教授',
  },
  'edu.thesis': {
    en: 'Thesis',
    zh: '論文',
  },
  'edu.dissertation': {
    en: 'Dissertation',
    zh: '博士論文',
  },
  published: {
    en: 'Published',
    zh: '已發表',
  },
  'under-review': {
    en: 'Under Review',
    zh: '審查中',
  },
  'in-prep': {
    en: 'In Preparation',
    zh: '準備中',
  },
  conference: {
    en: 'Conference',
    zh: '會議論文',
  },
  code: {
    en: 'Code',
    zh: '程式碼',
  },
}

export function t(key: string, lang: Lang): string {
  return translations[key]?.[lang] ?? key
}
