import { IconNameEnum } from '@enu/icon-name.enum';

export interface AboutMeModel {
  image: string;
  title: string;
  content: string;
  actionText: string;
  actionUrl: string;
  links: {
    iconName: IconNameEnum;
    url: string;
  }[];
}
