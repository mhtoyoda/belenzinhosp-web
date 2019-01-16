import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPrestadorComponent } from './item-prestador.component';

describe('ItemPrestadorComponent', () => {
  let component: ItemPrestadorComponent;
  let fixture: ComponentFixture<ItemPrestadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPrestadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
