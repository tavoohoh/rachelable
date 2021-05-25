import { MetaData, PageName } from '@mod/meta-data.model';

export const META_DATA_CONSTANT: { [key: string]: MetaData } = {
  [PageName.HOME]: {
    title: 'Rachel Mata - Home',
    description: 'Lead Project Manager with 6 years of experience',
  },
  [PageName.PORTFOLIO]: {
    title: 'Rachel Mata - Portfolio',
    description: '',
  },
  [PageName.BLOG]: {
    title: 'Rachel Mata - Blog',
    description: '',
  },
};
