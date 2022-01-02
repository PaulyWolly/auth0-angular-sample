import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-toast',
  templateUrl: './bootstrap-toast.component.html',
  styleUrls: ['./bootstrap-toast.component.css']
})
export class BootstrapToastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// tslint:disable-next-line: prefer-const
// const toastTrigger = document.getElementById('liveToastBtn');
// const toastLiveExample = document.getElementById('liveToast');
// if (toastTrigger) {
//         // tslint:disable-next-line: typedef
//         toastTrigger.addEventListener('click', function() {
//           let toast = new bootstrap.Toast(toastLiveExample);

//           toast.show();
//         });
//       }
