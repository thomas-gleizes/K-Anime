import { Country, Prisma } from '@prisma/client';

import connexion, { ConnexionType } from '@services/connexion';
import Model from '@lib/models/model';

class CountryModel extends Model<Prisma.CountryDelegate<unknown>> {
  public constructor(connexion: ConnexionType) {
    super(connexion.country);
  }

  public all = (): Promise<Country[]> => this.connexion.findMany({});
}

export default new CountryModel(connexion);
