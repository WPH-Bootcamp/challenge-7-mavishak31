// TODO: Import readline untuk membaca input dari command line

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Import fungsi-fungsi dari todoService
// import {} from "./todoService"

// TODO: Import fungsi-fungsi dari utils (termasuk type guards)
// import {} from './utils';

// todoService();
// utils();

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
  console.log('1. Add new todo');
  console.log('2. Mark todo as complete');
  console.log('3. Delete todo');
  console.log('4. List all todos');
  console.log('5. Search todos');
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
      case '1':
        break;

      case '2':
        break;

      case '3':
        break;

      case '4':
        break;

      case '5':
        break;

      case '6':
        console.log('End Program!');
        rl.close();
        break;

      default:
        console.log('Invalid Menu!');
    }
  });
}
// TODO: Jalankan fungsi main
main();

console.log('\nWelcome to TypeScript To-Do App!');
console.log('Start building your app here...');
