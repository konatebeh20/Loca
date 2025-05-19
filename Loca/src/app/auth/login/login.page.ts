import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonContent, IonImg, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonImg, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    // private http: AuthService,
    // private loadingCtrl: LoadingController,
    // private toastController: ToastController,
    // private faio: FingerprintAIO,
    // private pushNotificationService: PushNotificationService
  ) { }

  data: any;
  connect_btn = false;

  login_form = new FormGroup({
    identifier: new FormControl(null, Validators.required),
    password_hash: new FormControl(null, Validators.required),

  })

  // onSubmit() {
  //   this.showLoading(); 
  //   this.http.login(this.login_form.value).subscribe({
  //     next: (response: any) => {
  //       this.data = response;
  //       console.log('mon data est', this.data);
        
  //       // $.cookie('isLoggedIn', true, { expires: 1, path: '/' });
  //       // sessionStorage.setItem('admin_infos', JSON.stringify(this.data));
  //       // sessionStorage.setItem('KL_PASS_INTRO', 'true');
  //       this.http.saveToken('isLoggedIn', 'true')
  //       this.http.saveToken('admin_infos', JSON.stringify(this.data))
  //       // this.http.saveToken('KL_PASS_INTRO', 'true')
  //       this.router.navigate(['/user']);
  //     },
  //     error: (error: any) => {
  //       console.error(error);
  //       if (error.status === 'error') {
  //         setTimeout(() => {
  //           if (error && error.error && error.error.message) {
  //             this.presentStackedToast(error.error.message);
  //           } else {
  //             this.presentStackedToast('Une erreur est survenue.');
  //           }
  //         }, 1000);
  //       }
  //       this.loadingCtrl.dismiss();
  //     },
  //     complete: () => {
  //       console.log('complete');
  //       this.loadingCtrl.dismiss(); 
  //     }
  //   });
  // }

  ngOnInit() {
  }

}
