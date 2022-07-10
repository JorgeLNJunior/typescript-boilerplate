import Logger from '@ptkdev/logger'
import { config } from 'dotenv'
config()

export default class ConfigService {
  private logger: Logger

  constructor() {
    this.logger = new Logger()
  }

  getEnv<T>(env: string): T | undefined {
    if (process.env[env]) {
      return process.env[env] as unknown as T
    }

    this.logger.warning(
      `the enviroment variable "${env}" is undefined`,
      ConfigService.name
    )

    return undefined
  }
}
