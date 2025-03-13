import { EmailVerification } from './EmailVerification';
import { Profile } from './Profile';

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
