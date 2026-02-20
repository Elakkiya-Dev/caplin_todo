export interface Todo {
  id: number;
  title: string;
  status: 'pending' | 'complete';
  category: 'personal' | 'work';
}