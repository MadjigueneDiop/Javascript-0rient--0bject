// Proptotype (__proto__):C'est un oobject qui regroupe l'ensemble des méthodes d'un object
function Utilisateur(noms,email,...amis){
    this.noms=noms;
    this.email = email;
    this.amis =amis;
}
// Liaison d'une méthode au prototype
Utilisateur.prototype.login = function(){
    console.log('${email} est connecté(e)');
}
Utilisateur.prototype.logout = function(){
    console.log('${email} est déconnecté(e)');
}
const util1 = new Utilisateur('Musole Louis','musole@gmail.com','Dody','Mira');

console.log(util1);


