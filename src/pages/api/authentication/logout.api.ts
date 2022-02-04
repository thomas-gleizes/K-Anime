import { NextApiRequest, NextApiResponse } from 'next';

import router from '@lib/routing/handler';
import { withSessionApi } from '@services/session';

router.all(async (req: NextApiRequest, res: NextApiResponse) => {
  req.session.destroy();

  res.send({ success: true });
});

export default withSessionApi((req: NextApiRequest, res: NextApiResponse) => {
  router.handler(req, res);
});
