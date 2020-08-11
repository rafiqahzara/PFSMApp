import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Profile, ProfileService } from './../services/profile.service';
import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.page.html',
  styleUrls: ['./addprofile.page.scss'],
})
export class AddprofilePage implements OnInit {

  profile: Profile = {
    name: "",
    age:  undefined,
    skintype: "",
    skinconcern: "",

    email:""
  };

  useremail: string;


  constructor(
    private profileService: ProfileService,
    private toastCtrl: ToastController,
    private router: Router,
    private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute, 
  ) { }

  ngOnInit() {

    
    if(this.authService.getCurrentUser() == null) {
      this.router.navigate(['/login']);
    }else{
      this.useremail = this.authService.getCurrentUser().email;
    }

    //this.profile.email = this.authService.getCurrentUser().uid;

  
  }

  ionViewWillEnter(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  if(id){
     this.profileService.getProfile(id).subscribe( profile => {
    this.profile = profile;
  });
  }
}//stop

addProfile() {  
  this.profileService.addProfile(this.profile).then(() => {  
    this.router.navigateByUrl('/profile');  
    this.showToast('profile added');  
  }, err => {  
    this.showToast('There was a some problem in adding your profile :(');  
  });  
}

showToast(msg) {  
  this.toastCtrl.create({  
    message: msg,  
    duration: 2000  
  }).then(toast => toast.present());  
}

}
