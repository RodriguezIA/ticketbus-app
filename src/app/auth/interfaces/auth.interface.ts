export interface AuthResponse {
    ok: boolean;
    uid?: string;
    nombre?: string;
    apellido_paterno: string;
    apellido_materno: string;
    token?: string;
    msg?: string;
}

export interface Usuario {
    uid: string;
    nombre: string;
}