import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  navigation_items:any =[
  {"navigation__text":"Edición de documentos parametría","routerLink":"/edicion-documentos-parametria" },
{"navigation__text":"Edición de autorizaciones","routerLink":"/autorizaciones" },
{"navigation__text":"Asignación perfiles usuario","routerLink":"/asignacion-perfiles" },
{"navigation__text":"Edición documentos electrónicos","routerLink":"/edicion-documentos-electronicos" },
{"navigation__text":"Editar formato información pre-oferta","routerLink":"/editar-pre-oferta" },
{"navigation__text":"Editar formato información oferta","routerLink":"/editar-oferta" },
{"navigation__text":"Edición de preguntas de control","routerLink":"/preguntas-de-control" },
{"navigation__text":"Dar de baja candidatos > a 60 dias","routerLink":"/candidatos" },
{"navigation__text":"Cerrar sesión","routerLink":"/home" }
  ];

  userName:string='Pepito Rodríguez';

  constructor() { }

  ngOnInit() {
  }

  public searchPrincipal(siguiente: string) {
    classie.toggle(document.getElementById(siguiente), 'search--open');
    document.getElementById(siguiente).style.visibility = "visible";
    classie.remove(document.getElementById('megamenu__aside'), 'megamenu--open');
    classie.toggle(document.getElementById('megamenu__aside'), 'invisible');
    document.getElementById('serach_principal').style.display = "block";
    document.getElementById('serach_secundario').style.display = "none";
  }

  public menuPrincipal(siguiente: string) {
    classie.toggle(document.getElementById(siguiente), 'megamenu--open');
    classie.remove(document.getElementById(siguiente), 'invisible');
    classie.remove(document.getElementById('search__aside'), 'search--open');
    document.getElementById('search__aside').style.visibility = "visible";
    classie.toggle(document.getElementById('close'), 'display_none');
    classie.toggle(document.getElementById('open'), 'display_none');
  }
}
