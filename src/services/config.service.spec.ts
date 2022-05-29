import ConfigService from './config.service'

describe('ConfigService', () => {
  let service: ConfigService

  beforeEach(() => (service = new ConfigService()))

  describe('getEnv', () => {
    test('should return an env', async () => {
      process.env.TEST = 'test'

      expect(service.getEnv('TEST')).toBe('test')
    })
  })
})
