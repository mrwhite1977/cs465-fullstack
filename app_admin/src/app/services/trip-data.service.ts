import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
    ) { }

  baseUrl = 'http://localhost:3000/api/';
  url = 'http://localhost:3000/api/trips';

  getTrips() : Observable<Trip[]> {
    console.log('Inside TripDataService::getTrips');
    return this.http.get<Trip[]>(this.url);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    console.log('Inside TripDataService::addTrips');
    return this.http.post<Trip>(this.url, formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    console.log('Inside TripDataService::getTrip');
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    console.log('Inside TripDataService::addTrip');
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }

  // Call to our /login endpoint, returns JWT
  login(user: User, password: string) : Observable<AuthResponse> {
    // console.login('Inside TripDataService::login');
    return this.handleAuthAPICall('login', user, password)
  }

  // Call to our /register endpoint, create user and returns JWT
  register(user: User, password: string) : Observable<AuthResponse> {
    // console.log('Inside TripDataService::register');
    return this.handleAuthAPICall('register', user, password);
  }

  // Helper method to process both login and register methods
  handleAuthAPICall(endpoint: string, user: User, password: string) : Observable<AuthResponse> {
    // console.log(',Inside TripDataService::handleAuthAPICall');
    let formData = {
      name: user.name,
      email: user.email,
      password: password
    };

    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, formData);
  }
  
}