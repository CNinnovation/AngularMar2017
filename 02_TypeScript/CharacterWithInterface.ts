namespace Model {

    export interface LoggerInterface {
        log(message: string): void;
    }

    class Logger implements LoggerInterface {
        log(message: string): void {
            console.log(message);
        }
    }

    export class Character {
        fullname: string;

        constructor(firstname: string, lastname: string) {
            this.fullname = firstname + " " + lastname;
        }

        greet(name?: string): string {
            if (name) {
                return "Hi " + name + "! My name is " + this.fullname;
            }
            else {
                return "Hi! My name is " + this.fullname;
            }
        }

        show(logger: LoggerInterface): void {
            logger.log("show called");
        }


    }
}

var spark = new Model.Character("Stephanie", "Nagel");