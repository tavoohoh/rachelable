export enum PageName {
  HOME = 'HOME',
  ABOUT_ME = 'ABOUT_ME',
  CONTACT = 'CONTACT',
  PORTFOLIO = 'PORTFOLIO',
  BLOG = 'BLOG'
}

export interface MetaData {
  url: string;
  type: string;
  title: string;
  description: string;
  image: string;
}
