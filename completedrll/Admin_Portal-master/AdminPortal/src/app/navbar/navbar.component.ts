import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { PrimaryTransactionComponent } from '../primary-transaction/primary-transaction.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	[x: string]: any;

  loggedIn: boolean;

	constructor(private loginService: LoginService, private router : Router) {
		if(localStorage.getItem('PortalAdminHasLoggedIn') == '') {
			this.loggedIn = false;
		} else {
			this.loggedIn = true;
		}
	}

	logout(){
		//this.loginService.logout().subscribe(
			//res => {
				//this.loggedIn=false;
			    //localStorage.setItem('PortalAdminHasLoggedIn', '');
				//localStorage.removeItem('PortalAdminHasLoggedIn');
			//},
			//err => console.log(err)
			//);
		this.loggedIn=false;
		//localStorage.setItem('PortalAdminHasLoggedIn', '');
		//localStorage.removeItem('PortalAdminHasLoggedIn');
		//localStorage.setItem('PortalAdminHasLoggedIn', '');
		localStorage.clear();
		localStorage.setItem('PortalAdminHasLoggedIn', '');
		//location.reload();
		this.router.navigate(['/login']);
	}

	getDisplay() {
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }

  getPrimaryTransactionList() {
	this.userService.getPrimaryTransactionList(this.userAcc).subscribe(
		res => {
			console.log(JSON.parse(JSON.stringify(res))._body);
			this.primaryTransactionList = JSON.parse(JSON.stringify(res));
		  },
		  error => console.log(error)
	)
}
  ngOnInit() {
  }

}
