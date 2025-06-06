import { Injectable } from '@angular/core';
import { ACESSORIOS, IAcessorio } from './acessorios';

@Injectable({
  providedIn: 'root',
})
export class AcessoriosService {
  getAll(): IAcessorio[] {
    return ACESSORIOS;
  }

  getOne(id: number): IAcessorio | undefined {
    return ACESSORIOS.find((a) => a.id === id);
  }
}
