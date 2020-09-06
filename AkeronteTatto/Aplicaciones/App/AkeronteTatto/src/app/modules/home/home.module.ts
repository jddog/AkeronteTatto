import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
//routing
import { HomeRoutingModule } from "./home-routing.module";
//components
import { InitComponent } from "./init/init.component";
import { ArtistComponent } from "./artist/artist.component";
import { RequestTattoComponent } from "./request-tatto/request-tatto.component";

@NgModule({
  declarations: [InitComponent, ArtistComponent, RequestTattoComponent],
  imports: [CommonModule, IonicModule, HomeRoutingModule],
})
export class HomeModule {}
