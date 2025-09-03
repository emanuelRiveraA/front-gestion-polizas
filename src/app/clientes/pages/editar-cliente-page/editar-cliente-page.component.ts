import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../interfaces/Cliente.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-editar-cliente-page',
  templateUrl: './editar-cliente-page.component.html'
})
export class EditarClientePageComponent implements OnInit {

  registroForm!: FormGroup;
  cliente?: Cliente;
  clienteID?: number;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClientesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.clienteService.consultarClienteById(id))
      )
      .subscribe( cliente => {

        if(!cliente){
          return this.router.navigateByUrl('');
        }

         console.log( cliente );
         return this.cliente = cliente;
    });

    this.registroForm = this.fb.group({
      numeroIdentificacion: ['', Validators.required],
      nombreCompleto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
      direccion: ['',Validators.required]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const clienteForm: Cliente = this.registroForm.value;
      console.log('Datos del formulario:', clienteForm);
      // Aquí se llama al servicio para registrar cliente
      this.clienteID = this.cliente?.id;
      this.clienteService.editarCliente(clienteForm, this.clienteID)
        .subscribe({
          next: (response) => {
            if (response && response.id) {
              console.log("Registro exitoso:", response);
              // reedireccionar
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
