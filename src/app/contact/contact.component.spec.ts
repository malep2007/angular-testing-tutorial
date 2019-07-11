import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.debugElement.componentInstance; // creates test instance of the component
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as text contact page', async(() => {
    expect(component.text).toEqual('contact page');
  }));

  it('should set submitted to true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));
  it('should call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));
  it('form should be invalid', async(() => {
    component.contactForm.controls[`email`].setValue('');
    component.contactForm.controls[`name`].setValue('');
    component.contactForm.controls[`text`].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));
  it('should be valid', async(() => {
    component.contactForm.controls[`email`].setValue('ephraim.malinga@gmail.com');
    component.contactForm.controls[`name`].setValue('Ephraim Malinga');
    component.contactForm.controls[`text`].setValue('Some text');
    expect(component.contactForm.valid).toBeTruthy();
  }));
});
