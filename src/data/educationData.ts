export interface EducationItem {
  id: number;
  institution: string;
  period: string;
  qualification: string;
  details?: string;
}

export const educationItems: EducationItem[] = [
  {
    id: 1,
    institution: 'Meta Journalism Online Training Project',
    period: 'May 2023',
    qualification: 'Reuters Digital Journalism Certificate',
  },
  {
    id: 2,
    institution: 'Technical University of Kenya',
    period: '2015 - 2021',
    qualification: 'Bachelor of Technology, Civil Engineering Technology',
  },
  {
    id: 3,
    institution: 'Maranda High School',
    period: '2011 - 2014',
    qualification: 'Kenya Certificate of Secondary Education',
  },
];
