import { config } from 'dotenv'
config()

export default class ConfigService {
  getEnv<T>(env: string): T {
    return process.env[env] as unknown as T
  }
}
