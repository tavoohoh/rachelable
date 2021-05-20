import {SectionModel} from './section.model';

export interface BlogModel extends SectionModel {}

export interface BlogEntryModel {
  image: string;
  title: string;
  date: string;
  readTime: string;
  content: string;
  tags: string;
}
