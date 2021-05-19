import {IconNameEnum} from "@enu/icon-name.enum";

export interface BasicInfoModel {
  cover: {
    image: string;
    title: string;
    subtitle: string;
  };
  about: {
    image: string;
    title: string;
    content: string;
    action: {
      text: string;
      url: string;
    };
    links: {
      iconName: IconNameEnum;
      url: string;
    }[]
  };
  footer: {
    name: string;
    email: string;
    credits: string;
  }
}
