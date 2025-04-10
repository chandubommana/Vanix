import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://google-map-places-new-v2.p.rapidapi.com/v1/places:autocomplete';

  constructor(private http: HttpClient) {}

  getPlacesAutocomplete() {
    const headers = new HttpHeaders({
      'x-rapidapi-key': '784b8b6ca0msh4be3862b2776056p1076d1jsn29143bb66889',
      'x-rapidapi-host': 'google-map-places-new-v2.p.rapidapi.com',
      'Content-Type': 'application/json',
      'X-Goog-FieldMask': '*'
    });

    const body = {
      input: 'Restaurant',
      locationBias: {
        circle: {
          center: {
            latitude: 40,
            longitude: -110
          },
          radius: 10000
        }
      },
      includedPrimaryTypes: [],
      includedRegionCodes: [],
      languageCode: '',
      regionCode: '',
      origin: {
        latitude: 0,
        longitude: 0
      },
      inputOffset: 0,
      includeQueryPredictions: true,
      sessionToken: ''
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
