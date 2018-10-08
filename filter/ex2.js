/* Array.prototype.filter - Exercice 2

Ecrire une fonction getMultiplesOf qui reçoit deux arguments:
1. un tableau de nombres.
2. un nombre.
En utilisant filter, elle doit renvoyer un tableau ne contenant que les
nombres du 1er argument qui sont multiples du nombre passé en 2ème.

Exemple d'entrée:
  1er argument:  [-12, -10, -7, -1, 5, 8, 11, 15, 20, 27]
  2ème argument: 5

  Sortie attendue:
  [-10, 5, 15, 20]

 */

function getMultiplesOf(numbers, n) {
  const isMultiplesOf = numbers.filter((x, y) => {
    y = n;
    if (x % y === 0) {
      return x;
    }
  });
  return isMultiplesOf;
}

//const tab = [-12, -10, -7, -1, 5, 8, 11, 15, 20, 27];
//const x = 5;
//console.log(getMultiplesOf(tab, x));

// Ne pas modifier l'export
module.exports = getMultiplesOf;
