export class Product{
    constructor(
        private id: string,
        private name: string,
        private tags: string[]
    ){}

    static productModel(product: Product){
        return new Product(product.id, product.name, product.tags)
    }
}


export interface ProductsInputDTO {
    name: string,
    tags: string[]
}

export interface ProductsInsertDTO extends ProductsInputDTO {
    id:string;
}