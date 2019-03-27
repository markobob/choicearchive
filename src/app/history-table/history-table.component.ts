import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DataService } from '../_shared/data.service';

export interface UserData {
  date: string;
  value: string;
  transaction: string;
  amount: string;
  narrative: string;
}

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit, AfterViewInit {

  history = [
    {date: 'x-x-x-x'},
    {value: 'x-x-x-x'},
    {transaction: 'x-x-x-x'},
    {amount: 'x-x-x-x'},
    {narrative: 'x-x-x-x'},
  ];

  displayedColumns: string[] = ['date', 'value', 'transaction', 'amount', 'narrative'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private data: DataService) {

    this.dataSource = new MatTableDataSource(this.data.fabricateHistory(48));
   }

  ngOnInit() {
  }

  ngAfterViewInit () {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
