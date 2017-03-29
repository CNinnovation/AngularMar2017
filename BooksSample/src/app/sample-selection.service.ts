import { Injectable } from '@angular/core';

@Injectable()
export class SampleSelectionService {

  constructor() { }

  
  private _myselection : string;
  public get myselection() : string {
    return this._myselection;
  }
  public set myselection(v : string) {
    this._myselection = v;
    this.onselectionchanged(v);
  }

  public subscibe : (s : string) => void;
  
  private onselectionchanged(selection : string) {
    this.subscibe(selection);
  }
}
