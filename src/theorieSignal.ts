import { computed, signal } from '@angular/core';

// signal est primitif
const count = signal(1);
count.set(2); // changer la valeur de count
count.update((count) => count + 1); // rajouter +1 à count
console.log(count()); // afficher la valeur de count

// computed est un signal dévrivé d'un signal primitif
// Il n'existe pas de .set pour un signal dérivé
// On ne peut pas modifier à la main un signal dérivé
// Un calculé (computed) est une valeur dérivée qui est automatiquement mise à jour
// en fonction d'autres valeurs ou signaux.
const comput: any = computed(() => count() * 2); // comput prend la valeur de count

/*
En mettant des dérivés dans des composants, on peut mettre à jour le signal, 
qui va se reporter dans tous les composants où il sera appelé.
  Exemple : si on a un signal dans un service pour un panier d'achat,
  il pourra être répercuté dans tous les composants où il sera utilisé
*/

const showCount = signal(false);
const conditionalCount = computed(() => {
  console.log('Entrée dans conditionnalCount');
  if (showCount()) {
    console.log('recalcul de count');
    return `count : ${count()}.`;
  } else {
    return 'Rien à voir.';
  }
});
