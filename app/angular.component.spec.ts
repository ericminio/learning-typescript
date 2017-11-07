
import { getTestBed, TestBed } from '@angular/core/testing';
import { MyComponent } from './lib/angular.component';
import { By } from '@angular/platform-browser';
import { expect } from 'chai';

describe('MyComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponent]
    }).compileComponents();
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('is tdd ready', () => {
    const fixture = TestBed.createComponent(MyComponent);
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('label'));

    expect(label.nativeElement.textContent).to.equal('hello world');

    fixture.componentInstance.title = 'the floor is now yours';
    fixture.detectChanges();
    expect(label.nativeElement.textContent).to.equal('the floor is now yours');
  });

});
