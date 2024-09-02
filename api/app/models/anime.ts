import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Saga from '#models/saga'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Anime extends BaseModel {
  static table = 'animes'

  @column({ isPrimary: true })
  declare id: string

  @hasOne(() => Saga)
  declare saga: HasOne<typeof Saga>

  @column()
  declare slug: string

  @column()
  declare title: string

  @column()
  declare titles: string

  @column()
  declare description: string

  @column()
  declare synopsis: string

  @column()
  declare type: string

  @column()
  declare status: string

  @column.date({ columnName: 'start_date' })
  declare startDate: DateTime | null

  @column.date({ columnName: 'end_date' })
  declare endDate: DateTime | null

  @column()
  declare poster: string

  @column()
  declare cover: string

  @column({ columnName: 'episode_count' })
  declare episodeCount: number

  @column({ columnName: 'episode_length' })
  declare episodeLength: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
