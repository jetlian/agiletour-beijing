const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => nav.classList.toggle('is-open'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));

const years = [
  { year: 2026, title: '北京敏捷社区 2026 活动季', image: null, status: '照片待补充', intro: '线上与线下并行，围绕 Agentic AI、个人成长与实践创新展开。' },
  { year: 2025, title: '北京敏捷社区 2025', image: null, status: '照片待补充', intro: '新一年的社区活动与实践分享，持续连接北京敏捷实践者。' },
  { year: 2024, title: '2024 北京敏捷之旅大会', image: 'activity-2024.jpg', status: '北京 / 现场', intro: '汇聚来自不同领域的敏捷专家、教练与从业者。' },
  { year: 2023, title: '2023 北京敏捷之旅', image: 'activity-2023.png', status: '北京 / 现场', intro: '在真实问题中交流，在共同实践中前进。' },
  { year: 2022, title: '2022 北京敏捷之旅', image: 'activity-2022.jpg', status: '北京 / 社区活动', intro: '持续探索敏捷团队与组织协作的新路径。' },
  { year: 2021, title: '2021 北京敏捷之旅', image: 'activity-2021.png', status: '线上 / 社区活动', intro: '在不确定中保持连接，在变化中继续学习。' },
  { year: 2020, title: '2020 北京敏捷之旅', image: 'activity-2020.jpg', status: '线上 / 社区活动', intro: '社区在特殊时期保持开放与连接。' },
  { year: 2019, title: '2019 北京敏捷之旅 · 十周年', image: 'activity-2019.jpg', status: '北京 / 十周年', intro: '十年一程，感谢每一次相遇与同行。' },
  { year: 2018, title: '2018 北京敏捷之旅', image: 'activity-2018.jpg', status: '北京 / 社区活动', intro: '以实践为中心，持续创造面对面交流。' },
  { year: 2017, title: '2017 北京敏捷之旅', image: 'activity-2017.jpg', status: '北京 / 社区活动', intro: '连接更多实践者，分享更多真实经验。' },
  { year: 2016, title: '2016 北京敏捷之旅', image: 'activity-2016.jpg', status: '北京 / 社区活动', intro: '在开放空间里共同学习与探索。' },
  { year: 2015, title: '2015 北京敏捷之旅', image: 'activity-2015.png', status: '北京 / 社区活动', intro: '让敏捷从方法走进更多真实场景。' },
  { year: 2014, title: '2014 北京敏捷之旅', image: 'activity-2014.jpg', status: '北京 / 社区活动', intro: '北京社区持续扩大实践者之间的连接。' },
  { year: 2013, title: '2013 北京敏捷之旅', image: 'activity-2013.jpg', status: '北京 / 社区活动', intro: '在分享与讨论中，建立共同语言。' },
  { year: 2012, title: '2012 北京敏捷之旅', image: 'activity-2012.jpg', status: '北京 / 社区活动', intro: '敏捷实践在北京继续生长。' },
  { year: 2011, title: '2011 北京敏捷之旅', image: 'activity-2011.jpg', status: '北京 / 社区活动', intro: '从一次活动开始，认识更多同路人。' },
  { year: 2010, title: '2010 北京敏捷之旅', image: 'activity-2010.jpg', status: '北京 / 社区活动', intro: '北京敏捷之旅早期活动档案。' }
];

const archiveGrid = document.querySelector('#archiveGrid');
if (archiveGrid) {
  archiveGrid.innerHTML = years.map((item) => `<a class="archive-card" href="detail.html?year=${item.year}">${item.image ? `<img src="assets/${item.image}" alt="${item.title}封面">` : `<div class="pending-cover">COVER / 待补充</div>`}<div class="archive-card-body"><b>${item.year}</b><span>${item.title.replace(item.year, '').replace(' · ', '')}</span><em>↗</em></div></a>`).join('');
}

