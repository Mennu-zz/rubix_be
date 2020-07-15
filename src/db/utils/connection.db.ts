import mongoose from 'mongoose';

export class DbConnection {
    public static async initConnection() {
        process.env.DB_CONN_STR = `mongodb://${process.env.DB_IP}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
       await DbConnection.connect(process.env.DB_CONN_STR);
    }

    public static async connect(DB_CONN_STR: string) {
        return mongoose.connect(
            DB_CONN_STR,
            { useNewUrlParser: true, useFindAndModify: false },
        ).then(() => {
            console.log(`Successfully connected to ${DB_CONN_STR}`);
        }).catch((error) => {
            console.log('Error connecting to db', error);
            return process.exit(1);
        })
    }

    public static async disconnect() {
        await mongoose.connection.close(); 
    }
}