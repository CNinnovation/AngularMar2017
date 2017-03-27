class Character {
    fullname : string;

    constructor(firstname: string, lastname: string) {
        this.fullname = firstname + " " + lastname;
    }

    greet(name? : string) : string {
        if (name) {
            return "Hi " + name + "! My name is " + this.fullname;
        }
        else {
            return "Hi! My name is " + this.fullname;
        }
    }
}