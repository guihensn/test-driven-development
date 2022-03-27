import { Component, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CloseDirective } from './close.directive';

describe('CloseDirective', () => {
  let fixture:ComponentFixture<CloseDirectiveTestComponent>;
  let component:CloseDirectiveTestComponent;

  beforeEach(async ()=>{
    await TestBed.configureTestingModule(
      {
        declarations: [CloseDirectiveTestComponent,CloseDirective]
      }).compileComponents();

      fixture = TestBed.createComponent(CloseDirectiveTestComponent);
      component = fixture.componentInstance;
  })

  it('(D) Should show close button when  after 500ms pressing mouse down', fakeAsync(()=>{
    fixture.detectChanges();
    let closeButtonElement = fixture.nativeElement.querySelector('#close-buttom');
    
    let event = new Event('mousedown');
    fixture.nativeElement.firstChild.dispatchEvent(event);
    
    expect(closeButtonElement).not.toBeNull();
    expect(closeButtonElement.style.display).withContext('before time').toBe('none');
    tick(500);
    expect(closeButtonElement.style.display).withContext('After time').not.toBe('none');
  }))

  it('(D) Should NOT display button when mouseup before 500ms of mousedown', fakeAsync(()=>{
    fixture.detectChanges();
    let closeButtonElement = fixture.nativeElement.querySelector('#close-buttom');
    let content = fixture.nativeElement.firstChild;
    content.dispatchEvent(new Event("mousedown"));

    tick(250);
    content.dispatchEvent(new Event('mouseup'));
    tick(250);
    expect(closeButtonElement.style.display).toBe('none');
  }))

  it('(D) Should hide button when retrive mouse from element after 500ms', fakeAsync(()=>{
    fixture.detectChanges();
    let closeButtonElement = fixture.nativeElement.querySelector('#close-buttom');
    let content = fixture.nativeElement.firstChild;

    content.dispatchEvent(new Event('mousedown'))
    
    tick(500);
    content.dispatchEvent(new Event("mouseout"));
    
    tick(500);
    expect(closeButtonElement.style.display).toBe('none');
  }))

  it('(D) Should NOT hide button when retrive mouse from element and come back before 500ms', fakeAsync(()=>{
    fixture.detectChanges();
    let closeButtonElement = fixture.nativeElement.querySelector('#close-buttom');
    let content = fixture.nativeElement.firstChild;

    content.dispatchEvent(new Event('mousedown'))
    
    tick(500);
    content.dispatchEvent(new Event("mouseout"));
    
    tick(250);
    content.dispatchEvent(new Event("mouseover"));

    tick(500);
    expect(closeButtonElement.style.display).not.toBe('none');
  }))
});

@Component({
  template: `<div *appClose>Teste</div>`
})

class CloseDirectiveTestComponent{
  
}