import cors from "cors"
import express, { Application } from "express"
import contact from "./Routers/phoneBookRouter"

export const appConfig = ( app : Application ) => {
    app.use(cors())
    app.use(express.json())

    app.use("/api/v1" , contact)
}