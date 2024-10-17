import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/core/types/types';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {

  @Input() label!: string;
  @Input() iconePrefixo!: string;

  public filteredOption = [];
  public unidadesFederativas: UnidadeFederativa[] = [];

  constructor(
    private unidadeFederativaService: UnidadeFederativaService
  ) {

  }

  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe(dados => {
      this.unidadesFederativas = dados;
    })
  }
}
