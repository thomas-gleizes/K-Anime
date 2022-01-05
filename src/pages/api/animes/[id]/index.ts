import type { NextApiRequest, NextApiResponse } from 'next';

import { Anime, DefaultResponseData } from '@types';
import router from '@lib/routing/router';
import { AnimeModel } from '@models';
import { AnimesMapper } from '@mapper';
import { ApiError } from '@errors';

interface Data extends DefaultResponseData {
  anime: Anime;
}

router.get(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  const anime: Anime = AnimesMapper.one(await AnimeModel.findById(+id));

  if (!anime) throw new ApiError(404, 'anime not found');

  res.send({ success: true, anime, params: req.query });
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  router.handler(req, res);
}
