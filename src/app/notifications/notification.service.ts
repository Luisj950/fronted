import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'https://backend-3f8c.onrender.com';

  constructor(private http: HttpClient) {}

 sendNotification(message: string, type: string): Observable<any> {
  const payload = { message, type }; // ✅ Sin created_at
  return this.http.post(this.apiUrl, payload);
}

  getNotifications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}


