import { Component, OnInit } from '@angular/core';
import { DataService } from '../_shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  searchTerm;
  results = [];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.searchTerm = this.data.searchTerm;
    this.results = this.data.getResults(7);
  }

  show(r) {
    this.data.activePolicy = r;
    this.router.navigate(['policy']);
  }

}
