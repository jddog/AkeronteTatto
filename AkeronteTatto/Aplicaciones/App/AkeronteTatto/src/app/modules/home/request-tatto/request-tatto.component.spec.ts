import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestTattoComponent } from './request-tatto.component';

describe('RequestTattoComponent', () => {
  let component: RequestTattoComponent;
  let fixture: ComponentFixture<RequestTattoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTattoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestTattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
