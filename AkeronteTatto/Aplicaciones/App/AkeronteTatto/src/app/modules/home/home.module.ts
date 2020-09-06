import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
//routing
import { HomeRoutingModule } from "./home-routing.module";
//components
import { InitComponent } from "./init/init.component";

@NgModule({
  declarations: [InitComponent],
  imports: [CommonModule, IonicModule, HomeRoutingModule],
})
export class HomeModule {}
