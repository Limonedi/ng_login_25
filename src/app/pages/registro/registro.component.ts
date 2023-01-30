import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmaciaSerService } from 'src/app/services/farmacia-ser.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister!: FormGroup;

  constructor(private farmaciaService:FarmaciaSerService, private router:Router) {
    this.formRegister = new FormGroup({
      producto: new FormControl(),
      costo: new FormControl(),
      foto: new FormControl()
    })
  }
  ngOnInit(): void {

  }

  onSubmit() {
    //console.log(this.formRegister.value);
    const response = this.farmaciaService.addProduct(this.formRegister.value)
    
    console.log(response)
    this.router.navigate(['/lista'])
    
  }
}
