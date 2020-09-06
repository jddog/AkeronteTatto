import { Component, OnInit } from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from "@angular/router";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "customer-front";
  loading: boolean = false;

  public selectedIndex = 0;
  public appPages = [
    {
      title: "Inicio",
      url: "/home",
      icon: "home",
    },
    {
      title: "Outbox",
      url: "/folder/Outbox",
      icon: "paper-plane",
    },
    {
      title: "Favorites",
      url: "/folder/Favorites",
      icon: "heart",
    },
    {
      title: "Archived",
      url: "/folder/Archived",
      icon: "archive",
    },
    {
      title: "Trash",
      url: "/folder/Trash",
      icon: "trash",
    },
    {
      title: "Spam",
      url: "/folder/Spam",
      icon: "warning",
    },
  ];

  constructor(private router: Router, private menu: MenuController) {
    window["version"] = "0.0.6";
  }

  ngOnInit(): void {
    /*this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.loading = true;
          break;

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
          this.loading = false;
          break;
        default:
          break;
      }
    });*/
  }
}
