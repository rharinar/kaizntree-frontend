import {LiveAnnouncer} from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  sku: string;
  tags: [];
  category: string;
  in_stock: number;
  available_stock: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {sku: '1', name: 'Hydrogen', category: 'XYVASSA', in_stock: 12.232, available_stock: 32.83, tags: []},
  {sku: '2', name: 'Helium', category: 'XYVASSA', in_stock: 12.232, available_stock: 32.83, tags: []},
  {sku: '3', name: 'Lithium', category: 'XYVASSA', in_stock: 12.232, available_stock: 32.83, tags: []},
  {sku: '4', name: 'Beryllium', category: 'XYVASSA', in_stock: 12.232, available_stock: 32.83, tags: []},
  {sku: '5', name: 'Boron', category: 'XYVASSA', in_stock: 12.232, available_stock: 32.83, tags: []},
  {sku: '6', name: 'Carbon', category: 'XYVASSA', in_stock: 12.232, available_stock: 32.83, tags: []},
  {sku: '7', name: 'Nitrogen', category: 'XYVASSA', in_stock: 12.232, available_stock: 32.83, tags: []},
  {sku: '8', name: 'Oxygen', category: 'XYVASSA', in_stock: 12.232, available_stock: 32.83, tags: []},
  {sku: '9', name: 'Fluorine', category: 'XYVASSA', in_stock: 12.232, available_stock: 32.83, tags: []},
  {sku: '1', name: 'Neon', category: 'XYVASSA', in_stock: 12.232, available_stock: 32.83, tags: []}
];

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrl: './dashboard-table.component.scss'
})
export class DashboardTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'sku', 'name', 'category', 'in_stock', 'available_stock'];
  // 'tags',
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  
}
