# AETHER | Futuristic Creative Agency

![Aether Banner](https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)

> **"We Craft Digital Dreams."**
> Aether is a visionary creative agency bridging the gap between art and technology.

---

## 🚀 Project Overview

**Aether** is a high-performance, visually immersive landing page built with the latest web technologies. It is designed to showcase the capabilities of a modern creative agency through a "Deep Space" aesthetic, advanced animations, and a buttery-smooth user experience.

This project follows the **Feature-Sliced Design (FSD)** architectural pattern, ensuring a scalable, modular, and maintainable codebase.

### ✨ Key Features

- **🌌 Deep Space Theme**: A dark mode aesthetic utilizing high-contrast neon accents (Cyan, Purple, Pink) to create a futuristic atmosphere.
- **🌊 Fluid Motion**: Integrated **Lenis** scroll for desktop-grade smooth scrolling mechanics.
- **✨ Micro-Interactions**: Features magnetic buttons, a custom trailing cursor, and dynamic hover glow effects that react to user input.
- **🎭 Advanced Orchestration**: Complex staggered reveals, parallax backgrounds, and marquee sections powered by **Framer Motion**.
- **📱 Responsive by Design**: A mobile-first approach ensuring the immersive experience translates perfectly across all viewport sizes.
- **⚡ Bleeding Edge Stack**: Leverages **Next.js 15+** (App Router) and **React 19** for optimal performance and developer experience.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Scrolling**: [Lenis Studio](https://lenis.studio/)
- **State/Data**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Architecture (Feature-Sliced Design)

The project is structured according to the **FSD** methodology to promote low coupling and high cohesion:

```bash
src/
├── app/             # Application logic, global styles, and route definitions (Next.js App Router)
├── app_layer/       # Application-wide providers (QueryClient, Theme, etc.)
├── widgets/         # Independent blocks combining features and entities (Header, Footer, Hero, Showcase)
├── features/        # User interactions with business value (ContactForm, Newsletter)
├── entities/        # Business entities (Service, Project, Testimonial)
└── shared/          # Reusable infrastructure (UI kit, Hooks, API clients, Utils)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v20 or higher)
- **pnpm** (recommended) or npm/yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/hanjiwon1108/aether.git
    cd aether
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    ```

3.  **Setup Environment Variables** (if applicable)
    Create a `.env.local` file based on `.env.example`.

4.  **Start Development Server**
    ```bash
    pnpm dev
    ```

5.  **Build for Production**
    ```bash
    pnpm build
    pnpm start
    ```

---

## 🎨 Design System & Visual Identity

The Aether identity is defined by its contrast between the void and vibrant digital energy.

- **Primary**: Oxygen Cyan (`#00f0ff`) - Action items and highlights.
- **Secondary**: Pulse Purple (`#7000ff`) - Depth and secondary accents.
- **Background**: Deep Space (`#030303`) - The canvas of the experience.
- **Typography**: 
  - **Display**: High-impact bold sans-serif for headings.
  - **Body**: Inter for maximum legibility.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

© 2024 [hanjiwon1108](https://github.com/hanjiwon1108). All rights reserved.
