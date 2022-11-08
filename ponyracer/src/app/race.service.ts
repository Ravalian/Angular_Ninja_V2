import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaceModel } from './models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://ponyracer.ninja-squad.com';

  list(): Observable<Array<RaceModel>> {
    return this.http.get<Array<RaceModel>>(`${this.baseUrl}/api/races?status=PENDING`);
  }
}
