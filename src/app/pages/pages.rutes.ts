import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {HomeComponent} from "./home/home.component";
import {BuscarCandidatoComponent} from "./buscar-candidato/buscar-candidato.component";
import {AsignacionPerfilesComponent} from "./asignacion-perfiles/asignacion-perfiles.component";

import {AutorizacionesComponent} from "./autorizaciones/autorizaciones.component";
import {CandidatosComponent} from "./candidatos/candidatos.component";
import {EdicionDocumentosElectronicosComponent} from "./edicion-documentos-electronicos/edicion-documentos-electronicos.component";
import {EdicionDocumentosParametriaComponent} from "./edicion-documentos-parametria/edicion-documentos-parametria.component";
import {EditarOfertaComponent} from "./editar-oferta/editar-oferta.component";
import {EditarPreOfertaComponent} from "./editar-pre-oferta/editar-pre-oferta.component";
import {PreguntasDeControlComponent} from "./preguntas-de-control/preguntas-de-control.component";

const pagesRoutes: Routes = [
    {
      path: '', component: PagesComponent,
      children: [
        {path: 'home', component: HomeComponent},
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'buscar-candidato', component: BuscarCandidatoComponent},
        {path: 'asignacion-perfiles',component:AsignacionPerfilesComponent},
        {path: 'autorizaciones', component: AutorizacionesComponent},
        {path: 'candidatos', component: CandidatosComponent},
        {path: 'edicion-documentos-electronicos', component: EdicionDocumentosElectronicosComponent},
        {path: 'edicion-documentos-parametria', component: EdicionDocumentosParametriaComponent},
        {path: 'editar-oferta', component: EditarOfertaComponent},
        {path: 'editar-pre-oferta', component: EditarPreOfertaComponent},
        {path: 'preguntas-de-control', component: PreguntasDeControlComponent}

      ]
    }
  ];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);