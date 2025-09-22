import { Client, Account, Databases } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();

// Default fallback values to prevent errors when env vars are not set
const APPWRITE_ENDPOINT = process.env.REACT_APP_APPWRITE_API_ENDPOINT || 'https://placeholder-endpoint.appwrite.io/v1';
const APPWRITE_PROJECT_ID = process.env.REACT_APP_APPWRITE_PROJECT_ID || 'placeholder-project-id';

client
    .setEndpoint(APPWRITE_ENDPOINT) // Your Appwrite Endpoint
    .setProject(APPWRITE_PROJECT_ID);   // Your Appwrite Project ID

// Export the instances of the Appwrite services you want to use
export const account = new Account(client);
export const databases = new Databases(client);

// Export your Database and Table IDs for easy access across your app
export const databaseId = process.env.REACT_APP_APPWRITE_DATABASE_ID || 'placeholder-database-id';
export const eventsTableId = process.env.REACT_APP_EVENTS_TABLE_ID || 'placeholder-events-table-id';
export const registrationsTableId = process.env.REACT_APP_REGISTRATIONS_TABLE_ID || 'placeholder-registrations-table-id';
export const profilesTableId = process.env.REACT_APP_PROFILES_TABLE_ID || 'placeholder-profiles-table-id';