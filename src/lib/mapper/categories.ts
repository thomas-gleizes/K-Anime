import { Category as CategoryModel } from '@prisma/client';

import { Category, Resources } from '@types';

class Categories implements Resources<CategoryModel, Category> {
  one(resource: CategoryModel): Category {
    if (!resource) return null;

    return {
      id: +resource.id,
      slug: resource.slug,
      name: resource.name,
      description: resource.description,
      totalMediaCount: resource.total_media_count,
    };
  }

  many(resources: Array<CategoryModel>): Array<Category> {
    return resources.map(this.one);
  }
}

export default new Categories();
