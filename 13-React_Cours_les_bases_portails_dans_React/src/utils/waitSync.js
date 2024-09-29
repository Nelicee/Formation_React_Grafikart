

// waitSync.js

// Cette fonction bloque l'exécution pendant un certain nombre de millisecondes.
// Utilise cette fonction avec précaution.
export function waitSync(milliseconds) {
  const start = Date.now();
  // Boucle jusqu'à ce que le temps écoulé soit égal au délai spécifié.
  while (Date.now() - start < milliseconds) {
    // Boucle vide pour bloquer le code.
  }
}