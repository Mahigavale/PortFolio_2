# Portfolio: Java Full Stack Developer & Technical Enablement Engineer

A high-performance, responsive developer portfolio built with **React 18**, **Tailwind CSS**, and **Vite**, engineered specifically for the hybrid profile of a **Java Full Stack Developer & Technical Enablement Engineer**.

Designed for seamless hosting on **GitHub Pages** with automated GitHub Actions CI/CD.

---

## 🌟 Key Features

- ⚡ **Dual Persona Architecture**: Switch or view both perspectives:
  - **Java Full Stack Developer**: Spring Boot 3, Microservices, Java 21 Virtual Threads, Kafka, PostgreSQL, React 18 SPA.
  - **Technical Enablement Engineer**: Developer Experience (DevEx), Golden Paths, Custom SDKs, Archetypes, Architecture Governance, and Workshops.
- 💻 **Interactive CLI Terminal Simulator**: Clickable command runners (`spring-boot:run`, `enablement-cli`, `curl /actuator/health`) simulating real-world runtime metrics.
- 🔬 **Interactive Architecture Lab**: End-to-end visual distributed topology (Client &rarr; Gateway &rarr; Microservice &rarr; Kafka &rarr; DB &rarr; Observability) with tier specifications and sample code.
- 🛠️ **Enablement Deliverables Showcase**: Deep-dive tabs for DevEx, Architecture Advisory, Education, and Developer Portals with before/after velocity metrics.
- 🎯 **Filterable Project & Skills Matrix**: Search and filter by Full Stack Systems, Enablement Tooling, and Tech categories.
- 📱 **Mobile & Dark-Mode Optimized**: Glassmorphism aesthetic, accessible contrast, responsive layouts, and smooth navigation.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ (tested with Node 20 / 22)
- npm or pnpm / yarn

### Run locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build production bundle
```bash
npm run build
```
The optimized static build is emitted into `./dist`.

---

## ⚙️ How to Personalize Your Information

All content is cleanly separated from UI logic in **`src/data/portfolioData.js`**:

1. **Personal Information**:
   - Update `personalInfo.name`, `title`, `email`, `location`, `github`, and `linkedin`.
2. **Skills & Repertoire**:
   - Edit `skillsData.backend`, `skillsData.frontend`, `skillsData.enablement`, and `skillsData.devopsCloud`.
3. **Projects**:
   - Update `projects` with your real-world repositories, descriptions, and metrics.
4. **Experience & Testimonials**:
   - Update `experience` with your career history and `testimonialsOrMetrics`.

---

## 🌐 Hosting on GitHub Pages (Step-by-Step)

An automated deployment pipeline is already included in `.github/workflows/deploy.yml`.

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g. `portfolio` or `<your-username>.github.io`).
3. Keep it **Public** (or Private if you have GitHub Pro for Pages).

### Step 2: Push your code to GitHub
Run the following commands in your project terminal:

```bash
git add .
git commit -m "Initial commit: Java Full Stack & Enablement Engineer Portfolio"
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Actions for Pages
1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions** (instead of "Deploy from a branch").
4. The workflow will automatically trigger on your push to `main` and deploy your portfolio!
5. Your live URL will be:
   - If repo is named `<username>.github.io`: `https://<username>.github.io`
   - If repo is named `portfolio`: `https://<username>.github.io/portfolio/`

*(Note: The `vite.config.js` uses `base: './'`, which automatically handles relative assets on both root domains and subpath repository URLs without broken paths).*

---

## 📂 Project Structure

```
d:\Port_Folio_2\
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   └── vite.svg                # Favicon
├── src/
│   ├── components/
│   │   ├── ArchitectureLab.jsx # Interactive 6-tier system topology
│   │   ├── BrandIcons.jsx      # Clean SVG brand icons (GitHub, LinkedIn)
│   │   ├── ContactSection.jsx  # Interactive inquiry form & direct channels
│   │   ├── EnablementShowcase.jsx # Deep-dive into DevEx & Golden Paths
│   │   ├── ExperienceSection.jsx # Career history & leadership quotes
│   │   ├── Footer.jsx          # Footer & scroll-to-top
│   │   ├── Hero.jsx            # Dual-persona hero & interactive terminal
│   │   ├── Navbar.jsx          # Sticky responsive navigation
│   │   ├── ProjectsSection.jsx # Categorized showcase
│   │   └── SkillsSection.jsx   # Filterable & searchable tech competencies
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all content
│   ├── App.jsx                 # Main layout coordinator
│   ├── index.css               # Tailwind CSS & custom design system
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML5 shell & fonts
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Tailwind theme configuration
└── vite.config.js              # Vite bundler & relative base config
```

---

## 📄 License
MIT License. Feel free to customize and use this portfolio for your personal career showcase!
