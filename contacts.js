const fs = require('fs').promises;

const path = require('path');

const {nanoid} = require('nanoid');

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.contactId === contactId);
    return result || null;
}

const addContact  = async (data) => {
    const contacts = await listContacts();
    const newcontacts = {
        contactId: nanoid(),
        ...data,
    } 
contacts.push(newcontacts);
await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
return newcontacts;
}


module.exports = {
    listContacts,
    getContactById,
    addContact,
}