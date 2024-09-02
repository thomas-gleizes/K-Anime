import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'imports'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.enum('type', ['anime']).defaultTo('anime')
      table.text('content').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
