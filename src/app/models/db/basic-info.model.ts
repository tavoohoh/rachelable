import {IconNameEnum} from "@enu/icon-name.enum";

export interface BasicInfoModel {
  image: string;
  title: string;
  subtitle: string;
  name: string;
  email: string;
  credits: string;
  aboutImage: string;
  aboutTitle: string;
  aboutContent: string;
  aboutActionText: string;
  aboutActionUrl: string;
  aboutLinks: {
    iconName: IconNameEnum;
    url: string;
  }[];
}
