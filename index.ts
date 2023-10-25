import express, {Application} from "express"

import dotenv from "dotenv"
import { appConfig } from "./mainApp"
dotenv.config()


const port : number = parseInt( process.env.PORT!)

const app : Application = express()

appConfig(app)


const server  = app.listen( process.env.PORT || port , ()=>{
    console.log("Server Is Up and Running");
    
})

process.on("uncaughtException" , (error : any)=>{
    console.log(error);
    process.exit(1)
})

process.on("unhandledRejection" , (reason)=>{
    console.log(reason);
    server.close(()=>{
        process.exit(1)
    })
})