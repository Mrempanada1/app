import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Generar } from '../interfaces/codigo';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor(private httpclient:HttpClient) { }

  getQr()
  {
    return this.httpclient.get<Generar>('https://api.qr-code-generator.com/v1/create?access-token=your-acces-token-here');
  }
}
