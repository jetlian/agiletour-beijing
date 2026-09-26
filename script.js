const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => nav.classList.toggle('is-open'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));

const years = [
  { year: 2026, title: '北京敏捷社区 2026 尽请期待...', image: null, status: '尽请期待', intro: '' },
  { year: 2025, title: '2025 北京敏捷之旅大会', image: 'activity-2025.jpg', status: '北京 / 现场', intro: '新一年的社区活动与实践分享，持续连接北京敏捷实践者。' },
  { year: 2024, title: '2024 北京敏捷之旅大会', image: 'activity-2024.jpg', status: '北京 / 现场', intro: '汇聚来自不同领域的敏捷专家、教练与从业者。' },
  { year: 2023, title: '2023 北京敏捷之旅大会', image: 'activity-2023.jpg', status: '北京 / 现场', intro: '在真实问题中交流，在共同实践中前进。' },
  { year: 2021, title: '2021 北京敏捷之旅大会', image: 'activity-2021.jpg', status: '线上 / 社区活动', intro: '在不确定中保持连接，在变化中继续学习。' },
  { year: 2020, title: '2020 北京敏捷之旅大会', image: 'activity-2020.jpg', status: '线上 / 社区活动', intro: '社区在特殊时期保持开放与连接。' },
  { year: 2019, title: '2019 北京敏捷之旅大会 · 十周年', image: 'activity-2019.jpg', status: '北京 / 十周年', intro: '十年一程，感谢每一次相遇与同行。' },
  { year: 2018, title: '2018 北京敏捷之旅大会', image: 'activity-2018.jpg', status: '北京 / 社区活动', intro: '以实践为中心，持续创造面对面交流。' },
  { year: 2017, title: '2017 北京敏捷之旅大会', image: 'activity-2017.jpg', status: '北京 / 社区活动', intro: '连接更多实践者，分享更多真实经验。' },
  { year: 2016, title: '2016 北京敏捷之旅大会', image: 'activity-2016.jpg', status: '北京 / 社区活动', intro: '在开放空间里共同学习与探索。' },
  { year: 2015, title: '2015 北京敏捷之旅大会', image: 'activity-2015.jpg', status: '北京 / 社区活动', intro: '让敏捷从方法走进更多真实场景。' },
  { year: 2014, title: '2014 北京敏捷之旅大会', image: 'activity-2014.jpg', status: '北京 / 社区活动', intro: '北京社区持续扩大实践者之间的连接。' },

];

