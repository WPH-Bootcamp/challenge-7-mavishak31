"use strict";
// // import {} from './types';
// console.log('\nWelcome to TypeScript To-Do App!');
// console.log('Start building your app here...');
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Import fungsi-fungsi dari todoService
const todoService_1 = require("./todoService");
// =============
// INIT STORAGE
// =============
const storage_1 = require("./storage");
(0, storage_1.initStorage)();
// TODO: Import readline untuk membaca input dari command line
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// TODO: Buat fungsi untuk menampilkan menu utama
// Tampilkan opsi seperti:
// 1. Add new todo
// 2. Mark todo as complete
// 3. Delete todo
// 4. List all todos
// 5. Search todos
// 6. Exit
function showMenu() {
    console.log('\n     === To-Do App === ');
    console.log('1. Add new task');
    console.log('2. Mark task as complete');
    console.log('3. Delete task');
    console.log('4. List all tasks');
    console.log('5. Search tasks');
    console.log('6. Exit');
}
// TODO: Buat fungsi untuk handle input dari user
// Gunakan readline.question untuk menerima input
// TODO: Buat fungsi main yang akan menjalankan aplikasi secara loop
// Hint: Gunakan recursive function atau while loop
function main() {
    showMenu();
    rl.question('Choose Menu: ', (answer) => {
        switch (answer) {
            // Add new todo
            case '1':
                rl.question('Add Task: ', (text) => {
                    (0, todoService_1.addTodo)(text);
                    main();
                });
                break;
            // mark as complete
            case '2':
                rl.question('Enter [ID/Index Number] to Complete: ', (id) => {
                    (0, todoService_1.completeTodo)(Number(id));
                    main();
                });
                break;
            // Delete todo
            case '3':
                rl.question('Enter [ID/Index Number] to Delete: ', (id) => {
                    (0, todoService_1.deleteTodo)(Number(id));
                    main();
                });
                break;
            // List all todos
            case '4':
                console.log('\n      === Tasks List === ');
                (0, todoService_1.listTodo)();
                main();
                break;
            // Search todos
            case '5':
                rl.question('Enter Keyword: ', (keyword) => {
                    (0, todoService_1.searchTodo)(keyword);
                    main();
                });
                break;
            // Exit
            case '6':
                console.log('End Program!');
                rl.close();
                break;
            default:
                console.log('Invalid Menu!');
                main();
        }
    });
}
// TODO: Jalankan fungsi main
main();
