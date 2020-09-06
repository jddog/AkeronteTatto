import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InitComponent } from "./init/init.component";
import { ArtistComponent } from "./artist/artist.component";
import { RequestTattoComponent } from "./request-tatto/request-tatto.component";

const routes: Routes = [
  {
    path: "",
    component: InitComponent,
  },
  {
    path: "artist",
    component: ArtistComponent,
  },
  {
    path: "request-tatto",
    component: RequestTattoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
