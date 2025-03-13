import { Profile } from './Profile';

export interface Legend {
  id: string;
  title: string;
  description: string;

  videoUrl: string;

  profile: Profile;

  createdAt: string;
  updatedAt: string;
}
