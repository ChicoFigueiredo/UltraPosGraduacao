import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal-ex',
  templateUrl: `modal-ex.component.html`,
})
export class ModalComponentEx {

  modalHeader: string;
  modalContent = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`;
  modalButtons:ModalButton[] = []; 

  constructor(public activeModal: NgbActiveModal) { 
  }

  closeModal() {
    this.activeModal.close();
  }

  public addButtom(title,event,classe){
      let b:ModalButton;
      if(event){
        if(event.toLowerCase){
          if(event.toLowerCase() === 'fechar' || event.toLowerCase() === 'close'){
            b = new ModalButton(title,classe,() => { this.activeModal.close(); });
          } else {
            b = new ModalButton(title,classe,event);
          }
        } else {
          b = new ModalButton(title,classe,event);
        }
      } else {
        b = new ModalButton(title,classe,event);
      }
       
      this.modalButtons.push(b);
  }
}

export class ModalButton {
  class: string = 'btn btn-md btn-primary';
  clickEvent:any = () => { };
  title: string = 'Title';

  constructor(title,classe,event){
    this.title = title || this.title;
    this.class = (classe || this.class) + "" ;
    this.clickEvent = event || this.clickEvent;
  }
}