/**
 * Receita Digital
 * Definição da API da Receita Digital 
 *
 * OpenAPI spec version: 1.0.4
 * Contact: fran.fig@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DocumentoIdentidade } from './documentoIdentidade';


export interface FarmaciaFarmaceutico {
    /**
     * Código único do usuário do sistema
     */
    id?: string;
    /**
     * Código CPF do médico
     */
    cpf?: string;
    /**
     * Nome do Farmacêutico
     */
    nome?: string;
    crf?: DocumentoIdentidade;
    /**
     * Celular principal do responsável, será usado para validar ou assinar receitas
     */
    celular?: string;
    /**
     * e-mail principal do médico, será usado para validações e informes
     */
    email?: string;
}
