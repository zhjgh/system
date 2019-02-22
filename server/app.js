const Koa = require('koa')
const MysqlSession = require('koa-mysql-session')
const session = require('koa-session-minimal') 
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const config = require('./config/index');
const app = new Koa()

// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlSession(sessionMysqlConfig)
}))

// 使用ctx.body解析中间件
app.use(bodyParser())

// 使用跨域
app.use(cors())

// 路由
app.use(require('./routers/login.js').routes())
app.use(require('./routers/query.js').routes())
app.use(require('./routers/add.js').routes())
app.use(require('./routers/delete.js').routes())
app.use(require('./routers/edit.js').routes())

// 设置监听端口
app.listen(config.port)
console.log(`listening on port ${config.port}`)