import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LoginuserService } from '../service/loginuser.service';
import { NameuserService } from '../service/nameuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  loginData: any;
  message: string;

  constructor(
    private loginService: LoginuserService,
    public alertController: AlertController,
    private navCtrl: NavController,
    private userService: NameuserService
  ) {}

  ngOnInit() {}

  async loginUser() {
    this.email = document.getElementById('email');
    this.password = document.getElementById('password');

    const loginUser = {
      correo: this.email.value,
      pass: this.password.value,
    };

    await this.loginService.loginUser(loginUser).subscribe((r) => {
      this.loginData = r;
      console.log(this.loginData);

      if (this.loginData.data.status === 'ok') {
        this.userService.setUserName(this.loginData.data.username);

        this.navCtrl.navigateForward(`/home/${this.loginData.data.username}`);
      } else {
        this.message = 'Usuario o Contraseña Incorrectos';
        this.loginError(this.message);
      }
    });
  }

  async loginError(message) {
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
