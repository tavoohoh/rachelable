import {basicInfoService} from '../services/basic-info.service';
import {HttpResponseModel} from '../models/http-response.model';

const get = async (): Promise<HttpResponseModel> => {
  try {
    const response = await basicInfoService.get();

    if (response) {
      return {
        status: 200,
        body: response,
      };
    } else {
      return {
        status: 404,
        body: {
          error: 'basic info not found',
          message: 'Unable to find basic info',
        },
      };
    }
  } catch (error) {
    return {
      status: 500,
      body: {
        error: 'Internal server error',
        message: 'Unable to fetch basic info',
        detail: error,
      },
    };
  }
};

export const basicInfoFunctions = {
  get,
};
