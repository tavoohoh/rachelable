import * as functions from 'firebase-functions';
import {cors} from '../commons/cors';
import {authorization} from '../commons/auth';

export const health = functions.https.onRequest(async (
    request,
    response
) => {
  return cors(request, response, async () => {
    if (request.query.auth) {
      const {user} = await authorization(request, response);

      response.status(200).send({
        health: 'Just fine',
        user: user,
      });
    } else {
      response.status(200).send({
        health: 'Just fine',
      });
    }
  });
});
