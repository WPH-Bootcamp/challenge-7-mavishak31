import * as fs from 'fs';
import * as path from 'path';
import { ITodo } from './types';
import { isTodo, isTodoValid } from './utils';

// TODO: Definisikan path file untuk menyimpan data To-Do
// folder data, file todos.json
const dataDir = path.join(__dirname, '../data');
const filePath = path.join(dataDir, 'todos.JSON');

// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)
export function initStorage(): void {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]');
    }
  } catch (error) {
    console.log('Error Init Storage:', error);
  }
}

// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file
export function readTodos(): ITodo[] {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    // ubah json ke object
    const parsedData: unknown = JSON.parse(data);

    // jika data tidak valid
    if (!isTodoValid(parsedData)) {
      return [];
    }
    return parsedData;
  } catch (error) {
    console.log('Error reading file:', error);
    return [];
  }
}

// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan
export function saveTodos(todos: ITodo[]): void {
  try {
    // ubah object ke string json
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.log('Error saving file:', error);
  }
}
