# 🐎 EquiTrust

A web platform designed to reduce risk and increase transparency in horse buying and selling.

## ❗ Problem

Buying a horse is a **high-risk, high-cost transaction** often affected by:

- Lack of verified medical history
- No standardized performance data
- No credibility or reputation system for sellers
- Marketplaces acting as simple classified ads without validation

This results in **financial loss, mistrust, and legal disputes** for buyers.

## 💡 Solution

EquiTrust aims to provide:

- Verified medical and performance records
- Seller reputation and trust indicators
- Transparent horse profiles backed by data
- A marketplace focused on **trust, not listings**

## 🧩 Tech Stack

- React
- Vite
- JavaScript (ES6+)
- Feature-based modular architecture
- Git Flow + Conventional Commits

## 📂 Project Structure

src/
├── features/         # Domain-driven features
│   ├── horses/       # Horse profiles & data
│   ├── sellers/      # Seller profiles & reputation
│   ├── verification/ # Medical & performance verification
│   └── marketplace/  # Listings & discovery
├── pages/            # Application pages
├── router/           # App routing configuration
├── components/       # Shared UI components
├── services/         # API & data access
├── hooks/            # Custom hooks
├── utils/            # Helpers & formatters
├── test/             # Unit and functional tests

## ⚙️ Setup

- npm install
- npm run dev

## 🌱 Git Workflow

This project follows a simplified **Git Flow** strategy to ensure code stability and traceability.

### Branches

- `main` – production-ready code
- `develop` – integration branch
- `feature/*` – new features or improvements
- `fix/*` – bug fixes
- `hotfix/*` – critical production fixes

### Workflow

1. Create a feature branch from `develop`
2. Open a Pull Request into `develop`
3. After validation, merge into `develop`
4. Releases are merged from `develop` into `main`

## 📝 Commit Convention

This project follows the **Conventional Commits** specification to ensure a clear and consistent commit history.

Commit messages are **automatically validated** using tooling (Husky + Commitlint).  
If a commit message does not follow the convention, it will be rejected.

### Format

```txt
<type>(<scope>): <description>

