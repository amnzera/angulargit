import { Component, OnInit } from '@angular/core';
import { ApiGitService } from 'src/app/services/apiGit.service';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public userObj: any[] | undefined;
  public userObj: any
  public picture: any

  constructor(private apiService: ApiGitService) { }

  ngOnInit() {
    this.getUserSearch()
  }

  getUserSearch(){
    this.apiService.searchUser('amnzera')
      .pipe(
        finalize(() => {
          this.apiService.getPicture(this.userObj.items[0].avatar_url).subscribe((r) => {
            console.log(r)
            const blob = new Blob([r], {
              type: 'image/png',
            });
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              if (reader.result) {
                console.log(reader.result.toString());
              }
            };
          })
          console.log(this.userObj.items[0].avatar_url)
        }),
      )
      .subscribe(response => {
        this.userObj = response.body
      })
  }


}
