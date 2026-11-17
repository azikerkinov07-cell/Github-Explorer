# GitHub Explorer

A simple and modern GitHub profile explorer built with React, TypeScript and Vite.

GitHub Explorer allows users to search for GitHub accounts and explore their profiles, statistics and repositories through a clean dark interface.

## Features

- Search GitHub users by username.
- View GitHub profile information.
- Display repositories, followers and following.
- Explore public repositories.
- View repository programming languages.
- Display repository star counts.
- Responsive dark interface.
- Loading and error states.

## Tech Stack

- **React** — UI library.
- **TypeScript** — Static type checking.
- **Vite** — Development server and build tool.
- **CSS3** — Styling.
- **GitHub REST API** — GitHub user and repository data.
- **DM Sans** — Typography.

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:azikerkinov07-cell/Github-Explorer.git
```

### 2. Navigate to the project

```bash
cd Github-Explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development server

```bash
npm run dev
```

Open the local URL provided by Vite.

## API

GitHub Explorer uses the public GitHub REST API:

- https://api.github.com/users/{username}
- https://api.github.com/users/{username}/repos

No GitHub authentication token is required for basic public profile information.