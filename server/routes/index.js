import Router from 'koa-router'
const router=new Router()
router.get('/',async ctx=>{
    ctx.body='hello world'
})
//所有的路由都写在这
export default router