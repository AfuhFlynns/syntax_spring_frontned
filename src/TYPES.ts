export interface UserData {
  username: string;
  names: {
    firstName: string;
    lastName: string;
  };
  email: string;
  phoneNumber?: string;
  password: string;
  role: "admin" | "user" | "editor";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
  preferences?: {
    theme: "light" | "dark";
    acceptNotifications: boolean;
  };
  avatar: string;
  tokens: {
    type: "access" | "refresh" | "resetPassword";
    token: string;
    expiresAt: Date;
  }[];
  codes: {
    type: "verification" | "coupon";
    code: string;
    expiresAt: Date;
  }[];
  progress: {
    challengeId: string;
    status: "note-started" | "in-progress" | "completed";
    lastSubmission?: string;
    score?: number;
  }[];
  achievements: string[];
}
export interface challengesDataTypes {
  title: string;
  type:
    | "html"
    | "css"
    | "js"
    | "tailwindcss"
    | "ts"
    | "python"
    | "c/c++"
    | "vb.net";
  description: string;
  difficulty: string;
  initialCode: string;
  solution: string;
  hints: {
    hint: string;
  }[];
  tags: {
    tag: string;
  }[];
}

export interface responseDataTypes {
  user: UserData | null;
  message: string;
  users: UserData[] | null;
  challenges: challengesDataTypes[] | null;
}

export interface globalUserStoreTypes {
  error: string;
  loading: boolean;
  user: UserData | null;
  users: UserData[] | null;
  challenges: challengesDataTypes[] | null;
  isAuthenticated: boolean;
  sendCheckAuth: boolean;
  setAuthState: (value: boolean) => void;
  setUser: (
    user: UserData | null,
    users: UserData[] | null,
    challenges: challengesDataTypes[] | null
  ) => void;
  clearUser: () => void;
  signUp: (password: string, email: string, username: string) => void;
  logIn: (password: string, value: string) => void;
  forgotPassword: (email: string) => void;
  resetPassword: (token: string | undefined, password: string) => void;
  verifyUser: (code: string) => void;
  askAiHelp: (
    title: string,
    description: string,
    initialCode: string,
    solution: string
  ) => Promise<string | undefined>;
}

export interface globalAppStoreTypes {
  isMobileNavBar: boolean;
  setIsMobileNavBar: (value: boolean) => void;
  setChallengeTitle: (value: string) => void;
  challengeTitle: string;
}
