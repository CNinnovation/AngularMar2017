import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  public log(message : string) : void {
    console.log(message);
  }

}
