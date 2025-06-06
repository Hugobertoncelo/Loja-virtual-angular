import { Component, OnInit } from '@angular/core';
import { AcessoriosService } from '../acessorios.service';
import { IAcessorio } from '../acessorios';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.css'],
})
export class AcessoriosComponent implements OnInit {
  acessorios: IAcessorio[] = [];

  constructor(private acessoriosService: AcessoriosService) {}

  ngOnInit(): void {
    this.acessorios = this.acessoriosService.getAll();
  }
}
