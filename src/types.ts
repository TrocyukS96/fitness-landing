export interface ICourse {
  id: number;
  title: string;
  price: string;
  image: string;
  videoSrc: string;
  modalTitle: string;
  modalSubtitles: string[];
}

export type PackageType = 'base' | 'premium' | 'premiumBonus'

export interface IPackage {
  id:string
  isHidden: boolean
  type:'base' | 'premium' | 'premiumBonus'
  title:string
  price:{
    label:string
    period:string
    price:{
      byn:number
      rub:number
      usd:number
      eur:number
    }
  },
  icon:string
  features:string[]
  badge:string | null
}

export enum SectionTypes {
  HERO = 'hero',
  SERVICES = 'services',
  ABOUT = 'about',
  CONTACTS = 'contacts',
  FEEDBACK = 'feedback',
  TARIFFS = 'tarrifs',
  FAQ = 'faq',
}

export interface Subscription {
  id: number | string;
  name: string;
  image: string;
  description: string;
  purchase_date: number;
  days: {
    id: string;
    name: string;
    description: string;

    videos: {
      id: string | number;
      name: string;
      image: string;
      video: string;
    }[];
  }[];
}

export interface AccordionItem{
    key: string;
    header: React.ReactNode | string;
    content: React.ReactNode;
}

export interface Video {
  id: string;
  title: string;
  filePath: string;
  thumbnail: string | null;
  duration: number;
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  videoId: string;
  workoutId: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  video: Video;
}

export interface Workout {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
  parentWorkoutId: string | null;
  tariffId: string | null;
  courseId: string;
  createdAt: string;
  updatedAt: string;
  exercises: Exercise[];
}

export interface ICourse {
  id: number;
  title: string;
  description: string;
  isFree: boolean;
  parentCourseId: string | null;
  createdAt: string;
  updatedAt: string;
  workouts: Workout[];
}

// Типы для аккордеона
export interface AccordionItem {
  key: string;
  header: React.ReactNode;
  content: React.ReactNode;
}