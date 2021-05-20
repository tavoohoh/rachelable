import * as functions from 'firebase-functions';
import {cors} from '../commons/cors';
import {methodEnum} from '../enums/method.enum';
import {basicInfoFunctions} from '../functions/basic-info.function';

export const basicInfo = functions.https.onRequest(async (
    request,
    response
) => {
  return cors(request, response, async () => {
    functions.logger.info('basic info route', {structuredData: true});

    let responseValue: { status: number; body: any };

    switch (request.method) {
      case methodEnum.GET:
        responseValue = await basicInfoFunctions.get();
        break;

      default:
        responseValue = {
          status: 405,
          body: {
            error: 'Method not allowed',
          },
        };
        functions.logger.error('Method not allowed.', {structuredData: true});

        break;
    }

    response.status(responseValue.status).send(responseValue.body);
  });
});
