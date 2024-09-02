import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Saga extends BaseModel {
  static table = 'sagas'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare slug: string

  @column({})
  declare title: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