const archiveGrid = document.querySelector('#archiveGrid');
if (archiveGrid) {
  archiveGrid.innerHTML = years.map((item) => `<a class="archive-card" href="detail.html?year=${item.year}">${item.image ? `<img src="assets/activity/${item.image}" alt="${item.title}封面">` : `<div class="pending-cover">COVER / 尽请期待</div>`}<div class="archive-card-body"><b>${item.year}</b><span>${item.title.replace(item.year, '').replace(' · ', '')}</span><em>↗</em></div></a>`).join('');
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
  if (item.image) { image.src = `assets/activity/${item.image}`; image.alt = `${item.title}封面`; } else { image.remove(); document.querySelector('.detail-cover').innerHTML = '<div class="pending-cover detail-pending">COVER / 照片待补充</div>'; }
  document.title = `${item.title} · 北京敏捷社区`;
  const detailPhotos = {
    2025: ['8F5A5216.JPG', '8F5A5219.JPG', '8F5A5222.JPG', '8F5A5231.JPG', '8F5A5235.JPG', '8F5A5236.JPG', '8F5A5237.JPG', '8F5A5240.JPG', '8F5A5244.JPG', '8F5A5257.JPG', '8F5A5268.JPG', '8F5A5297.JPG', '8F5A5304.JPG', '8F5A5307.JPG', '8F5A5310.JPG', '8F5A5316.JPG', '8F5A5325.JPG', '8F5A5339.JPG', '8F5A5341.JPG', '8F5A5343.JPG', '8F5A5344.JPG', '8F5A5356.JPG', '8F5A5357.JPG', '8F5A5362.JPG', '8F5A5366.JPG', '8F5A5373.JPG', '8F5A5464.JPG', '8F5A5474.JPG', '8F5A5477.JPG', '8F5A5484.JPG', '8F5A5489.JPG', '8F5A5493.JPG', '8F5A5505.JPG', '8F5A5519.JPG', '8F5A5524.JPG', '8F5A5530.JPG', '8F5A5533.JPG', '8F5A5537.JPG', '8F5A5541.JPG', '8F5A5555.JPG', '8F5A5564.JPG', '8F5A5569.JPG', '8F5A5572.JPG', '8F5A5573.JPG', '8F5A5574.JPG', '8F5A5588.JPG'],
    2024: ['8F5A4845.JPG', '8F5A4882.JPG', '8F5A4890.JPG', '8F5A4899.JPG', '8F5A4921.JPG', '8F5A4924.JPG', '8F5A4925.JPG', '8F5A4946.JPG', '8F5A4976.JPG', '8F5A4977.JPG', '8F5A4978.JPG', '8F5A4988.JPG', '8F5A5006.JPG', '8F5A5011.JPG', '8F5A5026.JPG', '8F5A5032.JPG', '8F5A5047.JPG', '8F5A5056.JPG', '8F5A5057.JPG', '8F5A5060.JPG', '8F5A5061.JPG', '8F5A5064.JPG', '8F5A5072.JPG', '8F5A5080.JPG', '8F5A5084.JPG', '8F5A5088.JPG', '8F5A5098.JPG', '8F5A5114.JPG', '8F5A5120.JPG', '8F5A5124.JPG', '8F5A5137.JPG', '8F5A5143.JPG', '8F5A5144.JPG', '8F5A5179.JPG', '8F5A5181.JPG', '8F5A5188.JPG'],
    2023: ['8F5A4403.JPG', '8F5A4410.JPG', '8F5A4413.JPG', '8F5A4421.JPG', '8F5A4446.JPG', '8F5A4462.JPG', '8F5A4471.JPG', '8F5A4472.JPG', '8F5A4479.JPG', '8F5A4481.JPG', '8F5A4497.JPG', '8F5A4511.JPG', '8F5A4518.JPG', '8F5A4520.JPG', '8F5A4523.JPG', '8F5A4547.JPG', '8F5A4562.JPG', '8F5A4572.JPG', '8F5A4584.JPG', '8F5A4593.JPG', '8F5A4608.JPG', '8F5A4611.JPG', 'DSC04187.JPG', 'DSC04233.JPG', 'DSC04246.JPG', 'DSC04292.JPG', 'DSC05131.JPG', 'DSC05145.JPG', 'DSC05152.JPG', 'DSC05167.JPG', 'DSC05199.JPG', 'DSC05218.JPG', 'DSC05224.JPG', 'DSC05260.JPG', 'DSC05284.JPG', 'DSC05287.JPG', 'DSC05289.JPG', 'DSC05290.JPG', 'DSC05291.JPG', 'DSC05316.JPG', 'DSC05452.JPG', 'IMG_5551.JPG', 'IMG_5942.JPG', 'IMG_8775.JPG', 'IMG_8786.JPG', 'IMG_8828.JPG', 'IMG_8838.JPG', 'IMG_8839.JPG', 'IMG_8851.JPG', 'IMG_8864.JPG', 'IMG_8866.JPG', 'IMG_8868.JPG', 'IMG_8873.JPG', 'IMG_8874.JPG', 'IMG_8878.JPG', 'IMG_8883.JPG', 'IMG_8885.JPG', 'IMG_8894.JPG', 'IMG_8897.JPG'],
    2021: [],
    2020: ['8F5A4167.JPG', '8F5A4170.JPG', '8F5A4174.JPG', '8F5A4228.JPG', '8F5A4277.JPG', '8F5A4295.JPG', '8F5A4318.JPG', '8F5A4330.JPG', '8F5A4351.JPG', '8F5A4359.JPG', '8F5A4366.JPG', '8F5A4379.JPG', '2014-01-22 092136.jpg', '2014-01-22 092907.jpg', '2014-01-22 114539.jpg', 'DSC_3274.JPG', 'DSC_3324.JPG', 'DSC_3365.JPG'],
    2019: ['北京敏捷之旅2019013.jpg', '北京敏捷之旅2019014.jpg', '北京敏捷之旅2019019.jpg', '北京敏捷之旅2019037.jpg', '北京敏捷之旅2019054.jpg', '北京敏捷之旅2019059.jpg', '北京敏捷之旅2019201.jpg', '北京敏捷之旅2019222.jpg', '北京敏捷之旅2019236.jpg', '北京敏捷之旅2019242.jpg', '北京敏捷之旅2019243.jpg', '北京敏捷之旅2019346.jpg', '北京敏捷之旅2019360.jpg'],
    2018: ['1-8F5A2739.JPG', '1-8F5A2761.JPG', '1-8F5A2765.JPG', '1-8F5A2809.JPG', '1-8F5A2821.JPG', '1-8F5A2833.JPG', '1-8F5A2838.JPG', '1-8F5A2867.JPG', '1-8F5A2894.JPG', '1-8F5A2981.JPG', '1-8F5A3003.JPG', '1-8F5A3010.JPG', '1-8F5A3012.JPG', '1-8F5A3025.JPG', '1-8F5A3043.JPG', '1-8F5A3059.JPG', '1-8F5A3077.JPG', '1-2018-group-photo.jpg', '8F5A3060.JPG'],
    2017: ['agile-tour-2017-beijing-group-photo-scrum-alliance.jpg', 'agile-tour-2017-beijing-group-photo-v2.jpg'],
    2016: ['2016-12-18 174150的副本.jpg', '敏捷之旅2016年.jpg'],
    2015: ['002.png', '003.png', '004.png', '005.jpg', '0007.jpg', '2015-6.jpg', '2015-7.jpg', '2015-11-29-171936.jpg', '2015讲师和志愿者.jpg', '81288-20151211094454152-1033227633.jpg'],
    2014: ['2014-beijing-1-1.jpg', '2014-beijing-1-2.jpg', '2014-beijing-2-1.jpg', '2014-beijing-3-1.jpg', '2014-beijing-3-2.jpg', '2014-beijing-5.jpg', '2014-beijing-8.jpg', '2014-beijing-27.jpg', '2014-beijing-29.jpg', '2014年全家福.jpg'],   
    2026: []
  };
  const gallery = document.createElement('section');
  gallery.className = 'detail-gallery';
  const photos = detailPhotos[item.year] || [];
  gallery.innerHTML = `<div class="section-heading"><div><div class="section-kicker">PHOTO LOG / 活动现场</div><h2>不只一张封面，<br><span>还有真实发生过的瞬间。</span></h2></div><p>按年度进入后，可以继续查看该年度的多张活动照片与现场记录。</p></div><div class="detail-gallery-grid">${photos.length ? photos.map((photo, index) => `<figure><img src="assets/detail/${item.year}/${photo}" alt="${item.year} 北京敏捷之旅活动照片 ${index + 1}"><figcaption>${item.year} / ${String(index + 1).padStart(2, '0')}</figcaption></figure>`).join('') : '<div class="gallery-empty">PHOTO ARCHIVE / 照片待补充</div>'}</div>`;
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
