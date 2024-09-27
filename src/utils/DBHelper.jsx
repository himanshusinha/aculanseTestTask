import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'DriverDB.db',
    location: 'default',
  },
  () => {},
  error => {
    console.error('Error opening database: ', error);
  },
);

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Drivers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, mobile TEXT, registration_number TEXT, vehicle_type TEXT, passenger_capacity TEXT, image_uri TEXT)',
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.error('Error creating table: ', error);
      },
    );
  });
};

export const insertDriver = driver => {
  const {
    name,
    email,
    mobile,
    registration_number,
    vehicle_type,
    passenger_capacity,
    image_uri,
  } = driver;
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Drivers (name, email, mobile, registration_number, vehicle_type, passenger_capacity, image_uri) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        name,
        email,
        mobile,
        registration_number,
        vehicle_type,
        passenger_capacity,
        image_uri,
      ],
      () => {
        console.log('Driver added successfully');
      },
      error => {
        console.error('Error inserting driver: ', error);
      },
    );
  });
};

export const getDrivers = callback => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM Drivers',
      [],
      (tx, results) => {
        const drivers = [];
        for (let i = 0; i < results.rows.length; i++) {
          drivers.push(results.rows.item(i));
        }
        callback(drivers);
      },
      error => {
        console.error('Error fetching drivers: ', error);
      },
    );
  });
};
