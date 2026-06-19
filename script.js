const translations = {
  en: {
    "brand.name": "Yingshuang Yang",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.tableau": "Tableau",
    "nav.contact": "Contact",
    "hero.eyebrow": "Data Analytics · Machine Learning · KPI Reporting",
    "hero.title": "Yingshuang Yang",
    "hero.slogan": "Turning complex data into clear decisions.",
    "hero.lede": "I am a data analyst with an M.S. in Data Science who turns operational and behavioral data into actionable insights, dashboards, experiments, and machine learning workflows for practical business decisions.",
    "hero.viewProjects": "View Projects",
    "hero.downloadResume": "Download Resume",
    "hero.metricRecords": "service records analyzed",
    "hero.metricGpa": "M.S. Data Science GPA",
    "hero.metricFocus": "Focus",
    "hero.metricFocusText": "Operational analytics, A/B testing, dashboards, ML modeling",
    "about.eyebrow": "About me",
    "about.title": "Personal Story",
    "about.p1": "I like learning emerging technologies and bringing them into my workflow. Recently, I have been studying AI agents and exploring how agent-based workflows can help me analyze, automate, and work more efficiently.",
    "about.p2": "The work I enjoy most starts with data, but does not stop at surface-level metrics. I like digging into the deeper reasons behind user behavior, operational changes, and business outcomes.",
    "about.p3": "I also enjoy collaborating with different teams to turn analysis into better product experiences, higher efficiency, and lower operating costs.",
    "about.factLooking": "Looking for",
    "about.factLookingText": "Data Analyst / Data Scientist roles in the U.S.",
    "about.factStrengths": "Strengths",
    "about.factStrengthsText": "SQL, Python, dashboards, experimentation",
    "about.factLocation": "Location",
    "about.factLocationText": "Longmont, Colorado · Open to relocation",
    "projects.eyebrow": "Selected work",
    "projects.title": "Selected Data Projects",
    "projects.details": "Details",
    "projects.report": "Report",
    "projects.bike.badge": "Forecasting",
    "projects.bike.title": "Bike Sharing Demand Prediction",
    "projects.bike.desc": "Predicted bike rental volume from time, weather, and seasonal patterns so operators can place bikes where demand is expected, improving availability and utilization.",
    "projects.bike.h1": "Engineered hour, weekday, month, peak-hour, rolling, and temperature features from rental and weather data.",
    "projects.bike.h2": "Compared Random Forest, SVR, and Ridge Regression, then tuned Random Forest with cross-validation.",
    "projects.bike.fig1": "Predictions vs. actuals",
    "projects.bike.fig2": "Feature importance",
    "projects.customer.badge": "Loyalty",
    "projects.customer.title": "Customer Loyalty Prediction",
    "projects.customer.desc": "Predicted customer loyalty for Elo merchant recommendations so higher-loyalty customers can be prioritized for targeted promotions and more precise campaign allocation.",
    "projects.customer.tagRows": "30M rows",
    "projects.customer.tagRmse": "Final RMSE 3.734",
    "projects.customer.h1": "Processed large transaction tables in chunks and created card-level aggregate features from historical and new merchant data.",
    "projects.customer.h2": "Benchmarked models on a smaller sample for selection, then reported final RMSE 3.734 for the selected full workflow.",
    "projects.customer.fig": "Sample benchmark for model selection",
    "projects.auction.badge": "Funnel",
    "projects.auction.title": "Auction Funnel Conversion Analysis",
    "projects.auction.desc": "Analyzed an auction marketplace funnel to find where users drop off most, helping teams improve activation and increase bid and auction conversion rates.",
    "experience.eyebrow": "Work history",
    "experience.title": "Experience",
    "experience.csmSocial.org": "Colorado School of Mines",
    "experience.csmSocial.date": "Jul 2025 - May 15, 2026",
    "experience.csmSocial.role": "Social Media Assistant, LinkedIn Analytics & Content Strategy",
    "experience.csmSocial.desc": "Analyze LinkedIn engagement and content performance to guide audience growth and content strategy.",
    "experience.csmSocial.b1": "Built SQL pipelines to analyze impressions, CTR, high-performing content themes, and optimal posting times.",
    "experience.csmSocial.b2": "Developed Power BI dashboards tracking reach and search appearances, supporting content optimization.",
    "experience.csmSocial.b3": "Helped grow followers from 0 to 275+ and increased impressions from 200 to 600.",
    "experience.auxxit.date": "May 2025 - Jul 2025",
    "experience.auxxit.role": "Data Analyst Intern",
    "experience.auxxit.desc": "Analyzed auction funnel behavior, conversion drivers, and marketplace performance for a remote U.S. startup.",
    "experience.auxxit.b1": "Built a logistic regression conversion model to quantify stage-level drop-off drivers and improve auction conversion from 18% to 21%.",
    "experience.auxxit.b2": "Created SQL pipelines on 20K+ user events and 3K+ weekly transactions to evaluate behavioral drivers across user segments.",
    "experience.auxxit.b3": "Developed a real-time Power BI dashboard for GMV, active auctions, and bidder participation, reducing weekly reporting time from 4 hours to 1 hour.",
    "experience.gov.org": "Administrative Examination and Approval Bureau",
    "experience.gov.date": "Nov 2015 - Jun 2024",
    "experience.gov.role": "Data Analyst",
    "experience.gov.desc": "Supported operational analytics, citizen service reporting, KPI monitoring, and service optimization across government departments in Chengdu, China.",
    "experience.gov.b1": "Processed 1M+ multi-channel citizen service records with Python and PySpark, using K-means imputation and Isolation Forest anomaly detection.",
    "experience.gov.b2": "Analyzed 300K+ monthly service records in MySQL, reducing data refresh time by 90% through query optimization.",
    "experience.gov.b3": "Built Tableau KPI dashboards for resolution time, online completion rate, and departmental performance, improving reporting efficiency by 70% for 44 departments.",
    "experience.gov.b4": "Designed A/B tests for FAQ release timing, increasing WeChat engagement by 150% and reducing inquiry load.",
    "experience.ta.org": "Colorado School of Mines",
    "experience.ta.date": "Aug 2025 - Dec 2025",
    "experience.ta.role": "Teaching Assistant, Introduction to Machine Learning",
    "experience.ta.desc": "Supported students with preprocessing, feature engineering, overfitting, and recurring model debugging challenges.",
    "experience.ta.b1": "Identified common failure patterns in student projects and improved support efficiency by reducing repeated debugging requests.",
    "education.eyebrow": "Academic background",
    "education.title": "Education",
    "education.mines.date": "Aug 2024 - May 2026",
    "education.mines.degree": "Master of Science in Data Science",
    "education.mines.school": "Colorado School of Mines · Golden, Colorado · GPA 4.0",
    "education.courseMl": "Machine Learning",
    "education.courseStats": "Statistics",
    "education.courseViz": "Data Visualization",
    "education.shou.date": "Aug 2011 - Jun 2015",
    "education.shou.degree": "Bachelor of Management in Management Information Systems",
    "education.shou.school": "Shanghai Ocean University · Shanghai, China",
    "beyond.eyebrow": "Beyond data",
    "beyond.title": "Outside Work",
    "beyond.desc": "Outside of analytics, I enjoy dancing, hiking, and spending time with my dog. These moments keep me energized, curious, and grounded outside of school and work.",
    "beyond.dancing": "Dancing",
    "beyond.watchClip": "Watch clip",
    "beyond.hiking": "Hiking",
    "beyond.dog": "With my dog",
    "tableau.eyebrow": "Dashboard",
    "tableau.title": "Tableau Analytics",
    "tableau.reportTitle": "Pizza Sales Report",
    "tableau.desc": "Interactive dashboard analyzing pizza sales performance across time, categories, and sizes. Users can filter by pizza category and order date to explore revenue, order volume, average order value, busiest hours, weekly trends, and product mix.",
    "tableau.open": "Open Tableau",
    "contact.eyebrow": "Contact",
    "contact.title": "Let us talk about data work.",
    "contact.note": "Based in Longmont, Colorado and open to relocation.",
    "contact.resume": "Resume"
  },
  zh: {
    "brand.name": "杨映霜",
    "nav.about": "关于我",
    "nav.projects": "项目",
    "nav.experience": "经历",
    "nav.education": "教育",
    "nav.tableau": "Tableau",
    "nav.contact": "联系",
    "hero.eyebrow": "数据分析 · 机器学习 · KPI 报告",
    "hero.title": "杨映霜",
    "hero.slogan": "把复杂数据转化为清晰决策。",
    "hero.lede": "我是一名拥有数据科学硕士背景的数据分析师，擅长将运营数据和用户行为数据转化为可执行洞察、仪表盘、实验分析和机器学习流程，支持实际业务决策。",
    "hero.viewProjects": "查看项目",
    "hero.downloadResume": "下载简历",
    "hero.metricRecords": "服务记录分析经验",
    "hero.metricGpa": "数据科学硕士 GPA",
    "hero.metricFocus": "方向",
    "hero.metricFocusText": "运营分析、A/B 测试、仪表盘、机器学习建模",
    "about.eyebrow": "关于我",
    "about.title": "个人介绍",
    "about.p1": "我喜欢学习先进的新技术，并把它们融入自己的工作流程。最近我正在学习 AI agents，探索如何用 agent-based workflows 帮助自己更高效地分析、自动化和完成工作。",
    "about.p2": "我喜欢的工作是从数据出发，但不只停留在表面的指标变化。我喜欢继续追问用户行为、运营变化和业务结果背后的深层原因。",
    "about.p3": "我也喜欢和不同团队合作，把分析结果转化为更好的产品使用体验、更高的工作效率和更低的运营成本。",
    "about.factLooking": "目标岗位",
    "about.factLookingText": "美国 Data Analyst / Data Scientist 相关岗位",
    "about.factStrengths": "优势",
    "about.factStrengthsText": "SQL、Python、仪表盘、实验分析",
    "about.factLocation": "地点",
    "about.factLocationText": "Longmont, Colorado · 接受搬迁",
    "projects.eyebrow": "精选作品",
    "projects.title": "数据项目",
    "projects.details": "详情",
    "projects.report": "报告",
    "projects.bike.badge": "预测建模",
    "projects.bike.title": "共享单车需求预测",
    "projects.bike.desc": "基于时间、天气和季节模式预测单车租赁数量，帮助运营方提前判断需求位置，更合理投放车辆，从而提升可用性和车辆利用率。",
    "projects.bike.h1": "从租赁和天气数据中构建小时、星期、月份、高峰时段、滚动统计和温度相关特征。",
    "projects.bike.h2": "比较 Random Forest、SVR 和 Ridge Regression，并使用交叉验证调优 Random Forest。",
    "projects.bike.fig1": "预测值与实际值",
    "projects.bike.fig2": "特征重要性",
    "projects.customer.badge": "客户忠诚度",
    "projects.customer.title": "客户忠诚度预测",
    "projects.customer.desc": "为 Elo 商户推荐场景预测客户忠诚度，帮助识别更适合投放 promotion 的高忠诚度客户，提高精准营销和资源分配效率。",
    "projects.customer.tagRows": "3000 万行数据",
    "projects.customer.tagRmse": "最终 RMSE 3.734",
    "projects.customer.h1": "分块处理大型交易表，并从历史交易和新商户交易中构建卡片级聚合特征。",
    "projects.customer.h2": "先用小样本进行模型选择 benchmark，再在最终流程中报告 RMSE 3.734。",
    "projects.customer.fig": "模型选择阶段的小样本 benchmark",
    "projects.auction.badge": "漏斗分析",
    "projects.auction.title": "拍卖漏斗转化分析",
    "projects.auction.desc": "分析拍卖平台漏斗，找出用户流失率最高的环节，帮助团队优化激活路径，提高出价率和拍卖转化率。",
    "experience.eyebrow": "工作经历",
    "experience.title": "经历",
    "experience.csmSocial.org": "Colorado School of Mines",
    "experience.csmSocial.date": "2025 年 7 月 - 2026 年 5 月 15 日",
    "experience.csmSocial.role": "Social Media Assistant, LinkedIn Analytics & Content Strategy",
    "experience.csmSocial.desc": "分析 LinkedIn 互动和内容表现，为受众增长和内容策略提供数据支持。",
    "experience.csmSocial.b1": "搭建 SQL 分析流程，分析 impressions、CTR、高表现内容主题和最佳发布时间。",
    "experience.csmSocial.b2": "开发 Power BI 仪表盘追踪 reach 和 search appearances，支持内容优化。",
    "experience.csmSocial.b3": "帮助 followers 从 0 增长到 275+，impressions 从 200 提升到 600。",
    "experience.auxxit.date": "2025 年 5 月 - 2025 年 7 月",
    "experience.auxxit.role": "Data Analyst Intern",
    "experience.auxxit.desc": "为美国远程创业公司分析拍卖漏斗行为、转化驱动因素和市场表现。",
    "experience.auxxit.b1": "构建 logistic regression 转化模型，量化各阶段流失驱动因素，并帮助整体拍卖转化率从 18% 提升到 21%。",
    "experience.auxxit.b2": "基于 2 万+ 用户事件和每周 3000+ 交易构建 SQL 分析流程，评估不同用户分群的行为驱动因素。",
    "experience.auxxit.b3": "开发实时 Power BI 仪表盘追踪 GMV、活跃拍卖和出价参与率，将周报时间从 4 小时缩短到 1 小时。",
    "experience.gov.org": "行政审批局",
    "experience.gov.date": "2015 年 11 月 - 2024 年 6 月",
    "experience.gov.role": "数据分析师",
    "experience.gov.desc": "支持中国成都政府部门的运营分析、市民服务报告、KPI 监控和服务优化。",
    "experience.gov.b1": "使用 Python 和 PySpark 处理 100 万+ 多渠道市民服务记录，并应用 K-means 插补和 Isolation Forest 异常检测。",
    "experience.gov.b2": "使用 MySQL 分析每月 30 万+ 服务记录，通过查询优化将数据刷新时间减少 90%。",
    "experience.gov.b3": "搭建 Tableau KPI 仪表盘，监控处理时长、在线完成率和部门表现，为 44 个政府部门将报告效率提升 70%。",
    "experience.gov.b4": "设计 FAQ 发布时间 A/B 测试，使 WeChat engagement 提升 150%，并降低咨询压力。",
    "experience.ta.org": "Colorado School of Mines",
    "experience.ta.date": "2025 年 8 月 - 2025 年 12 月",
    "experience.ta.role": "Teaching Assistant, Introduction to Machine Learning",
    "experience.ta.desc": "支持学生解决预处理、特征工程、过拟合和模型调试中的常见问题。",
    "experience.ta.b1": "识别学生项目中的常见失败模式，减少重复调试请求并提升支持效率。",
    "education.eyebrow": "教育背景",
    "education.title": "教育",
    "education.mines.date": "2024 年 8 月 - 2026 年 5 月",
    "education.mines.degree": "数据科学硕士",
    "education.mines.school": "Colorado School of Mines · Golden, Colorado · GPA 4.0",
    "education.courseMl": "机器学习",
    "education.courseStats": "统计学",
    "education.courseViz": "数据可视化",
    "education.shou.date": "2011 年 8 月 - 2015 年 6 月",
    "education.shou.degree": "管理学学士，管理信息系统",
    "education.shou.school": "上海海洋大学 · 上海，中国",
    "beyond.eyebrow": "数据之外",
    "beyond.title": "生活中的我",
    "beyond.desc": "工作和学习之外，我喜欢跳舞、徒步，也喜欢和我的狗狗一起玩。这些时刻让我保持能量、好奇心和稳定感。",
    "beyond.dancing": "跳舞",
    "beyond.watchClip": "观看片段",
    "beyond.hiking": "徒步",
    "beyond.dog": "和我的狗狗",
    "tableau.eyebrow": "仪表盘",
    "tableau.title": "Tableau 分析",
    "tableau.reportTitle": "Pizza Sales Report",
    "tableau.desc": "这个交互式仪表盘分析披萨销售在时间、品类和尺寸上的表现。用户可以按披萨品类和订单日期筛选，探索收入、订单量、平均订单金额、高峰时段、周趋势和产品结构。",
    "tableau.open": "打开 Tableau",
    "contact.eyebrow": "联系",
    "contact.title": "欢迎和我聊聊数据相关机会。",
    "contact.note": "目前在 Longmont, Colorado，也接受搬迁。",
    "contact.resume": "简历"
  }
};

