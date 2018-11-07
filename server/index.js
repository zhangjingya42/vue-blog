import koa from 'koa'
import router from './routes/index'
//跨域
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser'

import query from './utils/query'
const app =new koa()
app.use(cors()).use(bodyParser()).use(router.routes())
app.listen(3000,()=>{
    console.log('node is ok')
})