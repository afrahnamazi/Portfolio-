const certificateItems = [
  {file:'scfhs-classification.png',ar:'التصنيف المهني — أخصائي معلوماتية صحية',en:'Professional Classification — Health Informatics Specialist',issuerAr:'الهيئة السعودية للتخصصات الصحية',issuerEn:'Saudi Commission for Health Specialties',kindAr:'تصنيف مهني',kindEn:'Professional classification'},
  {file:'infection-control.jpg',ar:'رخصة مهارات مكافحة العدوى الأساسية (BICSL)',en:'Basic Infection Control Skills License (BICSL)',issuerAr:'وزارة الصحة — تجمع جازان الصحي',issuerEn:'Ministry of Health — Jazan Health Cluster',kindAr:'رخصة مهنية',kindEn:'Professional license'},
  {file:'hipaa.jpg',ar:'تدريب الامتثال لمعيار HIPAA',en:'HIPAA Compliance Training',issuerAr:'HIPAA Training',issuerEn:'HIPAA Training',kindAr:'تدريب مهني',kindEn:'Professional training'},
  {file:'fhir-fundamentals.jpg',ar:'أساسيات FHIR',en:'FHIR Fundamentals Course',issuerAr:'InfoPulse — قسم الجودة والتطوير',issuerEn:'InfoPulse — Quality and Development',kindAr:'دورة تخصصية',kindEn:'Specialized course'},
  {file:'medical-coding.jpg',ar:'الترميز الطبي والتوثيق السريري',en:'Medical Coding and Clinical Documentation',issuerAr:'InfoPulse Community',issuerEn:'InfoPulse Community',kindAr:'لقاء تخصصي',kindEn:'Professional session'},
  {file:'health-informatics-clinical-teams.jpg',ar:'كيف تدعم المعلوماتية الصحية الطاقم الطبي في الميدان',en:'How Health Informatics Supports Clinical Teams',issuerAr:'InfoPulse Health Informatics Circle',issuerEn:'InfoPulse Health Informatics Circle',kindAr:'دورة تخصصية',kindEn:'Specialized course'},
  {file:'ethical-hacker.jpg',ar:'Ethical Hacker',en:'Ethical Hacker',issuerAr:'Cisco Networking Academy',issuerEn:'Cisco Networking Academy',kindAr:'دورة تقنية',kindEn:'Technical course'},
  {file:'powerbi-custom-visual.jpg',ar:'استخدام ميزة الإنشاء في Power BI',en:'Getting Started with Create in Power BI',issuerAr:'Microsoft Learn',issuerEn:'Microsoft Learn',kindAr:'إنجاز تعلّمي',kindEn:'Learning achievement'},
  {file:'powerbi-data-analysis.jpg',ar:'أساسيات Power BI لتحليل البيانات',en:'Power BI Fundamentals for Data Analysis',issuerAr:'العطاء الرقمي',issuerEn:'Digital Attaa',kindAr:'شهادة حضور',kindEn:'Certificate of attendance'},
  {file:'excel-data-analysis.jpg',ar:'تحليل البيانات باستخدام Excel',en:'Data Analysis with Excel',issuerAr:'مركز تمكين الهدف للإشراف والتدريب التربوي',issuerEn:'Tamkeen Alhadaf Training Center',kindAr:'دورة تدريبية',kindEn:'Training course'},
  {file:'spss-data-analysis.jpg',ar:'مهارات تحليل البيانات باستخدام SPSS',en:'Data Analysis Skills with SPSS',issuerAr:'مركز تمكين الهدف للإشراف والتدريب التربوي',issuerEn:'Tamkeen Alhadaf Training Center',kindAr:'دورة تدريبية',kindEn:'Training course'},
  {file:'r-statistical-analysis.jpg',ar:'التنقيب في البيانات باستخدام R الإحصائية',en:'Data Mining with R',issuerAr:'مركز تمكين الهدف للإشراف والتدريب التربوي',issuerEn:'Tamkeen Alhadaf Training Center',kindAr:'دورة تدريبية',kindEn:'Training course'},
  {file:'sdai-ai-fundamentals.jpg',ar:'مبادئ الذكاء الاصطناعي',en:'Fundamentals of Artificial Intelligence',issuerAr:'الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',issuerEn:'Saudi Data and AI Authority (SDAIA)',kindAr:'دورة تدريبية',kindEn:'Training course'},
  {file:'sdai-advanced-ai.jpg',ar:'مفاهيم الذكاء الاصطناعي وتطبيقاته المتقدمة',en:'Artificial Intelligence Concepts and Advanced Applications',issuerAr:'الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',issuerEn:'Saudi Data and AI Authority (SDAIA)',kindAr:'دورة تدريبية',kindEn:'Training course'},
  {file:'pmp-course.jpg',ar:'إتمام دورة PMP',en:'PMP Course Completion',issuerAr:'InfoPulse — قسم الجودة والتطوير',issuerEn:'InfoPulse — Quality and Development',kindAr:'دورة تدريبية',kindEn:'Training course'},
  {file:'data-analysis-meetup-2.jpg',ar:'ملتقى تحليل البيانات 2 — 10 ساعات تدريبية',en:'Data Analysis Meetup 2 — 10 Training Hours',issuerAr:'جمعية كفاءات الأهلية',issuerEn:'Kafaat Civil Association',kindAr:'لقاء تدريبي',kindEn:'Training meetup'}
];

