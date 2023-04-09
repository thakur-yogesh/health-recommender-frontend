import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-onedis',
  templateUrl: './onedis.component.html',
  styleUrls: ['./onedis.component.css']
})
export class OnedisComponent {
  constructor(private _snackBar: MatSnackBar) {}

}
