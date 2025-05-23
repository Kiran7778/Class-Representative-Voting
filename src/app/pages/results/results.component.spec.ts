import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './results.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    component.candidates = [
      { id: 1, name: 'Alice', votes: 10 },
      { id: 2, name: 'Bob', votes: 5 }
    ];
    fixture.detectChanges();
  });

  it('should create the result component', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly identify the top candidate', () => {
    expect(component.getTopCandidateId()).toBe(1);
  });

  it('should render all candidates with votes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('p').length).toBe(2);
  });
});
