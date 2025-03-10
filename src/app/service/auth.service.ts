import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IUser } from '../model/user.model';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(AngularFireAuth);
  firebaseDb = inject(AngularFirestore); //save all data of user
  router = inject(Router)

  private userCollection!: AngularFirestoreCollection<IUser>;
  public isAuthenticated!: Observable<boolean>;

  constructor() {
    this.userCollection = this.firebaseDb.collection('users');
    this.isAuthenticated = this.firebaseAuth.user.pipe(map((user) => !!user));
  }

  async createUser(userData: IUser) {
    console.log(userData);

    if (!userData.password) {
      throw new Error('پسورد نیست');
    }

    const userCred = await this.firebaseAuth.createUserWithEmailAndPassword(
      userData.email!,
      userData.password!
    );
    console.log(userCred);
    if (!userCred.user) {
      throw new Error(' کاربر ثبت نام نشد');
    }
    this.userCollection.doc(userCred.user.uid).set({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      age: userData.age,
    });
    await userCred.user.updateProfile({ displayName: userData.name });
  }

  async login(email: any, password: any) {
    return this.firebaseAuth
      .signInWithEmailAndPassword(
        email,
        password
      )
    // .then((res) => {
    //   console.log(res);
    // });
  }

  async logOutUser(event: Event) {
    event.preventDefault();
    await this.firebaseAuth.signOut();
    this.router.navigateByUrl('/')
  }
}
