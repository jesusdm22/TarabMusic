import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensajeriaPage } from './mensajeria.page';

describe('MensajeriaPage', () => {
  let component: MensajeriaPage;
  let fixture: ComponentFixture<MensajeriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensajeriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
