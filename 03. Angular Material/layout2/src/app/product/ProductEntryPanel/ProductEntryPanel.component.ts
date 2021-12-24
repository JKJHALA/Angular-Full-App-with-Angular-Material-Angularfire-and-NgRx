import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ProductEntryPanel',
  templateUrl: './ProductEntryPanel.component.html',
  styleUrls: ['./ProductEntryPanel.component.css']
})
export class ProductEntryPanelComponent implements OnInit {

  classList: string[] = ['50', '55', '60', '65','70','77','85','92','100','110','125','150','175','200','250','300','400','500'];
  
  constructor() { }

  ngOnInit() {
  }

}
