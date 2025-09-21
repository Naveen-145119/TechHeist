import { Client, Account, Databases } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();

client
    .setEndpoint(process.env.REACT_APP_APPWRITE_API_ENDPOINT) // Your Appwrite Endpoint
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);   // Your Appwrite Project ID

// Export the instances of the Appwrite services you want to use
export const account = new Account(client);
export const databases = new Databases(client);

// Export your Database and Table IDs for easy access across your app
export const databaseId = process.env.REACT_APP_APPWRITE_DATABASE_ID;
export const eventsTableId = process.env.REACT_APP_EVENTS_TABLE_ID;
export const registrationsTableId = process.env.REACT_APP_REGISTRATIONS_TABLE_ID;
export const profilesTableId = process.env.REACT_APP_PROFILES_TABLE_ID;