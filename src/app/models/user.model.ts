export class User {
    public id: number;
    public firstname: string;
    public lastname: string;
    public role: string;
    public email: string;

    constructor () {
        this.id = 0;
        this.firstname = "";
        this.lastname = "";
        this.role = "";
        this.email = "";
    }
}