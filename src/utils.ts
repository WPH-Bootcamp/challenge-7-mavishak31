import { ITodo } from './types';
// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime
// ============
// TYPE GUARD
// ============
export function isTodo(task: unknown): task is ITodo {
  if (typeof task !== 'object' || task === null) {
    return false;
  }
  const todo = task as ITodo;

  return (
    typeof todo.id === 'number' &&
    typeof todo.text === 'string' &&
    typeof todo.completed === 'boolean' &&
    typeof todo.status === 'string'
  );
}

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid
// ================
// VALIDATION ARRAY
// ================
export function isTodoValid(data: unknown): data is ITodo[] {
  return Array.isArray(data) && data.every(isTodo);
}

// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus
// ================
// FORMAT DATE
// ================
export function formatDate(): string {
  return new Date().toISOString();
}

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid, hapus spasi depan blkng dan tidak boleh kosong
// ================
// VALIDATE INPUT
// ================
export function isValidString(input: string): boolean {
  return input.trim().length > 0;
}
