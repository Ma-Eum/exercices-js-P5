// Définir la fonction `add` qui prend deux paramètres `a` et `b`
function add(a, b) {
    // Convertir les paramètres en nombres au cas où ils seraient passés sous forme de chaînes
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    
    // Retourner la somme des deux nombres
    return num1 + num2;
  }
  
  // Exporter la fonction `add` pour qu'elle puisse être utilisée dans d'autres fichiers
  export default add;

  const result = add(10, 2);
  console.log(result);
  