# Cronus - Mobile Task Manager Application

Cronus is a task manager application designed for Android and iOS platforms. This app allows users to manage their tasks efficiently, set up scheduling, assign collaborators, and create meetings seamlessly using Google Meet. Built with React Native, Cronus focuses on providing a robust and user-friendly experience for mobile task management.

## Features

- **Task Management:** Create, edit, and delete tasks with ease.
- **Scheduling:** Set deadlines and reminders for your tasks.
- **Collaborators:** Assign tasks to collaborators and manage team efforts effectively.
- **Authentication:** Secure Sign-in/Sign-out functionality.
- **Meeting Integration:** Schedule and join meetings using Google Meet.


[See more detailed feature set](https://github.com/sutuioncode/Cronus/wiki/Feature-Set)

## Tech Stack

- **Frontend:** [React Native](https://reactnative.dev)
- **Testing:**
  - **End-to-End Testing:** [Detox](https://github.com/wix/Detox)
  - **Instrumentation Testing:** [Testing Library React Native](https://testing-library.com/docs/react-native-testing-library/intro/)
  - **Unit Testing:** [Jest](https://jestjs.io/)
- **API Mocking:** [Mock Service Worker (MSW)](https://mswjs.io/)


## Project Structure
# React Native Project Structure with TypeScript

This is a React Native project structure designed to support TypeScript. It’s organized into sections for components, containers, custom hooks, services, navigation, utilities, models, and state management, making it easier to manage large applications while ensuring type safety with TypeScript.

## Project Structure

```plaintext
my-react-native-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.styles.ts
│   │   │   ├── Button.story.tsx   # Storybook file for component documentation
│   │   │   └── index.ts
│   │   └── ...
│   │
│   ├── containers/          # Containers for logic-wrapped components
│   │   ├── HomeContainer.tsx
│   │   ├── ProfileContainer.tsx
│   │   └── ...
│   │
│   ├── hooks/               # Custom hooks
│   │   ├── useAuth.ts
│   │   ├── useFetch.ts
│   │   └── ...
│   │
│   ├── navigators/          # Navigation setup
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   └── index.ts
│   │
│   ├── screens/             # Screens for each route
│   │   ├── HomeScreen/
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── HomeScreen.styles.ts
│   │   │   └── index.ts
│   │   ├── ProfileScreen/
│   │   │   ├── ProfileScreen.tsx
│   │   │   ├── ProfileScreen.styles.ts
│   │   │   └── index.ts
│   │   └── ...
│   │
│   ├── services/            # API and other external services
│   │   ├── mocks/           # Mock data for testing or development
│   │   │   ├── users.ts
│   │   │   ├── tasks.ts
│   │   │   └── index.ts
│   │   ├── apis/            # API request functions
│   │   │   ├── users.ts
│   │   │   └── tasks.ts
│   │   └── auth/            # Authentication related services
│   │     
│   ├── utils/               # Utility functions
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   └── ...
│   │
│   ├── models/              # Data models (for structuring data)
│   │   ├── user.ts
│   │   └── ...
│   │
│   ├── store/               # State management
│   │   ├── user.ts
│   │   └── ...
│   │
│   ├── App.tsx              # Main app entry point
│   ├── theme.ts             # Theme setup
│   └── index.ts             # App initialization
│
├── .gitignore
├── babel.config.js
├── package.json
├── README.md
├── tsconfig.json            # TypeScript configuration
└── yarn.lock
