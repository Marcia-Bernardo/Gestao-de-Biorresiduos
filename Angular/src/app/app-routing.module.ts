import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CreateCircuitComponent } from './circuit/create-circuit/create-circuit.component';
import { ReadCircuitComponent } from './circuit/read-circuit/read-circuit.component';
import { CreateCollectionComponent } from './collection/create-collection/create-collection.component';
import { ReadCollectionComponent } from './collection/read-collection/read-collection.component';
import { ReadOneCollectionComponent } from './collection/read-one-collection/read-one-collection.component';
import { ReadOneColletionCircuitComponent } from './circuit/read-one-colletion-circuit/read-one-colletion-circuit.component';
import { CreateContainerComponent } from './container/create-container/create-container.component';
import { ReadContainerComponent } from './container/read-container/read-container.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ReadEmployeeComponent } from './employee/read-employee/read-employee.component';
import { AdminComponent } from './menuAdmin/admin/admin.component';
import { ManagerComponent } from './menuManager/manager/manager.component';
import { MenuEmployeeComponent } from './menuEmployee/menu-employee/menu-employee.component';
import { MenuUserComponent } from './menuUser/menu-user/menu-user.component';
import { ReadUserComponent } from './user/read-user/read-user.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CompararComponent } from './comparar/comparar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadAnonimoComponent } from './collection/read-anonimo/read-anonimo.component';
import { ReadOneCircuitComponent } from './circuit/read-one-circuit/read-one-circuit.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { KeyRequestsComponent } from './key-requests/key-requests.component';
import { CreatekeyComponent } from './key/createkey/createkey.component';
import { ReadKeyComponent } from './key/read-key/read-key.component';







const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'registar', component:RegistarComponent},
  {path: 'registar/:id', component:RegistarComponent},
  {path: 'updateUser', component:UpdateUserComponent},
  {path: 'readUser', component:ReadUserComponent},
  {path: 'readUser:id', component:ReadUserComponent},
  {path: 'perfil',component:PerfilComponent},
  {path: 'createCircuit', component:CreateCircuitComponent},
  {path: 'createCircuit/:id', component:CreateCircuitComponent},
  {path: 'readCircuit', component:ReadCircuitComponent},
  {path: 'readCircuit/:id', component:ReadCircuitComponent},
  {path: 'readOneCircuit/:id', component:ReadOneCircuitComponent},
  {path: 'createCollection', component:CreateCollectionComponent},
  {path: 'readCollection', component:ReadCollectionComponent},
  {path: 'readOneCollection/:id', component:ReadOneCollectionComponent},
  {path: 'readOneColletionCircuit/:id', component:ReadOneColletionCircuitComponent},
  {path: 'createContainer', component:CreateContainerComponent},
  {path: 'createContainer/:id', component:CreateContainerComponent},
  {path: 'readContainer', component:ReadContainerComponent},
  {path: 'readContainer/:id', component:ReadContainerComponent},
  {path: 'createEmployee', component:CreateEmployeeComponent},
  {path: 'createEmployee/:id', component:CreateEmployeeComponent},
  {path: 'readEmployee', component:ReadEmployeeComponent},
  {path: 'readEmployee/:id', component:ReadEmployeeComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'manager', component:ManagerComponent},
  {path: 'menuEmployee', component:MenuEmployeeComponent},
  {path: 'menuUser', component:MenuUserComponent},
  {path: '', component:MenuPrincipalComponent},
  {path: 'comparar',component:CompararComponent},
  {path: 'readAnonimo', component:ReadAnonimoComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'keyRequest', component:KeyRequestsComponent},
  {path: 'createKey', component:CreatekeyComponent},
  {path: 'createKey/:id', component:CreatekeyComponent},
  {path: 'readKey', component:ReadKeyComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
