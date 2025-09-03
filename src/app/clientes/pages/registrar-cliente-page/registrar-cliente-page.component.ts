import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../interfaces/Cliente.interface';

@Component({
  selector: 'app-registrar-cliente-page',
  templateUrl: './registrar-cliente-page.component.html'
})
export class RegistrarClientePageComponent implements OnInit{

  registroForm!: FormGroup;

  constructor(private fb: FormBuilder){}

   ngOnInit() {
    this.registroForm = this.fb.group({
      identificacion: ['', Validators.required],
      nombreCompleto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
      direccion: ['']
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const datos: Cliente = this.registroForm.value;
      console.log('Datos del formulario:', datos);
      // Aquí puedes llamar a un servicio para guardar los datos, etc.
    } else {
      console.log('Formulario inválido');
      this.registroForm.markAllAsTouched(); // Para mostrar errores
    }
  }

}
