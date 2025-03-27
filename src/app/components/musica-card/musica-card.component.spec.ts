import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaCardComponent } from './musica-card.component';

describe('MusicaCardComponent', () => {
  let component: MusicaCardComponent;
  let fixture: ComponentFixture<MusicaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
