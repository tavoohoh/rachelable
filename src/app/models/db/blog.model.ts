import { SectionModel } from './section.model';

export interface BlogModel extends SectionModel {
  blogs: string[];
}

export class BlogEntryModel {
  image: string;
  title: string;
  overview: string;
  author: string;
  authorImage: string;
  date: string;
  tags: string[];
  content: string;
  estimatedReadTime: () => number = () => {
    const wpm = 225;
    const words = this.content.trim().split(/\s+/).length;
    return Math.ceil(words / wpm);
  };
}
