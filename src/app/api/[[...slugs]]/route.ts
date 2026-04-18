import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })
    .get('/user', {user:{name:"Raja"}})
    
export const GET = app.fetch 
export const POST = app.fetch