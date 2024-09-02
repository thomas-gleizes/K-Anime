import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import { kitsuClient } from '../services/kitsuClient.js'

export default class ImportAnimes extends BaseCommand {
  static commandName = 'import:animes'
  static description = 'import animes'

  static options: CommandOptions = {}

  async run() {
    this.logger.info('Hello world from "ImportAnimes"')

    let loop = true

    while (loop) {
      const response = await kitsuClient.GET('/anime', { params: { query: {} } })

      console.log('Response', response)
    }
  }
}
