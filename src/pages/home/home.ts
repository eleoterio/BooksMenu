import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RedditServiceProvider } from '../../providers/reddit-service/reddit-service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

	public lista: Array<string>;
	private urlBase = "https://www.googleapis.com/books/v1/volumes";
  	private url: string = "https://www.googleapis.com/books/v1/volumes?q=:&maxResults=20";  
  	public noFilter: Array<any>;
  	public searchTerm: string = '';
  	public fav: string = '';

  	constructor(private storage: Storage,public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public redditServiceProvider: RedditServiceProvider) {
    	this.fetchContent();
  	}

  	fetchContent ():void {
	    let loading = this.loadingCtrl.create({
	      content: 'Carregando...'
	    });

	    loading.present();

		this.redditServiceProvider.fetchData(this.url).then(items => {
		    this.lista = items;
		    this.noFilter = this.lista;
		    loading.dismiss();
		});
  	}

  	itemSelected (item):void {
  		if(item.volumeInfo.description){
  			alert(item.volumeInfo.description);
  		} else {
  			alert("Sem descrição.");
  		}
		
	} 

	doInfinite (infiniteScroll) {
        this.http.get(this.newUrl())
	        .map(res => res.json())
	        .subscribe(items => {	        
	          this.lista= this.lista.concat(items.items);         
	          infiniteScroll.complete();
	        }); 	    
  	} 

  	newUrl ():string {
  		return this.url + "&startIndex=" + this.lista.length;
  	}

  	filterItems() {
		this.url = this.urlBase + "?q=" + this.searchTerm + ":&maxResults=20"
		this.lista = [];
		this.http.get(this.url)
	        .map(res => res.json())
	        .subscribe(items => {	        
	          this.lista= this.lista.concat(items.items); 
	        }); 
	} 

	itemFavorito (item):void {
		window.localStorage.setItem(item.id, item.volumeInfo.title + item.volumeInfo.authors);
	}

	itemCompra (item):void {
		window.sessionStorage.setItem(item.id, item.volumeInfo.title + item.volumeInfo.authors);
	}
}
