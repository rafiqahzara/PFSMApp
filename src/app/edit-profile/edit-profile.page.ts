import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Profile, ProfileService } from './../services/profile.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

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
    //private loadingCtrl: LoadingController,
    //private alertCtrl: AlertController,
    //private navCtrl: NavController,
    private toastCtrl: ToastController,
    private router: Router,
    private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute, 
  ) { 
    
  }
 
  ngOnInit() {


    if(this.authService.getCurrentUser() == null) {
      this.router.navigate(['/login']);
    }else{
      this.useremail = this.authService.getCurrentUser().email;
    }

    //this.profile.profid = this.authService.getCurrentUser().uid;
    
  }

  ionViewWillEnter(){
      const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
       this.profileService.getProfile(id).subscribe( profile => {
      this.profile = profile;
    });
    }
  }
/*
  addProfile() {  
    this.profileService.addProfile(this.profile).then(() => {  
      this.router.navigateByUrl('/profile');  
      this.showToast('profile added');  
    }, err => {  
      this.showToast('There was a some problem in adding your profile :(');  
    });  
  }  
 */ 
 
  updateProfile() {  
    this.profileService.updateProfile(this.profile).then(() => {  
      this.router.navigateByUrl('/profile');  
      this.showToast('profile updated');  
    }, err => {  
      this.showToast('There was a some problem in updating your profile :(');  
    });  
  }  
  
  showToast(msg) {  
    this.toastCtrl.create({  
      message: msg,  
      duration: 2000  
    }).then(toast => toast.present());  
  } 

  deleteProfile(){
    this.profileService.deleteProfile(this.profile.id).then(
      () => {
        this.router.navigateByUrl('/profile');  
        this.showToast('delete profile');
      }, err => {
        this.showToast('Cannot delete');
      }
    );
  }

}
