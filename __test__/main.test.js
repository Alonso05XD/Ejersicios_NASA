

const objeto = require('../javascript/main.js');

test("Test 1", () => {
    const result = objeto.obtenerSubconjuntos(["M","A","I",""]);
    expect(result).toEqual([
        [ 'M' ],
        [ 'M', 'A' ],
        [ 'M', 'A', 'I' ],
        [ 'M', 'A', 'I', '' ],
        [ 'M', 'A', '' ],
        [ 'M', 'I' ],
        [ 'M', 'I', '' ],
        [ 'M', '' ],
        [ 'A' ],
        [ 'A', 'I' ],
        [ 'A', 'I', '' ],
        [ 'A', '' ],
        [ 'I' ],
        [ 'I', '' ],
        [ '' ]
      ]);
});

test("Test 2", () => {
    const result = objeto.buscarPalabra([["H"],["O"],["L"],["A"],["M"],["U"],["N"],["D"],["O"]], "HOLA");
    expect(result).toBe(true)
})

test("Test 3", () => {
    const result = objeto.comprimir("aaaaagggtssss");
    expect(result).toEqual("a5g3t1s4");
})