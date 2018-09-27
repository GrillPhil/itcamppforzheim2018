import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class IncidentService {

    public incident: any;

    constructor(private http: HttpClient) {}

    private send() {
        let requestUrl = '';
        return this.http.post(requestUrl, this.incident);
    }
}