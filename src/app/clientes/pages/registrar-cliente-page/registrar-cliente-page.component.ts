import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../interfaces/Cliente.interface';
import { ClientesService } from '../../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cliente-page',
  templateUrl: './registrar-cliente-page.component.html'
})
export class RegistrarClientePageComponent implements OnInit{

  registroForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private clienteService: ClientesService
  ){}

   ngOnInit() {
    this.registroForm = this.fb.group({
      numeroIdentificacion: ['', Validators.required],
      nombreCompleto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
      direccion: ['']
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const cliente: Cliente = this.registroForm.value;
      console.log('Datos del formulario:', cliente);
      // Aquí se llama al servicio para registrar cliente
      this.clienteService.registrarCliente(cliente)
        .subscribe({
          next: (response) => {
            if (response && response.id) {
              console.log("Registro exitoso:", response);
              // reedireccionar
              this.router.navigateByUrl('clientes/clientes');
            } else {
              console.error("Registro fallido: respuesta inválida");
            }
          },
          error: (err) => {
            console.error("Error al registrar cliente:", err);
          }
        });
    } else {
      console.log('Formulario inválido');
      this.registroForm.markAllAsTouched(); // Para mostrar errores
    }
  }

}
