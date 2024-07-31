//votre code ici
// Définir la fonction `printNumbers` qui prend un paramètre `n`
function printNumbers(n) {
    // Initialiser une variable pour stocker la chaîne de caractères
    let result = '';
    
    // Utiliser une boucle `for` pour itérer de 1 à `n`
    for (let i = 1; i <= n; i++) {
      // Ajouter le nombre actuel à la chaîne de caractères
      result += i;
      // Ajouter un espace après chaque nombre, sauf le dernier
      if (i < n) {
        result += ' ';
      }
    }
    
    // Retourner la chaîne de caractères finale
    return result;
  }

export default printNumbers

// Exemples d'utilisation de la fonction `printNumbers`
console.log(printNumbers(5));  // Affiche "1 2 3 4 5"
console.log(printNumbers(10)); // Affiche "1 2 3 4 5 6 7 8 9 10"