import cors from "cors"
import express, { Application, Request, Response } from "express"
import contact from "./Routers/phoneBookRouter"

export const appConfig = ( app : Application ) => {
    app.use(cors())
    app.use(express.json())

    app.use("/api/v1" , contact)

    app.get("/" , (req : Request , res : Response) => {
try {
    return res.status(200).json({
        message : "Welcome to Our PhoneBook App 😊😊"
    })
} catch (error : any) {
    return res.status(400).json({
        message : "An Error Occured",
        reason : error.message
    })
}
    })
}