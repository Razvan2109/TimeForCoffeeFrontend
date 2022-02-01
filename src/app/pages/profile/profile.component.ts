import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfoComponent } from 'src/app/shared/user-info/user-info.component';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userName: string = '';
  public user: any= null;


  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params);
      this.userName = params['username'];
      console.log(this.userName);
      this.user=this.profileService.getProfile(this.userName).subscribe((response:any)=>{
        this.user=response;
        console.log(this.user);
      });
    });

    this.activatedRoute.queryParams.subscribe((qPrams: any) => {
      console.log(qPrams);
    });
  }
}
