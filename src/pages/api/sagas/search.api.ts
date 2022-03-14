import { ApiRequest, ApiResponse } from 'app/next';
import handler from 'services/handler.service';
import { withSessionApi } from 'services/session.service';
import { SagasMapper } from 'mapper';
import { SagaModel } from 'models';
import ApiError from 'class/error/ApiError';

interface ResponseData extends DefaultResponseData {
  sagas: Sagas;
}

handler.get(async (req: ApiRequest, res: ApiResponse<ResponseData>) => {
  const { limit, skip, query } = req.query;

  if (!query) throw new ApiError(400, 'query is required');

  const sagas = SagasMapper.many(
    await SagaModel.search(query as string, { limit, skip }),
    { withAnimes: false }
  );

  res.send({ success: true, sagas });
});

export default withSessionApi(handler);