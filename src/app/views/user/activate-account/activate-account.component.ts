import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from '../../../_services/api_service';
@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent {


  constructor(private route: ActivatedRoute,private router : Router,private apiService : ApiService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if(params['code'] != null){          
          let code = params['code'];
          this.apiService.activate_account(code).pipe().subscribe(response =>{
            console.log(response);
          });
        }
        else{
          this.router.navigate(['/landing']);
        }         
      }
    );
  }
}
