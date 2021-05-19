import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewInformation(record) {
    return this.firestore.collection('Informations').add(record);
  }

  read_Informations() {
    return this.firestore.collection('Informations').snapshotChanges();
  }

  update_Information(recordID, record) {
    this.firestore.doc('Informations/' + recordID).update(record);
    console.log('updated');
  }

  delete_Information(record_id) {
    this.firestore.doc('Informations/' + record_id).delete();
  }
}