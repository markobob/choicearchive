import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_shared/data.service';

@Component({
  selector: 'app-ops-pol',
  templateUrl: './ops-pol.component.html',
  styleUrls: ['./ops-pol.component.scss']
})
export class OpsPolComponent implements OnInit {

  searchTerm;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
  }

  search() {
    this.data.searchTerm = this.searchTerm;
    this.router.navigate(['results']);
  }

}
