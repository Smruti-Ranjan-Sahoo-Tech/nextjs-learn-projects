import { Redis } from "@upstash/redis";

export const redis = Redis.fromEnv()

// export const redis=new Redis({
//     url:process.env.UPSTASH_REDIS_REST_URL,
    
    
// })