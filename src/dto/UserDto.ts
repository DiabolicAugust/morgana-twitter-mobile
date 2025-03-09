import { User } from '../models/User';

export class UserDto {
  id: string;
  email: string;
  username: string;
  isBanned: boolean;
  createdAt: string;
  updatedAt: string;
  profile: {
    name: string;
    avatar: string;
    banner: string;
    bio: string;
  };
  isVerifiedEmail: {
    isVerified: boolean;
  };

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.username = user.username;
    this.isBanned = user.isBanned;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;

    this.profile = {
      name: user.profile.name,
      avatar: user.profile.avatar,
      banner: user.profile.banner,
      bio: user.profile.bio,
    };

    this.isVerifiedEmail = {
      isVerified: user.isVerifiedEmail.isVerified,
    };
  }
}
