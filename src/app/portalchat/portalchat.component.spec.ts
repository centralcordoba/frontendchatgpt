import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalchatComponent } from './portalchat.component';

describe('PortalchatComponent', () => {
  let component: PortalchatComponent;
  let fixture: ComponentFixture<PortalchatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalchatComponent]
    });
    fixture = TestBed.createComponent(PortalchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
