import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  fields: string[] = ['B.Tech', 'B.Com', 'M.Tech', 'BBS', 'M.Com', 'MBA'];

  fieldSpecializations: { [key: string]: string[] } = {
    'B.Tech': ['Information Technology', 'Electronics', 'Mechanical', 'Dissertation / Thesis'],
    'M.Tech': [
      'Computer Science', 'Electronics', 'Research Methodology', 'Seminar & Technical Writing',
      'Embedded Systems / VLSI (depending on specialization)', 'Advanced Structural Analysis (for Civil)'
    ],
    'MBA': [
      'Finance', 'Marketing', 'Managerial Economics', 'Organizational Behavior',
      'Entrepreneurship Development', 'Operations Management', 'Human Resource Management'
    ]
  };

  subjects: { [key: string]: { id: number; name: string }[] } = {
    'Information Technology': [
      { id: 1, name: 'Data Structures' }, { id: 2, name: 'Algorithms' }, { id: 3, name: 'Computer Networks' },
      { id: 4, name: 'Operating Systems' }, { id: 5, name: 'Software Engineering' }, { id: 6, name: 'Web Development' },
      { id: 7, name: 'Database Systems' }, { id: 8, name: 'Computer Security' }, { id: 9, name: 'AI and Machine Learning' },
    ],
    'Electronics': [
      { id: 10, name: 'Digital Electronics' }, { id: 11, name: 'Microprocessors' },
      { id: 12, name: 'Circuit Analysis' }, { id: 13, name: 'Control Systems' },
      { id: 14, name: 'Electromagnetic Fields' }, { id: 15, name: 'Signal Processing' },
      { id: 16, name: 'Embedded Systems' }, { id: 17, name: 'VLSI Design' }, { id: 18, name: 'Analog Electronics' },
    ],
    'Mechanical': [
      { id: 19, name: 'Thermodynamics' }, { id: 20, name: 'Fluid Mechanics' },
      { id: 21, name: 'Strength of Materials' }, { id: 22, name: 'Heat Transfer' },
      { id: 23, name: 'Machine Design' }, { id: 24, name: 'Manufacturing Processes' },
      { id: 25, name: 'Mechanical Vibrations' }, { id: 26, name: 'Automobile Engineering' },
      { id: 27, name: 'Power Plant Engineering' },
    ]
  };

  selectedField: string = '';
  selectedSpecialization: string = '';
  selectedSubjects: number[] = [];
  message: string = '';

  isRegistered: boolean = false; // Toggle this to switch styles

  ngOnInit(): void {
    // Simulate that the user has registered
    this.isRegistered = true;
  }

  get specializations(): string[] {
    return this.fieldSpecializations[this.selectedField] || [];
  }

  get specializationSubjects(): { id: number; name: string }[] {
    return this.subjects[this.selectedSpecialization] || [];
  }

  toggleSubject(id: number): void {
    if (this.selectedSubjects.includes(id)) {
      this.selectedSubjects = this.selectedSubjects.filter(subId => subId !== id);
    } else if (this.selectedSubjects.length < 5) {
      this.selectedSubjects.push(id);
    }
  }

  submitVote(): void {
    if (this.selectedSubjects.length !== 5) {
      this.message = 'Please select exactly 5 subjects.';
      return;
    }

    const selectedSubjectNames = this.specializationSubjects
      .filter(sub => this.selectedSubjects.includes(sub.id))
      .map(sub => sub.name);

    this.message = `You selected: ${selectedSubjectNames.join(', ')}. Thank you!`;
  }
}
