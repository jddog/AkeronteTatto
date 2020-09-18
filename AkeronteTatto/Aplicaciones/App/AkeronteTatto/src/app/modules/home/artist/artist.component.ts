import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.scss"],
})
export class ArtistComponent implements OnInit {
  imagenes = [
    "../../../../assets/images/galeria/mono/tatto1.jpg",
    "../../../../assets/images/galeria/mono/tatto2.jpg",
    "../../../../assets/images/galeria/mono/tatto3.jpg",
    "../../../../assets/images/galeria/mono/tatto4.jpg",
    "../../../../assets/images/galeria/mono/tatto5.jpg",
  ];

  constructor() {}

  ngOnInit() {}
}
