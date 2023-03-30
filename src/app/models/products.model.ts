export class ProductModel{
    constructor(
        public id: string,
        public name: string,
        public inInventory: number,
        public enabled: boolean,
        public min: number,
        public max :number,
        public price: number
    ){}
}