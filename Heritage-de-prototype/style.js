// Proptotype (__proto__):C'est un oobject qui regroupe l'ensemble des méthodes d'un object
function Utilisateur(noms,email,...amis){
    this.noms=noms;
    this.email = email;
    this.amis =amis;
}
function Admin(...parms){
    // Heritage des propriétés
    Utilisateur.apply(this,parms);
}

// Liaison d'une méthode au prototype
Utilisateur.prototype.login = function(){
    console.log('${email} est connecté(e)');
}
Utilisateur.prototype.logout = function(){
    console.log('${email} est déconnecté(e)');
}
// Heritage  des prototypes (méthodes)
Admin.prototype=Object.create(Utilisateur.prototype);

// Fonction seuleument accessible par l'admin
Admin.prototype.supprimerUtilisateur = function(util){
    utilisateurs = utilisateurs.filter(utilisateur => {
        return utilisateur.email != util.email;

    });
}
const util1= new Utilisateur('musole Louis','musole@gamil.com','Alice','Grace');
const util2=new Utilisateur('Blaise Juu','blaiseàgmail.com','Plamedi');
const util3= new Utilisateur('Hulu Fail','hulu@gamil.com','Plamedi');
const admin=new Admin('chance Js','chance@gmail.com','Gorge','Darius');

let utilisateurs=[util1,util2,util3,admin];
console.log(utilisateurs);

admin.supprimerUtilisateur(util1);
console.log(utilisateurs);

