import { Component, OnInit } from '@angular/core';
import { RegisteruserService } from '../service/registeruser.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user: any;
  email: any;
  password: any;
  isRegister: any;
  message: string;

  constructor(
    private userService: RegisteruserService,
    public alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async register() {
    this.user = document.getElementById('name');
    this.email = document.getElementById('email');
    this.password = document.getElementById('password');

    const user = {
      name: this.user.value,
      email: this.email.value,
      password: this.password.value,
    };

    await this.userService.registerNewUser(user).subscribe((r) => {
      this.isRegister = r;
      if (this.isRegister.message === 'user created') {
        this.message = 'Registro Existoso';
        this.registerSuccess(this.message);
      } else {
        this.message = 'Registro Fallido';
        this.registerError(this.message);
      }
    });

    // console.log(user);
  }

  async registerSuccess(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: 'Atencion',
      message: `${message}`,
      buttons: [
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: (blah) => {
            this.navCtrl.navigateForward(`/login`);
          },
        },
      ],
    });

    await alert.present();
  }
  async registerError(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: 'Atencion',
      message: `${message}`,
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
