export interface Cliente {
    id:                   number;
    numeroIdentificacion: string;
    nombreCompleto:       string;
    correo:               string;
    telefono:             string;
    direccion:            string;
    polizas:              Poliza[];
}

export interface Poliza {
    id:              number;
    tipoPoliza:      string;
    fechaInicio:     Date;
    fechaExpiracion: Date;
    montoAsegurado:  number;
    estado:          string;
}
