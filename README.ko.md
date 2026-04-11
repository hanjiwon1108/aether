# AETHER | 미래지향적 크리에이티브 에이전시

![Aether Banner](https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)

> **"우리는 디지털의 꿈을 조각합니다."**
> Aether는 예술과 기술의 경계를 허무는 비전 있는 크리에이티브 에이전시입니다.

---

## 🚀 프로젝트 개요

**Aether**는 최신 웹 기술로 구축된 고성능, 시각적 몰입형 랜딩 페이지입니다. "Deep Space(심우주)" 에스테틱, 고급 애니메이션, 그리고 부드러운 사용자 경험을 통해 현대적인 크리에이티브 에이전시의 역량을 보여주도록 설계되었습니다.

이 프로젝트는 **Feature-Sliced Design (FSD)** 아키텍처 패턴을 따라 확장 가능하고 모듈화된, 유지보수가 용이한 코드베이스를 유지합니다.

### ✨ 주요 기능

- **🌌 Deep Space 테마**: 고대비 네온 액센트(Cyan, Purple, Pink)를 활용한 다크 모드 에스테틱으로 미래지향적인 분위기를 조성합니다.
- **🌊 유연한 모션**: 데스크톱급의 부드러운 스크롤 메커니즘을 위해 **Lenis** 스크롤을 통합했습니다.
- **✨ 마이크로 인터랙션**: 마그네틱 버튼, 커스텀 트레일링 커서, 사용자 입력에 반응하는 동적 호버 글로우(Glow) 효과를 제공합니다.
- **🎭 고급 애니메이션 오케스트레이션**: **Framer Motion**을 사용한 복잡한 순차적 등장(Staggered reveal), 패럴랙스 배경, 마키(Marquee) 섹션을 구현했습니다.
- **📱 반응형 디자인**: 모바일 퍼스트 접근 방식으로 모든 기기에서 몰입형 경험이 완벽하게 전달됩니다.
- **⚡ 최첨단 기술 스택**: 최적의 성능과 개발자 경험을 위해 **Next.js 15+** (App Router) 및 **React 19**를 활용합니다.

---

## 🛠️ 기술 스택

- **프레임워크**: [Next.js 15+](https://nextjs.org/) (App Router)
- **언어**: [TypeScript](https://www.typescriptlang.org/)
- **스타일링**: [Tailwind CSS v4](https://tailwindcss.com/)
- **애니메이션**: [Framer Motion](https://www.framer.com/motion/)
- **스크롤**: [Lenis Studio](https://lenis.studio/)
- **상태 관리**: [TanStack Query v5](https://tanstack.com/query/latest)
- **아이콘**: [Lucide React](https://lucide.dev/)

---

## 📂 아키텍처 (Feature-Sliced Design)

프로젝트는 낮은 결합도와 높은 응집도를 위해 **FSD** 방법론에 따라 구조화되었습니다:

```bash
src/
├── app/             # 애플리케이션 로직, 글로벌 스타일 및 라우트 정의 (Next.js App Router)
├── app_layer/       # 애플리케이션 전역 프로바이더 (QueryClient, Theme 등)
├── widgets/         # 기능과 엔티티를 조합한 독립적인 블록 (Header, Footer, Hero, Showcase)
├── features/        # 비즈니스 가치를 지닌 사용자 상호작용 (ContactForm, Newsletter)
├── entities/        # 비즈니스 엔티티 (Service, Project, Testimonial)
└── shared/          # 재사용 가능한 인프라 (UI 키트, Hook, API 클라이언트, 유틸리티)
```

---

## 🚀 시작하기

### 사전 준비 사항

- **Node.js** (v20 이상)
- **pnpm** (권장) 또는 npm/yarn

### 설치 및 실행

1.  **리포지토리 클론**
    ```bash
    git clone https://github.com/hanjiwon1108/aether.git
    cd aether
    ```

2.  **의존성 설치**
    ```bash
    pnpm install
    ```

3.  **환경 변수 설정** (해당되는 경우)
    `.env.local` 파일을 생성하고 필요한 값을 입력합니다.

4.  **개발 서버 실행**
    ```bash
    pnpm dev
    ```

5.  **프로덕션 빌드**
    ```bash
    pnpm build
    pnpm start
    ```

---

## 🎨 디자인 시스템 & 비주얼 아이덴티티

Aether의 정체성은 공허함(Void)과 활기찬 디지털 에너지 사이의 대비로 정의됩니다.

- **Primary**: Oxygen Cyan (`#00f0ff`) - 주요 액션 아이템 및 하이라이트.
- **Secondary**: Pulse Purple (`#7000ff`) - 깊이감 및 보조 액센트.
- **Background**: Deep Space (`#030303`) - 경험의 캔버스.
- **Typography**: 
  - **Display**: 헤드라인을 위한 임팩트 있는 볼드 산세리프.
  - **Body**: 가독성을 극대화한 Inter 폰트.

---

## 📜 라이선스

이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하십시오.

---

© 2024 [hanjiwon1108](https://github.com/hanjiwon1108). All rights reserved.