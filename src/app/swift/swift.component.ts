import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-swift',
  templateUrl: './swift.component.html',
  styleUrls: ['./swift.component.css']
})
export class SwiftComponent implements OnInit {


public topartists:any;


  constructor(private ar:ActivatedRoute,private spotser:SpotifyService) { }

  ngOnInit(): void {

let id=this.ar.snapshot.params.id

    this.spotser.getTopArtists(id).subscribe(

      data=>{
        this.topartists=data;
        },
      err=>{
        console.log("err is",err);


      });



  }

}
