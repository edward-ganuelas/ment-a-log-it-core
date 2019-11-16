import localforage from 'localforage';

localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'mental-health-checklist',
    version: '0.1'
});

const persistedStore = localforage.createInstance({
    name: 'mental-health-checklist'
});

export default persistedStore;