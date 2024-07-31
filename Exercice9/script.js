// votre code ici

// Définir la fonction checkAge
function checkAge(age) {
    // Vérifier si l'âge est inférieur à 18
    if (age < 18) {
      return "Vous êtes mineur.";
    }
    // Vérifier si l'âge est compris entre 18 et 65 (inclus)
    else if (age >= 18 && age < 65) {
      return "Vous êtes majeur.";
    }
    // Si l'âge est supérieur à 65
    else {
      return "Vous êtes senior.";
    }
  }

// Exemples d'utilisation de la fonction
console.log(checkAge(15));  // Affiche "Vous êtes mineur."
console.log(checkAge(30));  // Affiche "Vous êtes majeur."
console.log(checkAge(75));  // Affiche "Vous êtes senior."
  
export default checkAge;