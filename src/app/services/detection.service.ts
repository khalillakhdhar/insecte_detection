import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DetectionService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewDetection(record) {
    return this.firestore.collection('Detections').add(record);
  }

  read_Detections() {
    return this.firestore.collection('Detections').snapshotChanges();
  }

  update_Detection(recordID, record) {
    this.firestore.doc('Detections/' + recordID).update(record);
    console.log('updated');
  }

  delete_Detection(record_id) {
    this.firestore.doc('Detections/' + record_id).delete();
  }
}