"use strict";
// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.completeTodo = completeTodo;
exports.deleteTodo = deleteTodo;
exports.listTodo = listTodo;
exports.searchTodo = searchTodo;
// import { isStringObject } from 'util/types';
const utils_1 = require("./utils");
const storage_1 = require("./storage");
// TODO: Import fungsi storage untuk baca/tulis file
// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active
// ============
// ADD TODO
// ============
function addTodo(text) {
    if (!(0, utils_1.isValidString)(text)) {
        console.log('-> Task must be filled!');
        return;
    }
    const todos = (0, storage_1.readTodos)();
    const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        status: 'active',
        createdAt: (0, utils_1.formatDate)(),
    };
    todos.push(newTodo);
    (0, storage_1.saveTodos)(todos);
    console.log('-> Task Successfully Added.');
}
// TODO: Buat fungsi untuk menandai To-Do sebagai selesai
// - Cari To-Do berdasarkan id
// - Ubah statusnya menjadi completed
// - Handle kasus jika id tidak ditemukan
// ==============
// COMPLETE TODO
// ==============
function completeTodo(input) {
    const todos = (0, storage_1.readTodos)();
    // cek berdasarkan id
    let todo = todos.find((todo) => todo.id === input);
    // cek berdasarkan nomor urut
    if (!todo) {
        if (input < 1 || input > todos.length) {
            console.log('Task not found!');
            return;
        }
        todo = todos[input - 1];
    }
    // update status
    todo.completed = true;
    todo.status = 'done';
    (0, storage_1.saveTodos)(todos);
    console.log('-> Task Complete');
}
// TODO: Buat fungsi untuk menghapus To-Do
// - Filter To-Do berdasarkan id
// - Handle kasus jika id tidak ditemukan
// ============
// DELETE TODO
// ============
function deleteTodo(input) {
    const todos = (0, storage_1.readTodos)();
    // cek berdasarkan id
    let todoIndex = todos.findIndex((todo) => todo.id === input);
    // kalau tidak ada bisa cek berdasarkan nomor urut
    if (todoIndex === -1) {
        if (input < 1 || input > todos.length) {
            console.log('Task not Found!');
            return;
        }
        todoIndex = input - 1;
    }
    // delete todo/task
    const deleteTodo = todos.splice(todoIndex, 1);
    const filteredTodos = todos.filter((todo) => todo.id !== input);
    // if (filteredTodos.length === todos.length) {
    //   console.log('ID not found!');
    //   return;
    // }
    (0, storage_1.saveTodos)(todos);
    console.log(`-> Task "${deleteTodo[0].text}" Successfully Deleted`);
}
// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do
// - Berikan nomor urut untuk memudahkan user memilih
// ============
// List TODO
// ============
function listTodo() {
    const todos = (0, storage_1.readTodos)();
    if (todos.length === 0) {
        console.log('       There is no task');
        return;
    }
    todos.forEach((todo, index) => {
        const status = todo.completed ? '[DONE]' : '[ACTIVE]';
        const formattedDate = new Date(todo.createdAt).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
        console.log(`${status} ${index + 1}. ${todo.text}`);
        console.log(`ID: ${todo.id}`);
        console.log(`Created at: ${formattedDate}`);
        console.log('----------------------------');
    });
}
// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword
// ============
// Search TODO
// ============
function searchTodo(keyword) {
    const todos = (0, storage_1.readTodos)();
    const results = todos.filter((todo) => todo.text.toLowerCase().includes(keyword.toLowerCase()));
    if (results.length === 0) {
        console.log('Task not Found!');
        return;
    }
    results.forEach((todo, index) => {
        const status = todo.completed ? '[DONE]' : '[ACTIVE]';
        console.log(`${status} ${index + 1}. ${todo.text} (ID: ${todo.id})`);
    });
}
