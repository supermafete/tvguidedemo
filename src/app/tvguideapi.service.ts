import { Injectable } from '@angular/core'
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class TVGuideAPIService {

  constructor(private http:Http){}

  login(): Observable<any> {
    var headers = {
      "content-type": "application/x-www-form-urlencoded"
    }

    var body = {
      client_id: "ZdQX8GcSOc1lIZSB",
      client_secret: "ODtUPpwLSMtQE79zC1zHXU1BPvmsG4iD",
      grant_type: "client_credentials"
    }

    var response = this.http.post("http://v1.tvguideapi.com/oauth/access_token", body, headers)
    .map(response => <any> response.json())

    return response
  }

  channelList(token, country): Observable<any[]> {
    var headers = new Headers()

    headers.append("Authorization", token)

    var response = this.http.get("http://v1.tvguideapi.com/channels?countries[]="+country, { headers: headers })
    .map(response => <any[]> response.json())

    return response
  }

  channelPrograms(token, channel_id): Observable<any[]> {
    var headers = new Headers()

    headers.append("Authorization", token)

    var response = this.http.get("http://v1.tvguideapi.com/programs/current?channels[]=" + channel_id + "&next_programs=15", { headers: headers })
    .map(response => <any[]> response.json())

    return response
  }

}
