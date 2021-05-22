import { SectionModel } from './section.model';

export interface PortfolioModel extends SectionModel {}

export interface PortfolioEntryModel {
  image: string;
  category: string;
  title: string;
  date: string;
  roleAndCompany: string;
  description: string;
  methodology: string;
  employees: number;
  budget: string;
  tags: string;
}
