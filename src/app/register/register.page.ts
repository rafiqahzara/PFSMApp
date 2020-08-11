import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
   'email': [
     { type: 'required', message: 'Email is required.' },
     { type: 'pattern', message: 'Enter a valid email.' }
   ],
   'password': [
     { type: 'required', message: 'Password is required.' },
     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
   ]
 };

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      //name: new FormControl('')
    })
  }

  tryRegister(value) {
    this.authService.registerUser(value).then(
      res => {
        let alertOptions = {
          header: "Account created",
          message: "For email: "+value.email,
          buttons: ['ok']
        }
        this.showAlert(alertOptions);
        this.authService.loginUser(value).then(() => {
          this.router.navigate(["/tabs"]);
        }).catch(() => {
          let alertOptions = {
            header: "Can't login",
            message: "Error logging you in",
            buttons: ['ok']
          };
          this.showAlert(alertOptions);
        });
      }, err => {
        let alertOptions = {
          header: "Cannot register",
          message: err.message,
          buttons: ['ok']
        };
        this.showAlert(alertOptions);
      }
    )
  }
  async showAlert(options){
    let alertDialog = await this.alertCtrl.create(options);
    return await alertDialog.present();
  }

}
