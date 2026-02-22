type Category = 
  | "Наука"
  | "Технологии"
  | "Кино"
  | "Литература"
  | "Спорт"
  | "История";

export interface TimelineEvent {
  year: number;
  text: string;
}

export interface TimelinePeriod {
  id: number;
  category: Category;
  startYear: number;
  endYear: number;
  events: TimelineEvent[];
}

export type TimelineData = TimelinePeriod[];