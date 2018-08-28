import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objetoFeed = {
    titulo: "Matheus Mendes Diniz",
    data: "November 6, 1997",
    descricao: "Estou tentando fazer um app.",
    qntdLikes: "4 Likes",
    qntdComents: "5 coments",
    timeComents: "18h ago"
  }

  public listaVideos = new Array<any>();

  nomeUsuario:string = "Matheus Diniz";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private moovieProvider: MoovieProvider) {
  }

  ionViewDidLoad() {
    this.moovieProvider.getLatesMovies().subscribe(
      data=>{
        const response = (data as any);
        const objetoRetorno = JSON.parse(response._body);
        this.listaVideos = objetoRetorno.results;
        console.log(objetoRetorno);
      }, error =>{
        console.log(error);
      }
    )
  }

}
