import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, number, category } = req.body;

    const avatar = name.charAt().toUpperCase()

    const user = await prisma.phoneBoookModel.create({
      data: {
        name,
        number,
        category,
        avatar
      },
    });

    return res.status(200).json({
      message: "Created Contact Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
        message : "Error Creating Contact",
        data : error.message
    })
  }
};

export const viewContacts = async (req: Request, res: Response) => {
  try {
    const contact = await prisma.phoneBoookModel.findMany();

    return res.status(200).json({
      message: "Found Contacts Successfully",
      data: contact,
    });
  } catch (error) {
    return res.status(400).json({
        message : "Error Finding Contacts",
        data : error.message
    })
  }
};

export const viewContactCategory = async (req : Request , res : Response) => {
    try {
        const { category } = req.body
        const data = await prisma.phoneBoookModel.findMany({where : {category}});

        return res.status(200).json({
            message : "Viewed Contact Category Successfully",
            data : data
        })
    } catch (error) {
        return res.status(400).json({
            message : "Error Viewing Contact Category "
        })
    }
}

export const updateOneContact = async (req : Request , res : Response) => {
    try {
        const { contactID } = req.params
        const { name , number , category } = req.body

        const update = await prisma.phoneBoookModel.update({
            where : {
                id : contactID
            },
            data : {
                name,
                number,
                category,
                avatar : name.charAt().toUpperCase()
            },
            
        },
    
        )

        return res.status(201).json({
            message : "Updated Contact Successfully",
            data : update
        })
    } catch (error) {
        return res.status(404).json({
            message : "Error Updating Contact",
            DATA : error.message  
        })
    }
}
