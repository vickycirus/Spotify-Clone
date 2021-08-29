import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {


  constructor(private ht:HttpClient) { }


   getAllArtists(searchQuery: string):Observable<any>{

     return this.ht.get<any>("https://shazam.p.rapidapi.com/search",{
      "headers": {
        'x-rapidapi-key': 'b567eea31emshd7f6eee982fe85dp199a6bjsn4f20988ed137',
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
      },"params" :{
       "term": searchQuery,
       "locale": "en-US",
	     "offset": "0",
	     "limit": "5"
      }


   });
  }




  getAllRecommended(reco:number):Observable<any>{

    return this.ht.get<any>("https://shazam.p.rapidapi.com/songs/list-recommendations",{
      "headers": {
        'x-rapidapi-key': 'b567eea31emshd7f6eee982fe85dp199a6bjsn4f20988ed137',
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
      },"params" :{
      "key": reco,
	    "locale": "en-US"
     }


  });
 }

getTopArtists(id1:number):Observable<any>{

return this.ht.get<any>("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks",{

  "headers": {
    'x-rapidapi-key': 'b567eea31emshd7f6eee982fe85dp199a6bjsn4f20988ed137',
    'x-rapidapi-host': 'shazam.p.rapidapi.com'
  },"params":
  {id: id1, locale: 'en-US'},

});

}

getHome(key1:number):Observable<any>{

  return this.ht.get<any>("https://shazam.p.rapidapi.com/songs/list-recommendations",{
    "headers": {
      'x-rapidapi-key': 'b567eea31emshd7f6eee982fe85dp199a6bjsn4f20988ed137',
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    },"params":
    {key: key1 , locale: 'en-US'},



  });


}



 getJustinHits():Observable<any>{

  return this.ht.get<any>("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks",{

    "headers": {
      'x-rapidapi-key': 'b567eea31emshd7f6eee982fe85dp199a6bjsn4f20988ed137',
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    },"params":
    {id: 40543550, locale: 'en-US'},

});

}



getbts():Observable<any>{

  return this.ht.get<any>("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks",{
    "headers": {
      'x-rapidapi-key': 'b567eea31emshd7f6eee982fe85dp199a6bjsn4f20988ed137',
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    },"params":
    {id: 43082567, locale: 'en-US'},

});

}





  userLoginStatus():boolean{

    if(localStorage.getItem("username")==null)
    return false;

    else
    return true;
  }

userLogout(){
  localStorage.clear();
}


}
