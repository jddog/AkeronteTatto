import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "customer-front";
  loading: boolean = false;
  modoWeb: boolean;

  public selectedIndex = 0;
  public appPages = [
    {
      title: "Inicio",
      url: "home",
      icon: "home",
      nameTab: "inicio",
    },
    {
      title: "Artistas",
      url: "home/artist",
      icon: "color-palette",
      nameTab: "artistas",
    },
    {
      title: "Cotizar",
      url: "home/request-tatto",
      icon: "calendar",
      nameTab: "cotizar",
    },
    {
      title: "Perfil",
      url: "auth",
      icon: "person-circle",
      nameTab: "perfil",
    },
  ];

  constructor(public plt: Platform) {
    window["version"] = "0.0.6";
    this.modoWeb = plt.is("desktop");
  }

  ngOnInit(): void {}
}
