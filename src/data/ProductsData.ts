import { Product, ProductsInsertDTO } from "../model/Products";
import { BaseDataBase } from "./BaseDataBase";

export class ProductsData extends BaseDataBase {

    private static TABLE_NAME = "amaro_products"


    async insertUser(products: ProductsInsertDTO): Promise<string> {
        try {

            const { id, name, tags } = products

            await this.getConnection()
                .insert({
                    id, 
                    name,
                    tags
                }).into(ProductsData.TABLE_NAME)

            return "Usuario criado com sucesso"
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }


    async getAllProducts():Promise<Product[]>{
        try {
            
            const allProducts: Product[] = await this.getConnection()
                .select("*")
                .from(ProductsData.TABLE_NAME) 

            const prods = allProducts.map((prod)=>{
                return Product.productModel(prod)
            })

            return prods

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }



    async getProductByName(name: string){

        const product = await this.getConnection()
            .select("*")
            .where("name", "=", name)
            .from(ProductsData.TABLE_NAME)

        return product
    }
}