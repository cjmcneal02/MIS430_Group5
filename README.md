# FairPlay Portal - Algorithmic Fairness & Transparency Platform

An academic prototype demonstrating transparency in AI-driven automated decisions for the gaming industry.

**Course:** MIS 430 - Culverhouse College of Business (Spring 2026)

---

## Overview

FairPlay Portal is a web-based platform that makes algorithmic decisions transparent and fair for players and game developers. It demonstrates how gaming platforms can provide visibility into automated decisions while maintaining the proprietary nature of their algorithms.

The platform surfaces four types of algorithmic decisions:
1. **Storefront Promotion Logic** - Game visibility and ranking decisions
2. **Competitive Matchmaking** - Player pairing in ranked sessions
3. **Ban & Restriction Decisions** - Automated account restrictions
4. **Review Manipulation Moderation** - AI-flagged review removals

---

## Features

### For Players
- View all algorithmic decisions affecting your account
- Understand decision outcomes with clear (but legally compliant) explanations
- Submit appeals for unfair decisions
- Track appeal status with full timeline visibility
- See human reviewer assignments

### For Developers
- View storefront promotion decisions for published games
- Understand visibility and placement decisions
- Access game statistics and performance metrics
- Submit appeals for promotion decisions

### Appeal System
- Human-reviewed appeals (no automated responses)
- Full timeline tracking from submission to resolution
- Reviewer assignment transparency
- 5-7 business day resolution commitment

---

## Technology Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Google Fonts** - Rajdhani (headings) and IBM Plex Sans (body)

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd Transparency_Gaming
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173/
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

---

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── landing/         # Landing page components
│   ├── player/          # Player dashboard components
│   ├── developer/       # Developer dashboard components
│   └── appeals/         # Appeal system components
├── data/                # Synthetic data (hardcoded)
├── hooks/               # Custom React hooks
├── pages/               # Route pages
├── utils/               # Utility functions and constants
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
└── index.css            # Global styles
```

---

## Data Model

The application uses a synthetic data model with 7 entities:

1. **Platform_User** - Players and developers
2. **Game** - Published games
3. **Game_Review** - User reviews
4. **Match_Session** - Gameplay sessions
5. **Session_Participant** - Player participation in sessions
6. **Algorithm_Decision** - Automated decisions
7. **Appeal** - User-submitted appeals

---

## Synthetic Test Data

### Player Account
- **Name:** Alex Mercer
- **ID:** P001
- **Decisions:** 3 (matchmaking restriction, review approval, ban expired)
- **Appeals:** 2 (1 under review, 1 resolved/overturned)

### Developer Account
- **Name:** Nadia Volkov
- **Studio:** Vostok Indie
- **ID:** D001
- **Games:**
  - Ironveil (Strategy) - Deprioritized
  - Neon Drift (Racing) - Featured

---

## Design System

### Colors
- **Navy Deep:** `#0D1B2A` (Base background)
- **Crimson:** `#9B1C1C` (Primary accent)
- **Light Gray:** `#F4F4F5` (Surface cards)

### Decision Color Coding
- **Green Border:** Approved decisions
- **Red Border:** Restricted decisions
- **Yellow Border:** Under review decisions

### Typography
- **Headings:** Rajdhani (gaming-adjacent, professional)
- **Body:** IBM Plex Sans (readable, trustworthy)

---

## Stakeholder Constraints

### Legal Compliance
- ✅ No specific algorithmic rationale exposed
- ✅ Vague, high-level language only
- ✅ Outcomes displayed, not decision logic

### Data Science Requirements
- ✅ No feature-specific explanations
- ✅ Language implies complexity ("range of factors")
- ✅ Model versions shown without detail

### User Advocacy
- ✅ Visible appeal path on every decision
- ✅ Human reviewers clearly identified
- ✅ Traceable appeal status
- ✅ No automated appeal responses

---

## Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing | Home page with platform intro and CTAs |
| `/player` | Player Dashboard | Alex Mercer's decisions and appeals |
| `/developer` | Developer Dashboard | Nadia Volkov's games and promotion decisions |
| `/appeal/submit` | Appeal Submission | Form to submit new appeals |
| `/appeal/status` | Appeal Status | Search and track appeals by ID |
| `/appeal/:appealId` | Appeal Status | Direct link to specific appeal |

---

## Key Components

### DecisionCard
The most critical component - displays algorithmic decisions with:
- Color-coded left borders (4px)
- Vague but reassuring explanations
- Appeal buttons (when applicable)
- Decision metadata (ID, model version, date)

### AppealTimeline
Visualizes the appeal process with:
- Four-stage timeline (Submitted → Automated Review → Human Review → Final Decision)
- Reviewer assignment visibility
- Status indicators with icons
- Estimated resolution dates

---

## Academic Context

This prototype demonstrates:
1. **Transparency without disclosure** - Showing outcomes without revealing algorithms
2. **Human-in-the-loop accountability** - Every appeal reviewed by humans
3. **User trust building** - Clear communication and traceable processes
4. **Legal compliance** - Vague language that satisfies legal constraints
5. **Ethical AI deployment** - Fairness and accountability in automated systems

---

## Future Enhancements (Out of Scope for Prototype)

- User authentication and multi-user support
- Real backend with database
- Email notifications for appeal updates
- Live chat with reviewers
- Analytics dashboard for patterns in decisions
- Mobile app version
- Multi-language support
- Accessibility improvements (WCAG AA compliance)

---

## License

Academic project for educational purposes.

---

## Contact

For questions about this prototype, contact your MIS 430 instructor or teaching assistant.

---

## Acknowledgments

- Design inspiration from Steam, Xbox Live, Epic Games Store
- Built with modern React best practices
- Follows Material Design and accessibility guidelines
