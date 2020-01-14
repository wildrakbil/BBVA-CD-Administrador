import { Component, OnInit } from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import * as classie from 'classie';

@Component({
  selector: 'app-buscar-candidato',
  templateUrl: './buscar-candidato.component.html',
  styleUrls: ['./buscar-candidato.component.scss'],
  providers: [NgbPaginationConfig]
})

export class BuscarCandidatoComponent{
	 page = 4;
	public items = [
{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":50},
{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":50},
{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":50},
{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":50}	
];
 

  constructor(config: NgbPaginationConfig) { 
  	document.getElementById('search__aside').style.visibility = "visible";
  	document.getElementById('serach_principal').style.display = "none";
  	config.size = 'sm';
    config.boundaryLinks = true;

  }

  ngOnInit() {
  }


}
