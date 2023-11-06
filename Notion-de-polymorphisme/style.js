// Polymorphisme: Capacité d' un object à prendere plusieurs formes
class User{
    constructor(noms){
        this.noms=noms;

    }
    login(){
        console.log('${this.noms} connecté en tant qu utilisateur');
    }
}
class Admin extends User {
    login(){
        super.login();
        console.log('${this.nom} connecté en tant qu admin');
    }n 
}
const user1= new User('musole Louis');
const admin=new Admin('Blaise Tarzan');
user1.login();
admin.login()
console.log(user1);