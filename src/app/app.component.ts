import { Component, OnInit } from '@angular/core';
import { TVGuideAPIService } from './tvguideapi.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ TVGuideAPIService ],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  access_token = null
  channels = []
  channel = null
  programs = []
  countries = [
    {
      label: "United Kingdom",
      value: "gb"
    },
    {
      label: "USA",
      value: "us"
    },
    {
      label: "Italy",
      value: "it"
    },
    {
      label: "India",
      value: "in"
    },
    {
      label: "Netherlands",
      value: "nl"
    }
  ]
  selected_country = null

  constructor(private apiService: TVGuideAPIService){}

  ngOnInit() {
    this.apiService.login().subscribe(
      res => {
        this.access_token = res.access_token
        this.selectCountry({ value: "gb" })
      }
    )
  }

  selectCountry(event) {
    this.apiService.channelList(this.access_token, event.value).subscribe(
      res => {
        this.channels = res
        console.log(res)
      }
    )
  }

  selectChannel(event) {
    this.apiService.channelPrograms(this.access_token, event.data.id).subscribe(
      res => {
        this.programs = res
        console.log(res)
      }
    )
  }
}
