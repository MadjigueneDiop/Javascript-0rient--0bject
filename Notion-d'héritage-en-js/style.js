// Heritage des propriétés et des fonctions
// let Utilisateur;
class Admin extends Utilisateur{
    // methode accessible uniquement aux admins
    supprimerUtilisateurs(util){
        utilisateurs = utilisateurs.filter(utilisateur =>{
            return utilisateur.email != util.email;
        })
    }
}
const util1 = new Utilisateur('Musole Louis','musole@gmail.com','Charles');7
const util2=new Utilisateur('Blaise Toin','blaise@gmail.com','Gloria','Juice');
const admin = new Admin('chance key','chance@gmail.com','Jonathan','Moise');

let utilisateurs = [util1,util2,admin];
console.log(utilisateurs);

admin.supprimerUtilisateurs(util1);
console.log(utilisateurs);