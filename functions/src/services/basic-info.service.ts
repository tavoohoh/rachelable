import * as admin from 'firebase-admin';
import {CollectionEnum} from '../enums/collections.enum';
import {BasicInfoModel} from '../models/basic-info.model';

const db = admin.firestore();

const get = (): Promise<BasicInfoModel> => {
  return db.collection(CollectionEnum.BASIC_INFO)
      .get()
      .then((querySnapshot) =>
        querySnapshot?.docs[0]?.data() as BasicInfoModel
      );
};

export const basicInfoService = {
  get,
};