function renderCertificateGallery() {
  const view = document.querySelector('.portfolio-certificates-view');
  if (!view) return;
  const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  if (view.dataset.afrahCertificateLang === lang && view.querySelector('.afrah-certificates-grid')) return;
  view.dataset.afrahCertificateLang = lang;
  view.replaceChildren();

  const intro = document.createElement('div');
  intro.className = 'afrah-certificates-intro';
  const heading = document.createElement('h2');
  heading.textContent = lang === 'ar' ? 'الشهادات المهنية والدورات المختارة' : 'Selected Certifications and Courses';
  const description = document.createElement('p');
  description.textContent = lang === 'ar'
    ? 'مجموعة مختارة في المعلوماتية الصحية وتحليل البيانات والتقنية.'
    : 'A curated selection in health informatics, data analysis, and technology.';
  intro.append(heading, description);

  const grid = document.createElement('div');
  grid.className = 'afrah-certificates-grid';
  certificateItems.forEach(item => {
    const title = lang === 'ar' ? item.ar : item.en;
    const issuer = lang === 'ar' ? item.issuerAr : item.issuerEn;
    const kind = lang === 'ar' ? item.kindAr : item.kindEn;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'afrah-cert-card';
    button.setAttribute('aria-label', `${lang === 'ar' ? 'عرض الشهادة:' : 'View certificate:'} ${title}`);

    const preview = document.createElement('span');
    preview.className = 'afrah-cert-preview';
    const image = document.createElement('img');
    image.src = `./assets/certificates/${item.file}`;
    image.alt = title;
    image.loading = 'lazy';
    image.decoding = 'async';
    preview.appendChild(image);

    const copy = document.createElement('span');
    copy.className = 'afrah-cert-copy';
    const badge = document.createElement('span');
    badge.className = 'afrah-cert-kind';
    badge.textContent = kind;
    const cardTitle = document.createElement('span');
    cardTitle.className = 'afrah-cert-title';
    cardTitle.textContent = title;
    const cardIssuer = document.createElement('span');
    cardIssuer.className = 'afrah-cert-issuer';
    cardIssuer.textContent = issuer;
    const action = document.createElement('span');
    action.className = 'afrah-cert-action';
    action.textContent = lang === 'ar' ? 'عرض الوثيقة' : 'View document';
    copy.append(badge, cardTitle, cardIssuer, action);
    button.append(preview, copy);
    button.addEventListener('click', () => openCertificate(item, lang));
    grid.appendChild(button);
  });
  view.append(intro, grid);
}

function openCertificate(item, lang) {
  document.querySelector('.afrah-cert-modal-backdrop')?.remove();
  const title = lang === 'ar' ? item.ar : item.en;
  const overlay = document.createElement('div');
  overlay.className = 'afrah-cert-modal-backdrop';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', title);
  const frame = document.createElement('div');
  frame.className = 'afrah-cert-modal-frame';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'afrah-cert-modal-close';
  close.textContent = lang === 'ar' ? 'إغلاق' : 'Close';
  close.setAttribute('aria-label', close.textContent);
  const heading = document.createElement('h3');
  heading.textContent = title;
  const image = document.createElement('img');
  image.className = 'afrah-cert-modal-image';
  image.src = `./assets/certificates/${item.file}`;
  image.alt = title;
  image.decoding = 'async';
  const dismiss = () => {
    overlay.remove();
    document.removeEventListener('keydown', onKey);
  };
  const onKey = event => { if (event.key === 'Escape') dismiss(); };
  close.addEventListener('click', dismiss);
  overlay.addEventListener('click', event => { if (event.target === overlay) dismiss(); });
  document.addEventListener('keydown', onKey);
  frame.append(close, heading, image);
  overlay.appendChild(frame);
  document.body.appendChild(overlay);
  close.focus({preventScroll: true});
}

const root = document.getElementById('root') || document.body;
new MutationObserver(renderCertificateGallery).observe(root, {subtree: true, childList: true});
new MutationObserver(renderCertificateGallery).observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});
renderCertificateGallery();
