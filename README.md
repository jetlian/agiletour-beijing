# 北京敏捷社区网站

> AgileTour Beijing Community Website · 北京敏捷之旅社区官方网站

## 中文说明

北京敏捷社区网站，用于展示北京地区的敏捷活动、历年活动档案、志愿者合影以及官方联系方式。

北京敏捷之旅社区致力于在北京地区推广敏捷实践经验，传播敏捷实践方法，建立敏捷学习圈子，让敏捷爱好者彼此建立连接。

### 主要内容

- 高端深色橙色视觉体系
- 首页 2026 年线上与线下活动日历
- 首页多张活动照片自动轮播
- 2026 活动线上 / 线下双栏介绍
- 2010–2026 历年活动档案
- 2025、2026 活动封面待补充状态
- 年度活动独立详情页面
- 年度活动封面与多张现场照片画廊
- 志愿者年度合影展示
- 官方微信号与视频号二维码
- 桌面端和移动端响应式布局

### 页面说明

| 页面 | 地址 | 说明 |
| --- | --- | --- |
| 首页 | `index.html` | 2026 活动、轮播图和社区介绍 |
| 历年活动 | `activities.html` | 2010–2026 年度活动列表 |
| 活动详情 | `detail.html?year=2024` | 指定年度的活动详情和多图画廊 |
| 志愿者 | `volunteers.html` | 年度志愿者合影 |
| 关于我们 | `about.html` | 社区介绍与官方二维码 |

### 技术栈

- HTML5
- CSS3
- Vanilla JavaScript
- 静态图片资源
- SVG favicon

### 项目结构

```text
agiletour-beijing/
├── index.html
├── activities.html
├── detail.html
├── volunteers.html
├── about.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── activity-2010.jpg ... activity-2024.jpg
    ├── detail-2024-*.jpg
    ├── slider-*.jpg
    ├── volunteer-*.jpg
    ├── 官方logo.jpg
    ├── 官方微信号.jpg
    └── 官方视频号.jpg
```

### 本地预览

这是一个纯静态网站，不需要运行构建命令，也不需要安装依赖。可以使用：

```bash
python3 -m http.server 4175
```

然后打开：

```text
http://localhost:4175/
```

也可以直接打开 `index.html`。如果需要测试年份详情页，可以访问：

```text
http://localhost:4175/detail.html?year=2024
```

### 素材说明

活动封面、轮播照片、志愿者合影、Logo 和二维码来自北京敏捷社区相关公开页面或项目提供素材。公开发布前，请确认图片使用授权、署名要求和人物隐私合规情况。

---

## English Description

The AgileTour Beijing Community website presents Beijing Agile events, annual activity archives, volunteer group photos, and official contact channels.

The Beijing AgileTour community promotes Agile practices in Beijing, shares practical experience, builds learning circles, and connects Agile enthusiasts with one another.

### Key Features

- Premium dark visual system with orange accents
- 2026 online and offline event calendar on the homepage
- Homepage activity photo carousel
- Dedicated online / offline introduction for the 2026 program
- Annual activity archive from 2010 to 2026
- “Cover pending” status for 2025 and 2026
- Dedicated annual detail pages
- Annual covers with multi-photo event galleries
- Volunteer group photo archive
- Official WeChat and video account QR codes
- Responsive desktop and mobile layouts

### Page Guide

| Page | URL | Description |
| --- | --- | --- |
| Home | `index.html` | 2026 events, photo carousel, and community introduction |
| Activities | `activities.html` | Annual archive from 2010 to 2026 |
| Event Detail | `detail.html?year=2024` | Year-specific event details and photo gallery |
| Volunteers | `volunteers.html` | Annual volunteer group photos |
| About | `about.html` | Community introduction and official QR codes |

### Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Static image assets
- SVG favicon

### Project Structure

```text
agiletour-beijing/
├── index.html
├── activities.html
├── detail.html
├── volunteers.html
├── about.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── activity-2010.jpg ... activity-2024.jpg
    ├── detail-2024-*.jpg
    ├── slider-*.jpg
    ├── volunteer-*.jpg
    ├── 官方logo.jpg
    ├── 官方微信号.jpg
    └── 官方视频号.jpg
```

### Local Preview

This is a fully static website. It does not require a build command or dependency installation. Start a simple static server:

```bash
python3 -m http.server 4175
```

Then open:

```text
http://localhost:4175/
```

You can also open `index.html` directly. To test a yearly detail page:

```text
http://localhost:4175/detail.html?year=2024
```

### Asset Notice

Activity covers, carousel photos, volunteer group photos, the logo, and QR codes come from public AgileTour Beijing pages or supplied project assets. Before public distribution, confirm image permissions, attribution requirements, and privacy compliance.
