/**
 * Receita Digital
 * Definição da API da Receita Digital 
 *
 * OpenAPI spec version: 1.0.6
 * Contact: fran.fig@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ReceitaMedicamentos } from './receitaMedicamentos';
import { ReceitaMedico } from './receitaMedico';
import { ReceitaPaciente } from './receitaPaciente';


export interface Receita {
    /**
     * código global único da receita, usado no blockchain
     */
    id?: string;
    /**
     * data em que foi emitida a receita
     */
    emissao?: string;
    /**
     * data limite de uso da receita
     */
    validade?: string;
    /**
     * informa a situação da receita
     */
    status?: Receita.StatusEnum;
    /**
     * Modelo da receita emitida
     */
    tipo?: Receita.TipoEnum;
    /**
     * a receita foi bloqueada e não pode ser alterada
     */
    bloqueada?: boolean;
    paciente?: ReceitaPaciente;
    medico?: ReceitaMedico;
    medicamentos?: Array<ReceitaMedicamentos>;
    /**
     * complemento à prescrição, aprazamento de consulta de controle, e para as orientações de repouso, dietas, possíveis efeitos colaterais ou outras informações referentes ao tratamento.
     */
    recomendacoes?: string;
    /**
     * JSON Padronizado da Receita, assinado digitalmente, para cálculo do HASH
     */
    dataJson?: string;
    /**
     * XML assinada digitalmentente contendo o conteúdo da receita
     */
    xml?: string;
    /**
     * PDF assinada digitalmentente contendo o conteúdo da receita
     */
    pdf?: string;
    /**
     * HASH minerado que garante a integridade desse registro
     */
    hash?: string;
    /**
     * noise of hash
     */
    noisehash?: number;
    /**
     * Marcada indica que o registro e seus associados são assinados digitalmente
     */
    assinada?: boolean;
}
export namespace Receita {
    export type StatusEnum = 'rascunho' | 'emitida' | 'suspensa' | 'bloqueada' | 'parcialmente dispensada' | 'dispensada';
    export const StatusEnum = {
        Rascunho: 'rascunho' as StatusEnum,
        Emitida: 'emitida' as StatusEnum,
        Suspensa: 'suspensa' as StatusEnum,
        Bloqueada: 'bloqueada' as StatusEnum,
        ParcialmenteDispensada: 'parcialmente dispensada' as StatusEnum,
        Dispensada: 'dispensada' as StatusEnum
    }
    export type TipoEnum = 'Receita simples' | 'Receita de controle especial' | 'Receita azul' | 'Receita amarela' | 'Notificação de receita especial de retinoides' | 'Notificação de receita especial para talidomida' | 'Substâncias antirretrovirais' | 'Anabolizantes' | 'Antimicrobianos' | 'Receita renovável';
    export const TipoEnum = {
        ReceitaSimples: 'Receita simples' as TipoEnum,
        ReceitaDeControleEspecial: 'Receita de controle especial' as TipoEnum,
        ReceitaAzul: 'Receita azul' as TipoEnum,
        ReceitaAmarela: 'Receita amarela' as TipoEnum,
        NotificaoDeReceitaEspecialDeRetinoides: 'Notificação de receita especial de retinoides' as TipoEnum,
        NotificaoDeReceitaEspecialParaTalidomida: 'Notificação de receita especial para talidomida' as TipoEnum,
        SubstnciasAntirretrovirais: 'Substâncias antirretrovirais' as TipoEnum,
        Anabolizantes: 'Anabolizantes' as TipoEnum,
        Antimicrobianos: 'Antimicrobianos' as TipoEnum,
        ReceitaRenovvel: 'Receita renovável' as TipoEnum
    }
}
