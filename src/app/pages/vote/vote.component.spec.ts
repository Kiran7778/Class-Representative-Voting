// vote.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';  // Ensure FormsModule is imported
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],  // Import FormsModule
      declarations: [VoteComponent]  // Declare the component
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a field', () => {
    component.selectedField = 'B.Tech';
    fixture.detectChanges();
    expect(component.selectedField).toBe('B.Tech');
  });

  it('should show specializations when a field is selected', () => {
    component.selectedField = 'B.Tech';
    fixture.detectChanges();
    expect(component.specializations.length).toBeGreaterThan(0);
  });

  it('should select subjects and submit vote', () => {
    component.selectedField = 'B.Tech';
    component.selectedSpecialization = 'Information Technology';
    component.toggleSubject(1);
    component.toggleSubject(2);
    component.toggleSubject(3);
    component.toggleSubject(4);
    component.toggleSubject(5);
    fixture.detectChanges();

    component.submitVote();
    expect(component.message).toContain('You selected');
  });
});
