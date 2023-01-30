import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Farmacia } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaSerService {

  constructor( private firestore:Firestore) { }
  addProduct(producto:Farmacia){
    const farmaciaRef = collection(this.firestore, 'farmacia');
    return addDoc(farmaciaRef, producto);
  }
  getFarmacia():Observable<Farmacia[]>{
    const farmaciaRef = collection(this.firestore, 'farmacia');
    return collectionData(farmaciaRef, {idField:'id'}) as Observable<Farmacia[]>
  }
  deleteFarmacia(farmacia:Farmacia){
    const farmaciaRef = doc(this.firestore, `farmacia/${farmacia.id}`)
    return deleteDoc(farmaciaRef);
  }
}
