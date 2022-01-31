import { BaseDataBase } from "./BaseDataBase";

class Migrations extends BaseDataBase{
    
    async createTable(){
        await this.getConnection()
        .raw(`
            create table if not exists amaro_products (
                id varchar(255) primary key,
                name varchar(255) not null,
                tags varchar(255) not null
            );
        `)
        console.log("Tabela amaro_products criada com sucesso")
    }
}

const createTable = new Migrations().createTable()