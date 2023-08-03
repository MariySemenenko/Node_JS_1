const fs = require('fs').promises;

const path = require('path');

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

module.exports = {
    listContacts,
    getContactById,
}