import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_shared/data.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  searchTerm;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
  }

  search() {
    this.data.searchTerm = this.searchTerm;
    this.router.navigate(['results']);
  }

}
