import { Injectable, signal, WritableSignal } from '@angular/core';
// import { SQLiteConnection, CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';

// const DB_Demo = "demodb";

// export interface Demo {
//   id: number;
//   name: string;
//   description: string;
// }

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  // private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  // private db!: SQLiteDBConnection;
  // private demo: WritableSignal<Demo[]> = signal<Demo[]>([]);

  // constructor() {

  // }

  // async initializePlugin(){
  //   this.db = await this.sqlite.createConnection(
  //     DB_Demo,
  //     false,
  //     "no-encryption",
  //     1,
  //     false
  //   );
  //   await this.db.open();

  //   const schema = `CREATE TABLE IF NOT EXISTS demos (
  //     id INTEGER PRIMARY KEY NOT NULL,
  //     name TEXT NOT NULL,
  //     description TEXT
  //   );`;

  //   await this.db.execute(schema);
  //   this.loadDemos();
  //   return true;
  // }

  // async loadDemos(){
  //   const result = await this.db.query("SELECT * FROM demos;");
  //   this.demo.set(result.values || []);
  // }

  // async addDemos(name: string, description: string){
  //   const query =  `INSERT INTO demos (name, description) VALUES ("${name}", "${description}")`;
  //   const result = await this.db.query(query);
  //   this.loadDemos();
  //   return result;
  // }
}
