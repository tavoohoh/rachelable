import { SectionModel } from './section.model';

export interface BlogModel extends SectionModel {
  blogs: string[];
}

export interface BlogAuthor {
  name: string;
  avatar: string;
}

export class BlogEntryModel {
  image: string;
  title: string;
  overview: string;
  authors: BlogAuthor[];
  date: string;
  tags: string[];
  content: string;

  constructor(props: BlogEntryModel) {
    this.image = props.image;
    this.title = props.title;
    this.overview = props.overview;
    this.authors = props.authors;
    this.date = props.date;
    this.tags = props.tags;
    this.content = props.content;
  }

  public estimatedReadTime(): string {
    const wpm = 225;
    const words = this.content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wpm);

    switch (minutes) {
      case 1:
        return `${minutes} minute read`;
      case 0:
      default:
        return `${minutes} minutes read`;
    }
  }
}
