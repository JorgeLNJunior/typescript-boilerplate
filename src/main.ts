import http from 'http'
import ConfigService from './services/config.service'

export default class Main {
  private port: number
  private configService: ConfigService

  constructor() {
    this.configService = new ConfigService()
    this.port = this.configService.getEnv<number>('PORT')
  }

  startServer() {
    const server = http.createServer((req, res) => {
      res.setHeader('Content-Type', 'application/json')

      try {
        if (req.url !== '/') {
          res.writeHead(404)
          return res.end(
            JSON.stringify({ message: "Route '${req.url}' Not Found" })
          )
        }

        res.writeHead(200)
        return res.end(
          JSON.stringify({
            message: 'Hello World',
            handledBy: {
              processID: process.pid,
              pm2Instance:
                this.configService.getEnv<number>('INSTANCE_ID') ||
                'PM2 is not running'
            }
          })
        )
      } catch (error) {
        res.writeHead(500)
        return res.end(JSON.stringify({ message: 'internal error' }))
      }
    })

    server.listen(this.port || 3000, undefined, () => {
      console.log('Server listening')
    })

    // graceful shutdown
    process.off('SIGINT', () => {
      console.log('Closing server')
      server.close((err) => process.exit(err ? 1 : 0))
    })
  }
}

new Main().startServer()
