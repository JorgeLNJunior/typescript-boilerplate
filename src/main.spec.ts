import Main from './main'

describe('Main', () => {
  test('should log "Hello World!"', async () => {
    const consoleSpy = jest.spyOn(console, 'log')

    new Main().run()

    expect(consoleSpy).toBeCalledWith('Hello World!')
  })
})
