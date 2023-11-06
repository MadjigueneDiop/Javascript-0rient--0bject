// Abstraction : se baser sur l'essentiel et non sur le détail
function Employe(noms,age,sexe,salaire){
    this.noms=noms;
    this.age=age;
    this.sexe=sexe;
    this.salaire=salaire;
    const allocation=7000;
    const primeDuRisque = 600;
    const calculSalaire= function(){
        console.log('le salaire final:${salaire + allocation + primeDuRisque}')
    }
    this.infoEmploye=function(){
        console.log('Nom:${this.noms}');
        console.log('Age:${this.age}');
        console.log('sexe:${this.sexe}');
        console.log('salaire:${this.salaire}');
        calculSalaire();

    }
}
// L'instance
const emp1=new Employe('Daniel Cruz',30,'M',50000);
const emp2=new Employe('Fiona Gallagher',45,'F',90000);
emp1.infoEmploye();
emp2.infoEmploye();
