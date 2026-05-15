"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTodo = isTodo;
exports.isTodoValid = isTodoValid;
exports.formatDate = formatDate;
exports.isValidString = isValidString;
// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime
// ============
// TYPE GUARD
// ============
function isTodo(task) {
    if (typeof task !== 'object' || task === null) {
        return false;
    }
    const todo = task;
    return (typeof todo.id === 'number' &&
        typeof todo.text === 'string' &&
        typeof todo.completed === 'boolean' &&
        typeof todo.status === 'string');
}
// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid
// ================
// VALIDATION ARRAY
// ================
function isTodoValid(data) {
    return Array.isArray(data) && data.every(isTodo);
}
// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus
function formatDate() {
    return new Date().toISOString();
}
// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid
function isValidString(input) {
    return input.trim().length > 0;
}
