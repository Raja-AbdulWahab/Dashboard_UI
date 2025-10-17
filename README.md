🧭 Dashboard UI

A modern, responsive, and data-driven Dashboard Interface built with Next.js, React, and Elastic UI (EUI) components.
This dashboard provides a clean analytical overview for teams, agents, KPIs, and performance summaries — designed to adapt beautifully across devices.

🚀 Live Preview

👉 Live Demo (https://bespoke-blini-5c4989.netlify.app/dashboard)

🖼️ Project Screenshots
Dashboard Overview	<img width="1183" height="735" alt="dash" src="https://github.com/user-attachments/assets/b2b2a122-a42b-4580-8112-46c4d6a0b181" />
KPI & Analytics

	

💡 Tip:

Save your screenshots in the public/images folder (or /assets/images)

Update the image paths above to match your folder structure.

⚙️ Features

✅ Responsive design (desktop → tablet → mobile)
✅ Dynamic filter system (Team, Agent, Year)
✅ KPI cards with circular percentage indicators
✅ Top performers and area-wise performance sections
✅ Scrollable summary and agent tables
✅ Interactive call trends chart visualization
✅ Clean UI powered by Elastic UI (EUI) components
✅ Adaptive layouts for iPad, Surface Duo, and other viewports

🧩 Tech Stack
Technology	Purpose
Next.js (App Router)	Frontend Framework
React 18	UI rendering and component management
Elastic UI (EUI)	UI component library for consistent design
CSS Grid / Flexbox	Responsive layout system
Recharts / Chart.js	Call trends chart
TypeScript (optional)	Type safety and maintainability
🧱 Project Structure
src/
│
├── app/
│   └── dashboard/
│       └── page.tsx
│
├── components/
│   ├── FilterRow.tsx
│   ├── TopTeamsRow.tsx
│   ├── TopKpiStack.tsx
│   ├── PerformersBox.tsx
│   ├── AreasCard.tsx
│   ├── SummaryTable.tsx
│   ├── CallTrendsChart.tsx
│   └── AgentsTable.tsx
│
└── styles/
    └── dashboard.css

🧰 Setup Instructions
1️⃣ Clone the Repository
git clone https:/Raja-AbdulWahab/github.com//dashboard-ui.git
cd dashboard-ui

2️⃣ Install Dependencies
npm install
# or
yarn install

3️⃣ Run the Project
npm run dev
# then open http://localhost:3000

4️⃣ Build for Production
npm run build
npm start

📱 Responsive Behavior
Screen Size	Layout Behavior
💻 Desktop (≥1200px)	3-column grid: KPI – Performance – Summary
📊 Medium (≤1200px)	Summary table drops below before column hiding
📱 Mobile (≤768px)	Stacked full-width components (KPI, Performers, Areas, Tables)
🧠 Future Enhancements

✅ Dark mode toggle

✅ Real-time data integration via API

✅ Improved chart interactivity

✅ Export reports (CSV / PDF)

✅ Role-based analytics (Admin, Manager, Agent views)

🧑‍💻 Author

Abdul Wahab
💼 Full Stack / MERN Developer
🌐 Portfolio Website (https://raja-abdulwahab.github.io/My_Portfolio/)
