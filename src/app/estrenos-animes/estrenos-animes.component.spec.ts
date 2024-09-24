import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrenosAnimesComponent } from './estrenos-animes.component';

describe('EstrenosAnimesComponent', () => {
  let component: EstrenosAnimesComponent;
  let fixture: ComponentFixture<EstrenosAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstrenosAnimesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstrenosAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
