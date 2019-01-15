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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { ApiResponse } from '../model/apiResponse';
import { Medico } from '../model/medico';
import { PaginationMedico } from '../model/paginationMedico';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MedicoService {

    protected basePath = 'http://localhost:8080/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Exclui o médico da base
     * 
     * @param medicoID ID do médico a ser consultado (CPF ou id objeto)
     * @param apiKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteMedicoById(medicoID: string, apiKey?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteMedicoById(medicoID: string, apiKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteMedicoById(medicoID: string, apiKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteMedicoById(medicoID: string, apiKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (medicoID === null || medicoID === undefined) {
            throw new Error('Required parameter medicoID was null or undefined when calling deleteMedicoById.');
        }

        let headers = this.defaultHeaders;
        if (apiKey !== undefined && apiKey !== null) {
            headers = headers.set('api_key', String(apiKey));
        }

        // authentication (receitadigital_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/medico/${encodeURIComponent(String(medicoID))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Listagem de médicos
     * Emite uma listagem de médicos por busca de atributo, se nenhum parametro de busca for preenchido
     * @param cpf Busca médico pelo CPF
     * @param nome Nome ou parte do nome do médico
     * @param crm Busca médico pelo CRM
     * @param id Busca médico pelo id do médico (ID do médico, crm [da forma 1234/uf], cpf )
     * @param itemsPerPage Quantidade de registros por página
     * @param page Página (baseada em itemsPerPage)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMedico(cpf?: string, nome?: string, crm?: string, id?: string, itemsPerPage?: number, page?: number, observe?: 'body', reportProgress?: boolean): Observable<PaginationMedico>;
    public getMedico(cpf?: string, nome?: string, crm?: string, id?: string, itemsPerPage?: number, page?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationMedico>>;
    public getMedico(cpf?: string, nome?: string, crm?: string, id?: string, itemsPerPage?: number, page?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationMedico>>;
    public getMedico(cpf?: string, nome?: string, crm?: string, id?: string, itemsPerPage?: number, page?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (cpf !== undefined) {
            queryParameters = queryParameters.set('cpf', <any>cpf);
        }
        if (nome !== undefined) {
            queryParameters = queryParameters.set('nome', <any>nome);
        }
        if (crm !== undefined) {
            queryParameters = queryParameters.set('crm', <any>crm);
        }
        if (id !== undefined) {
            queryParameters = queryParameters.set('id', <any>id);
        }
        if (itemsPerPage !== undefined) {
            queryParameters = queryParameters.set('itemsPerPage', <any>itemsPerPage);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }

        let headers = this.defaultHeaders;

        // authentication (receitadigital_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<PaginationMedico>(`${this.basePath}/medico`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Encontra o médico pelo ID
     * Retorna um único médico
     * @param medicoID ID do médico a ser consultado (CPF ou id objeto)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMedicoById(medicoID: string, observe?: 'body', reportProgress?: boolean): Observable<Medico>;
    public getMedicoById(medicoID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Medico>>;
    public getMedicoById(medicoID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Medico>>;
    public getMedicoById(medicoID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (medicoID === null || medicoID === undefined) {
            throw new Error('Required parameter medicoID was null or undefined when calling getMedicoById.');
        }

        let headers = this.defaultHeaders;

        // authentication (receitadigital_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Medico>(`${this.basePath}/medico/${encodeURIComponent(String(medicoID))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Insere um novo médico na base
     * 
     * @param body O objeto JSON do médico a ser inserido
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postMedico(body: Medico, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postMedico(body: Medico, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postMedico(body: Medico, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postMedico(body: Medico, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postMedico.');
        }

        let headers = this.defaultHeaders;

        // authentication (receitadigital_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/medico`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Atualiza um médico na base
     * 
     * @param medicoID ID do médico a ser consultado (CPF ou id objeto)
     * @param body O objeto JSON do médico a ser atualizado
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postMedicoById(medicoID: string, body: Medico, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postMedicoById(medicoID: string, body: Medico, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postMedicoById(medicoID: string, body: Medico, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postMedicoById(medicoID: string, body: Medico, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (medicoID === null || medicoID === undefined) {
            throw new Error('Required parameter medicoID was null or undefined when calling postMedicoById.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postMedicoById.');
        }

        let headers = this.defaultHeaders;

        // authentication (receitadigital_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/medico/${encodeURIComponent(String(medicoID))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * upload de foto do médico
     * 
     * @param medicoID ID do médico a ser consultado (CPF ou id objeto)
     * @param additionalMetadata Metadados Adicionais
     * @param file arquivo contendo o certificado tipo A1 do médico para assinatura da receita
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postMedicoByIdUploadCertificate(medicoID: string, additionalMetadata?: string, file?: Blob, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
    public postMedicoByIdUploadCertificate(medicoID: string, additionalMetadata?: string, file?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
    public postMedicoByIdUploadCertificate(medicoID: string, additionalMetadata?: string, file?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
    public postMedicoByIdUploadCertificate(medicoID: string, additionalMetadata?: string, file?: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (medicoID === null || medicoID === undefined) {
            throw new Error('Required parameter medicoID was null or undefined when calling postMedicoByIdUploadCertificate.');
        }

        let headers = this.defaultHeaders;

        // authentication (receitadigital_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (additionalMetadata !== undefined) {
            formParams = formParams.append('additionalMetadata', <any>additionalMetadata) || formParams;
        }
        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) || formParams;
        }

        return this.httpClient.post<ApiResponse>(`${this.basePath}/medico/${encodeURIComponent(String(medicoID))}/uploadCertificate`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * upload de foto do médico
     * 
     * @param medicoID ID do médico a ser consultado (CPF ou id objeto)
     * @param additionalMetadata Metadados Adicionais
     * @param file arquivo contendo a foto do médico
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postMedicoByIdUploadImage(medicoID: string, additionalMetadata?: string, file?: Blob, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
    public postMedicoByIdUploadImage(medicoID: string, additionalMetadata?: string, file?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
    public postMedicoByIdUploadImage(medicoID: string, additionalMetadata?: string, file?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
    public postMedicoByIdUploadImage(medicoID: string, additionalMetadata?: string, file?: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (medicoID === null || medicoID === undefined) {
            throw new Error('Required parameter medicoID was null or undefined when calling postMedicoByIdUploadImage.');
        }

        let headers = this.defaultHeaders;

        // authentication (receitadigital_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (additionalMetadata !== undefined) {
            formParams = formParams.append('additionalMetadata', <any>additionalMetadata) || formParams;
        }
        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) || formParams;
        }

        return this.httpClient.post<ApiResponse>(`${this.basePath}/medico/${encodeURIComponent(String(medicoID))}/uploadImage`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Atualiza um médico da base
     * 
     * @param body O objeto JSON do médico a ser atualizado
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putMedico(body: Medico, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putMedico(body: Medico, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putMedico(body: Medico, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putMedico(body: Medico, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putMedico.');
        }

        let headers = this.defaultHeaders;

        // authentication (receitadigital_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/medico`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
