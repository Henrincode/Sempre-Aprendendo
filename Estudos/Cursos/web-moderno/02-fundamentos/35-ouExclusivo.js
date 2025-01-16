// Operadores Binários Lógicos

// AND lógico (&&)
// Ambos os operandos devem ser verdadeiros para o resultado ser verdadeiro
console.log('01) v && v ->', true && true);   // true
console.log('02) v && f ->', true && false);  // false
console.log('03) f && ? ->', false && true);  // false

// OR lógico (||)
// Pelo menos um dos operandos deve ser verdadeiro para o resultado ser verdadeiro
console.log('04) v || ? ->', true || false);  // true
console.log('05) f || v ->', false || true);  // true
console.log('06) f || f ->', false || false); // false

// XOR lógico (^)
// Os operandos devem ser diferentes para o resultado ser verdadeiro
console.log('07) v ^ v ->', true ^ true);   // false
console.log('08) v ^ f ->', true ^ false);  // true
console.log('09) f ^ v ->', false ^ true);  // true
console.log('10) f ^ f ->', false ^ false); // false

// Operadores Unários Lógicos

// Negação lógica (!)
console.log('11) !v ->', !true);  // false
console.log('12) !f ->', !false); // true
console.log('13) !!v ->', !!true); // true (dupla negação retorna o valor original)
console.log('14) !!f ->', !!false); // false