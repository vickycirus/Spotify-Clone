import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {

public topplaylists:any;

  constructor(private ar:ActivatedRoute,private spotser:SpotifyService) { }

  ngOnInit(): void {

    let key=this.ar.snapshot.params.key

    this.spotser.getHome(key).subscribe(

      data=>{
        this.topplaylists=data;
        },
      err=>{
        console.log("err is",err);


      });



  }

}
