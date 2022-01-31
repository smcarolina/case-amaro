import { ProductsData } from "../data/ProductsData";
import { MissingFieldsToComplet } from "../error/MissingFieldsToComplet";
import { ProductsInputDTO, ProductsInsertDTO } from "../model/Products";
import { IdGenerator } from "../services/IdGenerator";

export class ProductsBusiness {

    async registerProduct(input: ProductsInputDTO) {


        if (!input.name || !input.tags) {
            throw new MissingFieldsToComplet()
        }


        const products: ProductsInsertDTO = {
            id: new IdGenerator().generate(),
            ...input
        }

        const result = await new ProductsData().insertUser(products)

        return result
    }


    async getAllProducts(){
        const allProducts = await new ProductsData().getAllProducts()

        return allProducts
    }


    async getProductByName(name: string){
        if(!name){
            throw new MissingFieldsToComplet()
        }

        const product = await new ProductsData().getProductByName(name)

        return product
    }
}