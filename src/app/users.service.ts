import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://ganorthpoleapi.azurewebsites.net/api/user')
  }

  getUserSingle(userId) {
    return this.http.get('https://ganorthpoleapi.azurewebsites.net/api/user/' + userId)
  }

  updateUser(userId, model) {
    return this.http.put("https://ganorthpoleapi.azurewebsites.net/api/user/" + userId, model)
  }

  deleteUser(userId) {
    return this.http.delete("https://ganorthpoleapi.azurewebsites.net/api/user/" + userId)
  }

  registerUser(model) {
    return this.http.post("https://ganorthpoleapi.azurewebsites.net/register", model)
  }
}
