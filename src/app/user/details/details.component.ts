import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public userDetails;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe( res => {
      this.userDetails = res;
    }, error => console.error(error));
  }

}
