import localforage from 'localforage';

localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'mental-health-checklist',
    version: '0.1'
});

const persistedStore = localforage.createInstance({
    name: 'mental-health-checklist'
});

const STORE_KEYS = Object.freeze({
    DEPRESSION_CHECKLISTS: 'depression-checklists'
});

export default persistedStore;
export { STORE_KEYS };