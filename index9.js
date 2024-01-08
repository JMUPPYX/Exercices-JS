//  Écrivez une fonction nommée reste qui prend deux paramètres a et b, et qui renvoie le reste de la division de a par b, 
// en utilisant l’opérateur modulo %. 
//Si b est égal à zéro, la fonction doit renvoyer "erreur".




function reste (a,b) {
     if (b==0){
         console.log ("erreur")
     }
     return  a % b;
 }