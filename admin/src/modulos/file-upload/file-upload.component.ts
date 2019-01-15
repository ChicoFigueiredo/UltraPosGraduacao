import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
import { icones } from "./file-upload.constants";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadDragDropData64Component),
      multi: true
    }
  ]
})
export class FileUploadDragDropData64Component implements ControlValueAccessor,OnInit {
  public uploader: FileUploader = new FileUploader({ url: "" });
  public temArquivoSobreAreaDragDrop: boolean = false;
  private tipoArquivo: string = "image/png";

  @Input() ngModel: string = "";
  @Input() name: string = "";
  @Input() showBase64Contents: boolean = false;
  @Input() isImage: boolean = true;
  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();
  onngModelChanged() {
    //evento que deve ser chamado a qualquer alteração de ngModel
    this.ngModelChange.emit(this.ngModel);
  }

  constructor() {}

  ngOnInit() {}

  public arquivoSobreDragDrop(arquivoSobreCampo: any): void {
    this.temArquivoSobreAreaDragDrop = arquivoSobreCampo;
    if (!arquivoSobreCampo) {
      // soltou o arquivo
      if (this.uploader.queue.length > 1) {
        //o campo foi projetado para apenas 1 arquivo, elimina todos e deixa apenas o último carregado
        while (this.uploader.queue.length > 1) this.uploader.queue[0].remove();
      }
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      let file: any = this.uploader.queue["0"].some; //o campo some tem o arquivo tal como ele foi uploadado para memória
      this.tipoArquivo = file.type;
      reader.readAsBinaryString(file);
    } else {
      this.uploader.clearQueue();
      this.onngModelChanged(); // avisando a todos que o componente foi atualizado
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.ngModel = "data:" + this.tipoArquivo + ";base64," + btoa(binaryString);
    this.onngModelChanged();
  }

  imagePreview() {
    if (this.isImage) {
      return "url(" + this.ngModel + ")";
    } else {
      return "url(" + this.iconFromFileType() + ")";
    }
  }

  iconFromFileType() {
    // console.log('this.uploader.queue.length :',this.uploader.queue.length )
    if (!this.isImage) {
      let tipoR = /[:](.*?)[;]/gim.exec(this.ngModel);
      if (tipoR) {
        let tipo: string = null;
        if (tipoR[1]) {
          tipo = tipoR[1];
        }
        if (tipo) {
          if (icones[tipo]) {
            let icon: string = icones[tipo];
            if (icon.substr(0, 4) != "data") icon = icones[icon];
            return icon;
          }
        } else if (this.uploader.queue.length > 0) {
          const file: any = this.uploader.queue["0"].some;
          //alert(file.type);
          if (icones[file.type]) {
            return icones[file.type];
          }
          return "";
        }
      } else return "";
    }
  }

  
  // Function to call when the rating changes.
  onChange = (file: string) => {};
  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {};

  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(file: string): void {
    this.ngModel = file;
    this.onChange(this.ngModel)
  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (file: string) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  disabled:boolean = false;
  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}

// necessita do componente npm install ng2-file-upload --save
// data:application/x-pkcs12;
// [:](.*?)[;]
