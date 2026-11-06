const recommendationData = [
  {
    image: './assets/recommendations/recommendation-01.jpg',
    title: { ar: 'تحليل إحصاءات المرضى', en: 'Patient Statistics Analysis' },
    org: { ar: 'مستشفى جازان العام · الخدمات الاجتماعية', en: 'Jazan General Hospital · Social Services' },
    description: { ar: 'توصية عن تحليل البيانات الصحية وإعداد التقارير باستخدام Power BI وExcel.', en: 'A recommendation highlighting healthcare data analysis and reporting with Power BI and Excel.' }
  },
  {
    image: './assets/recommendations/recommendation-02.jpg',
    title: { ar: 'السجلات الطبية والتقارير', en: 'Medical Records & Reports' },
    org: { ar: 'مستشفى الأمير محمد بن ناصر', en: 'Prince Mohammed Bin Nasser Hospital' },
    description: { ar: 'توصية عن التدريب في إدارة المعلومات الصحية والسجلات الطبية.', en: 'A recommendation for training in health information and medical records management.' }
  },
  {
    image: './assets/recommendations/recommendation-03.jpg',
    title: { ar: 'تنسيق العمليات', en: 'Operations Coordination' },
    org: { ar: 'مستشفى الأمير محمد بن ناصر', en: 'Prince Mohammed Bin Nasser Hospital' },
    description: { ar: 'توصية عن تنسيق العمليات ودعم الإجراءات الإدارية والبيانات الإحصائية.', en: 'A recommendation covering operations coordination, administrative support, and statistical data.' }
  },
  {
    image: './assets/recommendations/recommendation-04.jpg',
    title: { ar: 'مركز مراقبة الموارد', en: 'Resources Control Center' },
    org: { ar: 'مستشفى الأمير محمد بن ناصر', en: 'Prince Mohammed Bin Nasser Hospital' },
    description: { ar: 'توصية عن متابعة الأداء التشغيلي وتحليل المؤشرات وإعداد لوحات البيانات.', en: 'A recommendation on monitoring operational performance, reviewing indicators, and building dashboards.' }
  },
  {
    image: './assets/recommendations/recommendation-05.jpg',
    title: { ar: 'التأمين الصحي', en: 'Health Insurance' },
    org: { ar: 'مستشفى جازان العام · قسم التأمين', en: 'Jazan General Hospital · Insurance Department' },
    description: { ar: 'توصية عن أنظمة التأمين والتحقق من أهلية التغطية وتحليل بياناتها.', en: 'A recommendation on insurance systems, eligibility verification, and insurance data analysis.' }
  },
  {
    image: './assets/recommendations/recommendation-06.jpg',
    title: { ar: 'شؤون المرضى', en: 'Patient Affairs' },
    org: { ar: 'مستشفى جازان العام', en: 'Jazan General Hospital' },
    description: { ar: 'خطاب توصية عن الالتزام والتعلم وتحليل المعلومات الصحية والعمل ضمن الفريق.', en: 'A recommendation highlighting commitment, learning, health information analysis, and teamwork.' }
  },
  {
    image: './assets/recommendations/recommendation-07.jpg',
    title: { ar: 'أنظمة PACS والأشعة', en: 'PACS & Radiology Systems' },
    org: { ar: 'مستشفى جازان العام · قسم الأشعة', en: 'Jazan General Hospital · Radiology Department' },
    description: { ar: 'توصية عن إدارة الصور الطبية وأنظمة حفظها واسترجاعها ودعم سير العمل السريري.', en: 'A recommendation on medical imaging, digital storage and retrieval, and radiology workflows.' }
  },
  {
    image: './assets/recommendations/recommendation-08.jpg',
    title: { ar: 'الإدارة الاستراتيجية والمشاريع', en: 'Strategic Planning & Projects' },
    org: { ar: 'مستشفى جازان العام', en: 'Jazan General Hospital' },
    description: { ar: 'خطاب توصية عن تحليل المعلومات وتنظيمها والمساهمة في أعمال إدارة المشاريع.', en: 'A recommendation on analyzing and organizing information and contributing to project work.' }
  },
  {
    image: './assets/recommendations/recommendation-09.jpg',
    title: { ar: 'عمليات التأمين الصحي', en: 'Health Insurance Operations' },
    org: { ar: 'مستشفى الأمير محمد بن ناصر', en: 'Prince Mohammed Bin Nasser Hospital' },
    description: { ar: 'توصية عن إدارة بيانات التغطية والتعرف على أنظمة VIDa وCyclus RCM.', en: 'A recommendation on coverage data management and exposure to VIDa and Cyclus RCM.' }
  },
  {
    image: './assets/recommendations/recommendation-10.jpg',
    title: { ar: 'وحدة PACS والأشعة', en: 'PACS Unit & Radiology' },
    org: { ar: 'مستشفى الأمير محمد بن ناصر · تجمع جازان الصحي', en: 'Prince Mohammed Bin Nasser Hospital · Jazan Health Cluster' },
    description: { ar: 'توصية عن أنظمة التصوير الطبي وتكامل PACS وحماية البيانات الصحية.', en: 'A recommendation on medical imaging, PACS integration, and healthcare data security.' }
  }
];

