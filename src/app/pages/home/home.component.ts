import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Depoimento, Promocao } from 'src/core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public promocoes!: Promocao[];
  public depoimentos: Depoimento[] = [];

  constructor(
    private promocaoService: PromocaoService,
    private service: DepoimentoService
  ) {

  }

  ngOnInit(): void {
    this.promocaoService.listar().subscribe(resposta => {
      console.log(resposta);
      this.promocoes = resposta;
    });

    this.service.listar().subscribe(
      res => {
        this.depoimentos = res;
      }
    );
  }
}
