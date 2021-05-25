export interface NavigationModel {
  path: string;
  text: string;
  fragment?: string;
  disableActiveState?: boolean;
}

export type NavigationArrayModel = ReadonlyArray<NavigationModel>;
