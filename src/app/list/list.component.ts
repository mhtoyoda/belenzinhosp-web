import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Banner } from '../banner/banner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.post('https://reqres.in/api/users', {'name': 'morpheus', 'job': 'leader'}).subscribe(resposta => {
      console.log(resposta);
    });
  }

}
