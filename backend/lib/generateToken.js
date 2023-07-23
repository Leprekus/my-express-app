"use strict";
function generateToken() {
    const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const NUMBERS = '1234567890';
    const ALLOWED_CHARACTERS = [CHARACTERS, NUMBERS];
    let token = '';
    for (let i = 0; i < 64; i++) {
        const type = Math.random() < 0.5 ? 0 : 1;
        const index = Math.floor(Math.random() * ALLOWED_CHARACTERS[type].length);
        const char = ALLOWED_CHARACTERS[type][index];
        token += char;
    }
    return token;
}
