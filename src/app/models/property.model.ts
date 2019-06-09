export class Property {
    public id: number;
    public name: string;
    public imageUrl: string;
    public location: string;
    public price: number;

    constructor() {
        this.id = 0;
        this.name = "";
        this.imageUrl = "";
        this.location = "";
        this.price = 0;
    }
}