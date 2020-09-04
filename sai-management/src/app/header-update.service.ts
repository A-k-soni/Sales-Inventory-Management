import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderUpdateService {

  constructor() { }

  hide: Subject<boolean> = new Subject<boolean>();

}
