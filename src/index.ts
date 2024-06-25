import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup',(c)=>{
  return c.text('signup Page')
})

app.post('/api/v1/user/signin',(c)=>{
  return c.text('signin Page')
})

app.post('/api/v1/blog',(c)=>{
  return c.text(' posting blog page')
})

app.put('/api/v1/blog',(c)=>{
  return c.text(' delete blog page')
})

app.get('/api/v1/blog:id',(c)=>{
  const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})

app.get('/api/v1/blog/bulk',(c)=>{
  return c.text('getting bulk blogs')
})



export default app
