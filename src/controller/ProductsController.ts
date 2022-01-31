import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { ProductsInputDTO } from "../model/Products";

export class ProductsController {

    async registerProducts(req: Request, res: Response) {
        try {
            const { name, tags } = req.body;

            const input: ProductsInputDTO = {
                name,
                tags
            }

         
            const message = await new ProductsBusiness().registerProduct(input)

            res.status(200).send({message})
        
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message })
            } else {
                res.status(400).send({ message: "Unexpected Error !" })
            }
        }
    }



    async getAllProducts(req: Request, res: Response){
        try {
            
            const allProducts = await new ProductsBusiness().getAllProducts()

            res.status(200).send(allProducts)

        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json("Unexpected error")
            }
        }
    }


    async getProductByName(req: Request, res: Response){
        try {
            const name = req.params.name

            const product = await new ProductsBusiness().getProductByName(name)

            res.status(200).send(product)
        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json("Unexpected error")
            }
        }
    }


}