const languageToggle = document.querySelector("[data-language-toggle]");
const translatableElements = document.querySelectorAll("[data-i18n]");
const modalBackdrop = document.querySelector("[data-modal-backdrop]");
const modalClose = document.querySelector("[data-modal-close]");
const modalBadge = document.querySelector("[data-modal-badge]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalTags = document.querySelector("[data-modal-tags]");
const modalHighlights = document.querySelector("[data-modal-highlights]");
const modalScreenshots = document.querySelector("[data-modal-screenshots]");
const projectModalButtons = document.querySelectorAll("[data-project-modal]");
let activeProject = null;

const projectDetails = {
  bike: {
    tags: ["Python", "Random Forest", "Feature Engineering", "RMSLE 0.4144"],
    screenshots: [
      {
        src: "bike-predictions.jpg",
        alt: "Bike sharing predicted versus actual rental count chart",
        captionKey: "projects.bike.fig1"
      },
      {
        src: "bike-feature-importance.jpg",
        alt: "Bike sharing feature importance chart",
        captionKey: "projects.bike.fig2"
      }
    ],
    copy: {
      en: {
        badge: "Forecasting",
        title: "Bike Sharing Demand Prediction",
        description: "Predicted bike rental volume from time, weather, and seasonal patterns so operators can place bikes where demand is expected, improving availability and utilization.",
        highlights: [
          "Used time, weather, temperature, humidity, and windspeed features to predict rental demand more accurately.",
          "Compared Random Forest, SVR, and Ridge Regression, then tuned Random Forest with cross-validation."
        ]
      },
      zh: {
        badge: "预测建模",
        title: "共享单车需求预测",
        description: "基于时间、天气和季节模式预测单车租赁数量，帮助运营方提前判断需求位置，更合理投放车辆，从而提升可用性和车辆利用率。",
        highlights: [
          "使用时间、天气、温度、湿度和风速等特征提升租赁需求预测准确性。",
          "比较 Random Forest、SVR 和 Ridge Regression，并使用交叉验证调优 Random Forest。"
        ]
      }
    }
  },
  customer: {
    tags: ["XGBoost", "Chunk Processing", "Feature Aggregation", "30M rows", "Final RMSE 3.734"],
    tagZh: ["XGBoost", "分块处理", "特征聚合", "3000 万行数据", "最终 RMSE 3.734"],
    screenshots: [
      {
        src: "customer-model-performance.jpg",
        alt: "Customer loyalty model performance summary table",
        captionKey: "projects.customer.fig"
      }
    ],
    copy: {
      en: {
        badge: "Loyalty",
        title: "Customer Loyalty Prediction",
        description: "Predicted customer loyalty for Elo merchant recommendations so higher-loyalty customers can be prioritized for targeted promotions and more precise campaign allocation.",
        highlights: [
          "Created card-level loyalty features from historical transactions, new merchant transactions, and merchant metadata.",
          "Benchmarked models on a smaller sample for selection, then reported final RMSE 3.734 for the selected full workflow."
        ]
      },
      zh: {
        badge: "客户忠诚度",
        title: "客户忠诚度预测",
        description: "为 Elo 商户推荐场景预测客户忠诚度，帮助识别更适合投放 promotion 的高忠诚度客户，提高精准营销和资源分配效率。",
        highlights: [
          "整合历史交易、新商户交易、商户元数据和卡片级聚合特征，刻画客户忠诚度。",
          "先用小样本进行模型选择 benchmark，再在最终流程中报告 RMSE 3.734。"
        ]
      }
    }
  },
  auction: {
    tags: ["Python", "SQL", "Funnel Analysis", "Cohort Analysis", "22K users"],
    tagZh: ["Python", "SQL", "漏斗分析", "同期群分析", "2.2 万用户"],
    screenshots: [],
    copy: {
      en: {
        badge: "Funnel",
        title: "Auction Funnel Conversion Analysis",
        description: "Analyzed an auction marketplace funnel to find where users drop off most, helping teams improve activation and increase bid and auction conversion rates.",
        highlights: [
          "Mapped the user journey from signup to first bid and auction win to identify the highest-friction funnel stages.",
          "Analyzed 22,000 users and 15,201 bid records, finding 33.2% signup-to-first-bid conversion and 12.1% signup-to-auction-win conversion."
        ]
      },
      zh: {
        badge: "漏斗分析",
        title: "拍卖漏斗转化分析",
        description: "分析拍卖平台漏斗，找出用户流失率最高的环节，帮助团队优化激活路径，提高出价率和拍卖转化率。",
        highlights: [
          "梳理用户从注册到首次出价、再到赢得拍卖的路径，定位摩擦最高的漏斗环节。",
          "分析 2.2 万用户和 15,201 条出价记录，发现注册到首次出价转化率为 33.2%，注册到赢得拍卖转化率为 12.1%。"
        ]
      }
    }
  }
};

function currentLanguage() {
  return document.documentElement.lang === "zh-Hans" ? "zh" : "en";
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function renderProjectModal(projectKey) {
  const language = currentLanguage();
  const dictionary = translations[language];
  const project = projectDetails[projectKey];
  const copy = project.copy[language];

  activeProject = projectKey;
  modalBadge.textContent = copy.badge;
  modalTitle.textContent = copy.title;
  modalDescription.textContent = copy.description;

  clearElement(modalTags);
  const tags = language === "zh" && project.tagZh ? project.tagZh : project.tags;
  tags.forEach((tag) => {
    const item = document.createElement("li");
    item.textContent = tag;
    modalTags.appendChild(item);
  });

  clearElement(modalHighlights);
  copy.highlights.forEach((highlight) => {
    const item = document.createElement("li");
    item.textContent = highlight;
    modalHighlights.appendChild(item);
  });

  clearElement(modalScreenshots);
  modalScreenshots.hidden = project.screenshots.length === 0;
  modalScreenshots.classList.toggle("single", project.screenshots.length === 1);
  project.screenshots.forEach((screenshot) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");
    image.src = screenshot.src;
    image.alt = screenshot.alt;
    caption.textContent = dictionary[screenshot.captionKey];
    figure.append(image, caption);
    modalScreenshots.appendChild(figure);
  });
}

function openProjectModal(projectKey) {
  renderProjectModal(projectKey);
  modalBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeProjectModal() {
  modalBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  activeProject = null;
}

function applyLanguage(language) {
  const dictionary = translations[language];

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  document.title = language === "zh"
    ? "Yingshuang Yang | 数据分析作品集"
    : "Yingshuang Yang | Data Analyst Portfolio";

  if (languageToggle) {
    languageToggle.textContent = language === "zh" ? "EN" : "中文";
    languageToggle.setAttribute(
      "aria-label",
      language === "zh" ? "Switch to English" : "Switch to Chinese"
    );
  }

  localStorage.setItem("preferredLanguage", language);

  if (activeProject) {
    renderProjectModal(activeProject);
  }
}

const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
applyLanguage(savedLanguage);

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "zh-Hans" ? "en" : "zh";
    applyLanguage(nextLanguage);
  });
}

projectModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openProjectModal(button.dataset.projectModal);
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeProjectModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) {
      closeProjectModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalBackdrop && !modalBackdrop.hidden) {
    closeProjectModal();
  }
});
