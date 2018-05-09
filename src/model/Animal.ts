import *as firebase from 'firebase';
export class Animal{
    id:string;
    id_user:string;
    name: string;
    image: string;
    type: string;
    age: number;
    sexe: string;

    reference: firebase.database.Reference;

    creerAnimal(){
        this.reference = firebase.database().ref('User/'+ this.id_user +'/Animal/'+ this.id);
        this.reference.set({
            id : this.id,
            id_user : this.id_user,
            name : this.name,
            image : this.image,
            type : this.type,
            age : this.age,
            gender : this.sexe

        });
    }

    modifAnimal(){
    
    }

    supprAnimal(){

    }
}