import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarplaylistComponent } from './criarplaylist.component';

describe('CriarplaylistComponent', () => {
  let component: CriarplaylistComponent;
  let fixture: ComponentFixture<CriarplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarplaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
