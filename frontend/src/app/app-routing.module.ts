import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'reg-estudiante', loadChildren: './reg-estudiante/reg-estudiante.module#RegEstudiantePageModule' },
  { path: 'reg-profesor', loadChildren: './reg-profesor/reg-profesor.module#RegProfesorPageModule' },  { path: 'reg-gr-mat', loadChildren: './reg-gr-mat/reg-gr-mat.module#RegGrMatPageModule' },
  { path: 'consulta-est', loadChildren: './consulta-est/consulta-est.module#ConsultaEstPageModule' },
  { path: 'reg-notas', loadChildren: './reg-notas/reg-notas.module#RegNotasPageModule' },
  { path: 'recuperarcont', loadChildren: './recuperarcont/recuperarcont.module#RecuperarcontPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
