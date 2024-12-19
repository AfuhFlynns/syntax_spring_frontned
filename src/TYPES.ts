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

export interface responseDataTypes {
  user: UserData | null;
  message: string;
}

export interface globalUserStoreTypes {
  error: Error | any;
  loading: boolean;
  user: UserData | null;
  isCheckingAuth: boolean;
  setUser: (user: UserData) => void;
  clearUser: () => void;
  signUp: (password: string, email: string, username: string) => void;
  logIn: (password: string, value: string) => void;
  verifyUser: (code: string) => void;
}

export interface globalAppStoreTypes {
  isMobileNavBar: boolean;
  setIsMobileNavBar: (value: boolean) => void;
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