const detailYear = document.querySelector('#detailYear');
if (detailYear) {
  const params = new URLSearchParams(location.search);
  const item = years.find((entry) => String(entry.year) === params.get('year')) || years[2];
  detailYear.textContent = item.year;
  document.querySelector('#detailTitle').textContent = item.title;
  document.querySelector('#detailIntro').textContent = item.intro;
  document.querySelector('#detailTag').textContent = item.status;
  document.querySelector('#detailDate').textContent = `${item.year} / AGILETOUR BEIJING`;
  document.querySelector('#detailText').textContent = `${item.intro} 北京敏捷之旅持续邀请来自不同领域的实践者，围绕真实问题展开分享、对话与共创。每一年的活动，都是社区共同成长的一次记录。`;
  const image = document.querySelector('#detailImage');
  if (item.image) { image.src = `assets/${item.image}`; image.alt = `${item.title}封面`; } else { image.remove(); document.querySelector('.detail-cover').innerHTML = '<div class="pending-cover detail-pending">COVER / 照片待补充</div>'; }
  document.title = `${item.title} · 北京敏捷社区`;
  const detailPhotos = {
    2024: ['detail-2024-1.jpg', 'detail-2024-2.jpg', 'detail-2024-3.jpg', 'detail-2024-4.jpg'],
    2023: ['activity-2023.png', 'volunteer-2023.jpg', 'activity-2022.jpg'],
    2022: ['activity-2022.jpg', 'volunteer-2019.jpg', 'activity-2021.png'],
    2021: ['activity-2021.png', 'volunteer-2018.jpg', 'activity-2020.jpg'],
    2020: ['activity-2020.jpg', 'volunteer-2019.jpg', 'activity-2019.jpg'],
    2019: ['activity-2019.jpg', 'volunteer-2019.jpg', 'slider-2019.jpg'],
    2018: ['activity-2018.jpg', 'volunteer-2018.jpg', 'slider-2018.jpg'],
    2017: ['activity-2017.jpg', 'volunteer-2016.jpg', 'slider-2017.jpg'],
    2016: ['activity-2016.jpg', 'volunteer-2016.jpg', 'slider-2016.jpg'],
    2015: ['activity-2015.png', 'volunteer-2015.jpg', 'slider-2015.jpg'],
    2014: ['activity-2014.jpg', 'volunteer-2014.jpg', 'activity-2013.jpg'],
    2013: ['activity-2013.jpg', 'volunteer-2014.jpg', 'activity-2012.jpg'],
    2012: ['activity-2012.jpg', 'volunteer-2011.jpg', 'activity-2011.jpg'],
    2011: ['activity-2011.jpg', 'volunteer-2011.jpg', 'activity-2010.jpg'],
    2010: ['activity-2010.jpg', 'volunteer-2011.jpg', 'activity-2012.jpg'],
    2025: [],
    2026: []
  };
  const gallery = document.createElement('section');
  gallery.className = 'detail-gallery';
  const photos = detailPhotos[item.year] || [];
  gallery.innerHTML = `<div class="section-heading"><div><div class="section-kicker">PHOTO LOG / 活动现场</div><h2>不只一张封面，<br><span>还有真实发生过的瞬间。</span></h2></div><p>按年度进入后，可以继续查看该年度的多张活动照片与现场记录。</p></div><div class="detail-gallery-grid">${photos.length ? photos.map((photo, index) => `<figure><img src="assets/${photo}" alt="${item.year} 北京敏捷之旅活动照片 ${index + 1}"><figcaption>${item.year} / ${String(index + 1).padStart(2, '0')}</figcaption></figure>`).join('') : '<div class="gallery-empty">PHOTO ARCHIVE / 照片待补充</div>'}</div>`;
  document.querySelector('.detail-body')?.after(gallery);
}

const slider = document.querySelector('.slider-frame');
if (slider) {
  const slides = [...slider.querySelectorAll('.slide')];
  const dots = slider.querySelector('.slider-dots');
  let current = 0;
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button'; dot.setAttribute('aria-label', `查看第 ${index + 1} 张`);
    dot.addEventListener('click', () => showSlide(index));
    dots.appendChild(dot);
  });
  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
    [...dots.children].forEach((dot, i) => dot.classList.toggle('is-active', i === current));
  }
  slider.querySelector('.prev').addEventListener('click', () => showSlide(current - 1));
  slider.querySelector('.next').addEventListener('click', () => showSlide(current + 1));
  showSlide(0);
  let timer = setInterval(() => showSlide(current + 1), 5200);
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', () => { timer = setInterval(() => showSlide(current + 1), 5200); });
}
