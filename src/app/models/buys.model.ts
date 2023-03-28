export class BuysModel{
    constructor(
        public id: string,
        public date: Date,
        public idType: string,
        public idClient: string,
        public clientName: string,
        public products :BuysProduct[]
    ){}
}

export class BuysProduct{
    constructor(
        public idProduct: string,
        public quantity: number,
    ){}
}