# Mahesh Ashok Gavale — Developer Portfolio

A modern, high-performance developer portfolio built with **React 18**, **Tailwind CSS**, and **Vite**, engineered specifically for **Mahesh Ashok Gavale** — **Java Full Stack Developer & Technical Enablement Engineer**.

- **Email**: [maheshgavale07@gmail.com](mailto:maheshgavale07@gmail.com)
- **Mobile**: [+91 7774834341](tel:+917774834341)
- **LinkedIn**: [contactmaheshgavale](https://in.linkedin.com/in/contactmaheshgavale)
- **GitHub**: [Mahigavale](https://github.com/Mahigavale)
- **Backend Guide**: [BACKEND_GUIDE.md](BACKEND_GUIDE.md)

Designed for easy hosting on **GitHub Pages** (frontend) and ready to connect to a custom **Spring Boot Backend**!

---

## 🌟 Key Features

- ⚡ **Dual Persona Architecture**: Toggle or view both perspectives:
  - **Java Full Stack Developer**: Spring Boot 3, Microservices, Java 17/21 Virtual Threads, Kafka, PostgreSQL/MySQL, React 18 SPA.
  - **Technical Enablement Engineer**: Developer Experience (DevEx), Golden Paths, Custom SDKs, Archetypes, Architecture Governance, and Squad Enablement.
- 💻 **Interactive CLI Terminal Simulator**: Clickable command runners (`spring-boot:run`, `enablement-cli`, `curl /health`) simulating real-world runtime metrics.
- 🔬 **Interactive Architecture Lab**: End-to-end visual distributed topology (Client &rarr; Ingress Gateway &rarr; Microservice &rarr; Kafka Event Stream &rarr; Database &rarr; Observability) with tier specifications and sample code.
- 🛠️ **Enablement Deliverables Showcase**: Deep-dive tabs for DevEx, Architecture Advisory, Education, and Developer Portals with before/after velocity metrics.
- 🎯 **Career Timeline**:
  - **Unique System Skills** (Jun 2025 - Dec 2026): *Developer & Technical Enablement Engineer*
  - **Aspire Technology Solutions** (Mar 2023 - May 2025): *Java Full Stack Developer*
  - **LTIMindtree** (Jun 2022 - Feb 2023): *Junior Java Developer*
- 🔌 **Backend-Ready Contact Form**:
  - Ready to connect directly to your custom Spring Boot REST API (`POST /api/contact`) via `VITE_API_URL`.
  - Built-in fallback to email client so messages are never lost even if the backend is temporarily offline.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ (Node 20 or 22 recommended)
- npm or pnpm

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

## 🔌 Connecting Your Custom Backend

Mahesh is building a dedicated backend service in Spring Boot. See [BACKEND_GUIDE.md](BACKEND_GUIDE.md) for full REST contracts, DTOs, and Spring Boot controller code.

To connect your frontend to your local or hosted backend:
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Set your backend URL:
   ```env
   VITE_API_URL=http://localhost:8080
   ```
3. When you submit the contact form, it will automatically make a `POST` request to `${VITE_API_URL}/api/contact`.

---

## 🌐 Hosting on GitHub Pages (Step-by-Step)

An automated deployment pipeline is already included in `.github/workflows/deploy.yml`.

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Name your repository `portfolio` (or `Mahigavale.github.io`).
3. Keep it **Public**.

### Step 2: Push your code to GitHub
Run the following commands in your project terminal:

```bash
git add .
git commit -m "Initial commit: Mahesh Ashok Gavale Portfolio"
git remote add origin https://github.com/Mahigavale/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Actions for Pages
1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. The workflow will automatically trigger on push to `main` and deploy!
5. Your live URL will be:
   - `https://Mahigavale.github.io/portfolio/` (or `https://Mahigavale.github.io` if repo name is `Mahigavale.github.io`).

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
│   │   ├── ContactSection.jsx  # Backend-ready contact form & channels
│   │   ├── EnablementShowcase.jsx # Deep-dive into DevEx & Golden Paths
│   │   ├── ExperienceSection.jsx # Career history (Unique System Skills, Aspire, LTIMindtree)
│   │   ├── Footer.jsx          # Footer & scroll-to-top
│   │   ├── Hero.jsx            # Dual-persona hero & interactive terminal
│   │   ├── Navbar.jsx          # Sticky responsive navigation
│   │   ├── ProjectsSection.jsx # Categorized showcase
│   │   └── SkillsSection.jsx   # Filterable & searchable tech competencies
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all portfolio data
│   ├── services/
│   │   └── contactService.js   # Dual backend REST API / mailto service
│   ├── App.jsx                 # Main layout coordinator
│   ├── index.css               # Tailwind CSS & custom design system
│   └── main.jsx                # React DOM entry point
├── .env.example                # Example environment configuration for backend
├── BACKEND_GUIDE.md            # Spring Boot REST API contract & code templates
├── index.html                  # HTML5 shell & fonts
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Tailwind theme configuration
└── vite.config.js              # Vite bundler & relative base config
```

---

## 📄 License
MIT License.
