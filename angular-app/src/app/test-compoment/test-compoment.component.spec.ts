import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompomentComponent } from './test-compoment.component';

describe('TestCompomentComponent', () => {
  let component: TestCompomentComponent;
  let fixture: ComponentFixture<TestCompomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCompomentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
