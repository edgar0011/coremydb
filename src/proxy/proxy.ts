/* eslint-disable no-console */
import { AddressInfo } from 'net'

import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { createProxyMiddleware } from 'http-proxy-middleware'

import HttpException from '../types/HttpException'

const app = express()
app.use(helmet())
app.use(cors())
console.log('proxy', createProxyMiddleware)

// eslint-disable-next: NextFunction-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('', (req: Request, res: Response, next: NextFunction) => {
  // console.log('Request', req)
  // console.log('Response', res)
  // console.log('next: NextFunction', next: NextFunction)
  res.send('Hello from proxy')
})

const routerMap: { [key: string]: string} = {
  '/neolane/ru': 'https://randomuser.me/api',
  '/neolane/jp': 'https://jsonplaceholder.typicode.com',
}

const router = async (req: Request): Promise<string> => {
  console.log('router:', req.url, req.path)
  // return routerMap[req.path]

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(routerMap[req.path])
    }, 1000)
  })
}

const proxyOptions:any = {
  target: 'https://jsonplaceholder.typicode.com',
  router,
  changeOrigin: true,
  pathRewrite: {
    '^/neolane/jp': '',
    '^/neolane/ru': '',
  },
  logLevel: 'debug',
  // onProxyReq(proxyReq: Request, req: Request, res: Response) {
  //   console.log('proxyReq')
  //   console.log('req', Object.keys(req))
  //   console.log('req.url', req.url)
  //   console.log('proxyReq.path', proxyReq.path)
  //   console.log('proxyReq', Object.keys(proxyReq))
  //   console.log('res.statusCode', res.statusCode)
  // },
  // onProxyRes(proxyRes: Response, req: Request, res: Response) {
  //   console.log('proxyRes')
  //   console.log('req', Object.keys(req))
  //   console.log('req.url', req.url)
  //   console.log('proxyRes.statusCode', proxyRes.statusCode)
  //   console.log('res.statusCode', res.statusCode)
  // },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onProxyError(err: HttpException, req: Request, res: Response) {
    console.log('onProxyError', err)
  },
}


app.use('/neolane', createProxyMiddleware(proxyOptions))

const server = app.listen(process.env.PORT || 8080, () => {
  const { port } = server.address() as AddressInfo
  console.log(`server running at: ${port}`)
})

process.on('uncaughtException', (err: HttpException) => {
  // handle the error safely
  console.log(err)
})

process.on('unhandledRejection', (reason?: string) => {
  throw reason // you should handle all exceptions in tests explixitly
})


export default server
