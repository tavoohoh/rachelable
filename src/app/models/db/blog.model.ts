import { SectionModel } from './section.model';
import { BlogEntryStatusEnum } from '@enu/blog-entry-status.enum';

export interface BlogModel extends SectionModel {
  blogs: string[];
}

export interface BlogAuthor {
  name: string;
  avatar: string;
}

interface LocalBlogEntries {
  id: string;
  status: BlogEntryStatusEnum;
}

export class BlogEntryModel {
  id: string;
  image: string;
  title: string;
  overview: string;
  authors: BlogAuthor[];
  date: string;
  tags: string[];
  content: string;
  status: BlogEntryStatusEnum = BlogEntryStatusEnum.TO_READ;

  constructor(props: BlogEntryModel) {
    this.id = props.id;
    this.image = props.image;
    this.title = props.title;
    this.overview = props.overview;
    this.authors = props.authors;
    this.date = props.date;
    this.tags = props.tags;
    this.content = props.content;

    this.setStatus();
  }

  private static getLocalEntries(): LocalBlogEntries[] {
    return JSON.parse(localStorage.getItem('ray_entries')) || [];
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

  private setStatus(): void {
    const localEntries = BlogEntryModel.getLocalEntries();
    const matchedEntry = localEntries.filter((e) => e.id === this.id);

    if (matchedEntry.length > 0) {
      this.status = matchedEntry[0].status;
    }
  }

  public updateStatus(status: BlogEntryStatusEnum): void {
    this.status = status;
    const localEntries = BlogEntryModel.getLocalEntries();
    const entryIndex = localEntries.findIndex((e) => e.id === this.id);

    if (localEntries[entryIndex]) {
      localEntries[entryIndex].status = status;
    } else {
      localEntries.push({
        id: this.id,
        status,
      });
    }

    localStorage.setItem('ray_entries', JSON.stringify(localEntries));
  }
}

export class BlogEntriesProgress {
  toRead: BlogEntryModel[];
  inProgress: BlogEntryModel[];
  done: BlogEntryModel[];
}

export class BlogContext {
  main: BlogModel;
  entries: BlogEntriesProgress;
}
