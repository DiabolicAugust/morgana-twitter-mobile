export interface EmailVerification {
  id: string;
  isVerified: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  banner: string;
  bio: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  isBanned: boolean;
  createdAt: string;
  updatedAt: string;
  isVerifiedEmail: EmailVerification;
  profile: Profile;
}
