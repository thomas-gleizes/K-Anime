import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'animes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.string('slug').notNullable().unique()
      table.string('title').notNullable()
      table.json('titles').notNullable()

      table.text('description').notNullable()
      table.text('synopsis').notNullable()

      table.enum('type', ['TV', 'movie', 'OVA', 'ONA', 'special', 'music']).notNullable()
      table.enum('status', ['current', 'finished', 'tba', 'unreleased', 'upcoming']).notNullable()

      table.date('start_date').nullable()
      table.date('end_date').nullable()

      table.json('poster').notNullable()
      table.json('cover').notNullable()

      table.integer('episode_count').nullable()
      table.integer('episode_length').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
