import type { NextApiRequest, NextApiResponse } from 'next';

import { Anime, DefaultResponseData } from '@types';
import router from '@lib/routing/handler';
import { AnimeModel } from '@models';
import { AnimesMapper } from '@mapper';
import { ApiError } from '@errors';
import { errorMessage } from '@lib/constants';

interface Data extends DefaultResponseData {
  anime: Anime;
}

router.get(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { slug } = req.query;

  const anime: Anime = AnimesMapper.one(await AnimeModel.findBySlug(slug as string));

  if (!anime) throw new ApiError(404, errorMessage.ANIME_NOT_FOUND);

  res.send({ success: true, anime, params: req.query });
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  router.handler(req, res);
}