import { Component, OnInit } from '@angular/core';
import { ApibackendService } from '../apibackend.service';

@Component({
  selector: 'app-addfiles',
  templateUrl: './addfiles.component.html',
  styleUrls: ['./addfiles.component.scss']
})
export class AddfilesComponent implements OnInit {

  constructor(private api: ApibackendService) { }

  ngOnInit() {
    this.api.isRoleZero();
  }

}
