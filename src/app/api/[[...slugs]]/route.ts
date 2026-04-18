import { Elysia, t } from 'elysia'


const rooms=new Elysia({prefix:'/rooms'})
    .post("/create",()=>{
        console.log("Hello e create a new Room");
        return {
            message:"Room created successfully"
        }

    })


export const app = new Elysia({ prefix: '/api' }).use(rooms)
    
export const GET = app.fetch 
export const POST = app.fetch

export type App = typeof app