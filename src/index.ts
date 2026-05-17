// // import {} from './types';
// console.log('\nWelcome to TypeScript To-Do App!');
// console.log('Start building your app here...');

// TODO: Import fungsi-fungsi dari todoService
import {
  addTodo,
  completeTodo,
  deleteTodo,
  listTodo,
  searchTodo,
} from './todoService';

// =============
// INIT STORAGE
// =============
import { initStorage } from './storage';
initStorage();

// TODO: Import readline untuk membaca input dari command line
import * as readline from 'readline';
import { text } from 'stream/consumers';

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

function showMenu(): void {
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

function main(): void {
  showMenu();

  rl.question('Choose Menu: ', (answer) => {
    switch (answer) {
      // Add new todo
      case '1':
        rl.question('Add Task: ', (text) => {
          addTodo(text);
          main();
        });
        break;

      // mark as complete
      case '2':
        rl.question('Enter [ID/Index Number] to Complete: ', (id) => {
          completeTodo(Number(id));
          main();
        });
        break;

      // Delete todo
      case '3':
        rl.question('Enter [ID/Index Number] to Delete: ', (id) => {
          deleteTodo(Number(id));
          main();
        });
        break;

      // List all todos
      case '4':
        console.log('\n      === Tasks List === ');
        listTodo();
        main();
        break;

      // Search todos
      case '5':
        rl.question('Enter Keyword: ', (keyword) => {
          searchTodo(keyword);
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
