import { ApiRequest, ApiResponse } from 'app/next';
import handler from 'services/handler.service';
import { withSessionApi } from 'services/session.service';
import { SagaModel } from 'models';
import { SagasMapper } from 'mapper';
import ApiError from 'class/error/ApiError';

interface ResponseData extends DefaultResponseData {
  saga: Saga;
}

handler.get(async (req: ApiRequest, res: ApiResponse<ResponseData>) => {
  const { id } = req.query;

  const saga = SagasMapper.one(await SagaModel.findById(+id), { withAnimes: true });

  if (!saga) throw new ApiError(404, 'Saga not found');

  res.send({ success: true, saga });
});

export default withSessionApi(handler);