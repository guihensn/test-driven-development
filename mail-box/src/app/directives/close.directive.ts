
import { Component, Directive, ElementRef, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appClose]'
})

export class CloseDirective implements OnInit{
  showTimeOut: number = 0;
  buttonElement?: HTMLElement;  
  hideTimeOut: number = 0;

  constructor(
            private el:ElementRef,
            private templateRef: TemplateRef<any>,
            private viewContainer: ViewContainerRef,
            private renderer: Renderer2) {}

  ngOnInit(): void {
    let view = this.viewContainer.createEmbeddedView(this.templateRef)
    this.creatButton();
        
    this.renderer.appendChild(view.rootNodes[0], this.buttonElement);
    
    view.rootNodes[0].setAttribute('style', 
      `position:relative; 
       display: inline-block`);

    view.rootNodes[0].addEventListener('mousedown', this.startCountShowButton.bind(this) );
    view.rootNodes[0].addEventListener('mouseup',  this.stopCountShowButton.bind(this));
    view.rootNodes[0].addEventListener('mouseout', this.startCountHideButton.bind(this));
    view.rootNodes[0].addEventListener('mouseover', this.stopCountHideButton.bind(this));
  }

  public creatButton(){
    this.buttonElement = this.renderer.createElement('button');
    this.buttonElement?.setAttribute('id',"close-buttom")
    if(!this.buttonElement){
      return;
    }

    this.buttonElement.innerHTML = "<strong>X</strong>";

    let buttonStyle =
    ` 
      width: 30px;
      height: 30px;
      color: black;
      background-color: gray;
      border-width : 3px;
      border-radius: 100%;
      border-style: dotted;
      position: absolute;
      right: -10px;
      top: -10px;
      display: none;
    `;

    this.buttonElement.setAttribute('style',buttonStyle);
    this.buttonElement.addEventListener('click',this.close.bind(this))
  }

  public close(){
    console.log(this)
    this.viewContainer.clear()
  }  

   public startCountShowButton(){
    this.showTimeOut = window.setTimeout(()=>{
      this.buttonElement!.style.display = "inline-block"}
    , 500);
   }

   public stopCountShowButton(){
    window.clearTimeout(this.showTimeOut);
  } 

   public startCountHideButton(){
     this.hideTimeOut = window.setTimeout(()=>{
       this.buttonElement!.style.display = 'none'
     },500)
   }

   public stopCountHideButton(){
    window.clearTimeout(this.hideTimeOut);
   }
}
