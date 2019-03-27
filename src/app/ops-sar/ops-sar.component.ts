import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_shared/data.service';

@Component({
  selector: 'app-ops-sar',
  templateUrl: './ops-sar.component.html',
  styleUrls: ['./ops-sar.component.scss']
})
export class OpsSarComponent implements OnInit {

  searchTerm;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
  }

  search() {
    this.data.searchTerm = this.searchTerm;
    this.router.navigate(['results']);
  }


}