function openRecommendation(item, language, trigger) {
  document.querySelector('.afrah-recommendation-modal')?.remove();
  const overlay = document.createElement('div');
  overlay.className = 'afrah-recommendation-modal';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', item.title[language]);
  const frame = document.createElement('div');
  frame.className = 'afrah-recommendation-modal-frame';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'afrah-recommendation-modal-close';
  close.textContent = language === 'ar' ? 'إغلاق' : 'Close';
  close.setAttribute('aria-label', close.textContent);
  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.title[language];
  image.decoding = 'async';
  const previousOverflow = document.body.style.overflow;
  const dismiss = () => {
    overlay.remove();
    document.body.style.overflow = previousOverflow;
    document.removeEventListener('keydown', onKey);
    trigger?.focus({ preventScroll: true });
  };
  const onKey = event => { if (event.key === 'Escape') dismiss(); };
  close.addEventListener('click', dismiss);
  overlay.addEventListener('click', event => { if (event.target === overlay) dismiss(); });
  document.addEventListener('keydown', onKey);
  frame.append(close, image);
  overlay.appendChild(frame);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  close.focus({ preventScroll: true });
}

function renderRecommendationCards() {
  const view = document.querySelector('.portfolio-recommendations-view');
  if (!view) return;
  const language = document.documentElement.lang === 'en' ? 'en' : 'ar';
  if (view.dataset.afrahRecommendationLanguage === language && view.querySelector('.afrah-recommendation-grid')) return;
  view.dir = language === 'ar' ? 'rtl' : 'ltr';
  const grid = document.createElement('div');
  grid.className = 'afrah-recommendation-grid';
  grid.setAttribute('aria-label', language === 'ar' ? 'خطابات التوصية' : 'Recommendation letters');
  recommendationData.forEach(item => {
    const card = document.createElement('article');
    card.className = 'afrah-recommendation-card';
    const icon = document.createElement('span');
    icon.className = 'afrah-recommendation-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = '<svg viewBox="0 0 24 24"><path d="M7 3.75h7l5 5v11.5H7a2 2 0 0 1-2-2v-12.5a2 2 0 0 1 2-2Z"/><path d="M14 3.75v5h5M8.5 13h7M8.5 16.5h7"/></svg>';
    const title = document.createElement('h3');
    title.textContent = item.title[language];
    const org = document.createElement('p');
    org.className = 'afrah-recommendation-org';
    org.textContent = item.org[language];
    const description = document.createElement('p');
    description.className = 'afrah-recommendation-description';
    description.textContent = item.description[language];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'afrah-recommendation-open';
    button.textContent = language === 'ar' ? 'عرض خطاب التوصية' : 'View recommendation';
    button.addEventListener('click', () => openRecommendation(item, language, button));
    card.append(icon, title, org, description, button);
    grid.appendChild(card);
  });
  view.replaceChildren(grid);
  view.dataset.afrahRecommendationLanguage = language;
}

const recommendationObserver = new MutationObserver(() => renderRecommendationCards());
recommendationObserver.observe(document.getElementById('root') || document.body, { subtree: true, childList: true });
window.addEventListener('afrah-language-change', renderRecommendationCards);
document.addEventListener('DOMContentLoaded', renderRecommendationCards);
renderRecommendationCards();
