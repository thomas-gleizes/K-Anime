import { PrismaAnime } from 'prisma/app';
import Mapper from 'class/Mapper';
import jsonParser from 'utils/jsonParser';
import { categoriesMapper, entriesMapper, postsMapper, sagasMapper } from 'mappers';

class AnimesMapper extends Mapper<PrismaAnime, Anime> {
  public one(resource: PrismaAnime): Anime {
    const anime: Anime = {
      id: resource.id,
      kitsu_id: resource.kitsu_id,
      slug: resource.slug,
      canonicalTitle: resource.canonical_title,
      titles: jsonParser<Titles>(resource.titles),
      season: resource.season,
      season_year: resource.season_year,
      status: resource.status,
      sagaId: resource.saga_id,
      type: resource.type,
      rating: {
        average: resource.rating_average,
        rank: resource.rating_rank,
      },
      popularity: {
        count: resource.popularity_count,
        rank: resource.popularity_rank,
      },
      episode: {
        length: resource.episode_length,
        count: resource.episode_count,
      },
      dateBegin: resource.date_begin && resource.date_begin.toISOString(),
      dateEnd: resource.date_end && resource.date_end.toISOString(),
      cover: jsonParser<Images>(resource.cover),
      poster: jsonParser<Images>(resource.poster),
      synopsis: resource.synopsis,
      description: resource.description,
    };

    if (resource.saga) anime.saga = sagasMapper.one(resource.saga);
    if (resource.entries) anime.entries = entriesMapper.many(resource.entries);
    if (resource.posts) anime.posts = postsMapper.many(resource.posts);
    if (resource.categories)
      anime.categories = categoriesMapper.many(resource.categories);

    return anime;
  }
}

export default new AnimesMapper();
