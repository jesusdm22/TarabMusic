import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BailePage } from './baile.page';

describe('Tab2Page', () => {
  let component: BailePage;
  let fixture: ComponentFixture<BailePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BailePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BailePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
