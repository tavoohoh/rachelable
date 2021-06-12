import { MetaData, PageName } from '@mod/meta-data.model';
import { environment } from '../../environments/environment';

// https://developers.facebook.com/docs/sharing/webmasters#markup

export const META_DATA_CONSTANT: { [key: string]: MetaData } = {
  [PageName.HOME]: {
    url: `${environment.urls.app}/home`,
    type: '',
    title: 'Rachel Mata - Home',
    description: 'Lead Project Manager with 6 years of experience',
    image: ''
  },
  [PageName.PORTFOLIO]: {
    url: `${environment.urls.app}/portfolio`,
    type: '',
    title: 'Rachel Mata - Portfolio',
    description: '',
    image: ''
  },
  [PageName.BLOG]: {
    url: `${environment.urls.app}/blog`,
    type: '',
    title: 'Rachel Mata - Blog',
    description: '',
    image: ''
  },
};
