import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeMusicasComponent } from './lista-de-musicas.component';

describe('ListaDeMusicasComponent', () => {
  let component: ListaDeMusicasComponent;
  let fixture: ComponentFixture<ListaDeMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeMusicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
