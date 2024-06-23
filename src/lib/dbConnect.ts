import mongoose from 'mongoose';

type connectionObject = {
    isConnected: number;
};

const connection: connectionObject = {
    isConnected: 0,
};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('Using existing database connection');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

        connection.isConnected = db.connections[0].readyState;
        console.log('Database connected', db);
    } catch (error) {
        console.log('Error connecting to database: ', error);
        process.exit(1);
    }
}

export default dbConnect;