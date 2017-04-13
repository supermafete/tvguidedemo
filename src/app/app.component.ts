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
  channeldd = ""
  channel = {
    value: "Select country and channel",
    image_url: "http://www.dnbr.com.br/dnbr/uploads/2015/02/39-128.png"
  }
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
        this.selected_country = "gb"
        this.selectCountry({ value: "gb" })
      }
    )
  }

  selectCountry(event) {
    this.apiService.channelList(this.access_token, event.value).subscribe(
      res => {
        this.channels = []
        var self = this
        res.forEach(function(channel) {
          self.channels.push({
            image_url: channel.image_url,
            value: channel.id,
            label: channel.name
          })
        })

        this.channeldd = this.channels[0].value

        self.selectChannel({
          value: self.channels[0].value
        })
      }
    )
  }

  selectChannel(event) {
    var self=this
    this.programs = []
    this.channels.forEach(function(channel) {
      if (channel.value == event.value) {
        self.channel = channel
        return
      }
    })

    this.apiService.channelPrograms(this.access_token, event.value).subscribe(
      res => {
        this.programs = res
        console.log(res)
      }
    )
  }
}
