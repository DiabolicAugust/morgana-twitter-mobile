import { Legend } from '../models/Legend';

export class LegendDto {
  id: string;
  title: string;
  description: string;

  videoUrl: string;

  createdAt: string;
  updatedAt: string;
  profile: {
    name: string;
    avatar: string;
    banner: string;
    bio: string;
  };

  constructor(legend: Legend) {
    this.id = legend.id;
    this.title = legend.title;
    this.description = legend.description;
    this.videoUrl = legend.videoUrl;
    this.createdAt = legend.createdAt;
    this.updatedAt = legend.updatedAt;

    this.profile = {
      name: legend.profile.name,
      avatar: legend.profile.avatar,
      banner: legend.profile.banner,
      bio: legend.profile.bio,
    };
  }
}
