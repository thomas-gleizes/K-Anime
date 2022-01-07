import { NextApiRequest, NextApiResponse } from 'next';

import { DefaultResponseData, Animes } from '@types';
import router from '@lib/routing/router';
import { UserModel, AnimeModel } from '@models';
import { AnimesMapper } from '@mapper';
import { ApiError } from '@errors';

interface Data extends DefaultResponseData {
  animes: Animes;
  length: number;
}

router.get(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  const user = await UserModel.findById(+id);
  if (!user) throw new ApiError(404, 'user not found');

  const animes = AnimesMapper.many(await AnimeModel.findByUser(+id));

  const test = await AnimeModel.count();

  res.send({ params: test, success: true, animes: animes, length: animes.length });
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  router.handler(req, res);
}