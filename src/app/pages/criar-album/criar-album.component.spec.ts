import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAlbumComponent } from './criar-album.component';

describe('CriarAlbumComponent', () => {
  let component: CriarAlbumComponent;
  let fixture: ComponentFixture<CriarAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
