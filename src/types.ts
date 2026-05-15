// TODO: Definisikan tipe data untuk To-Do item di sini
// Hint: To-Do sebaiknya memiliki id, text, dan status completed

// TODO: Buat interface untuk To-Do item
// ==============
// TODO INTERFACE
// ==============
export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
  status: TTodoStatus;
  createdAt: string;
}

// TODO: Buat tipe untuk status To-Do (active/done)
// ================
// TODO STATUS TYPE
// ================
export type TTodoStatus = 'active' | 'done';

// TODO: Buat tipe untuk fungsi-fungsi yang akan digunakan
// type AddTodo, CompletedTodo, DeleteTodo
// ==============
// FUNCTION TYPES
// ==============
export type TAddTodoFunction = (text: string) => void;
export type TCompletedTodoFunction = (id: number) => void;
export type TDeleteTodoFunction = (id: number) => void;
