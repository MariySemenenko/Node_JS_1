const fs = require("fs").promises;

const path = require("path");

const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "/db", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  return result || null;
};

const addContact = async (data) => {
  const contacts = await listContacts();
  const newcontacts = {
    contactId: nanoid(),
    ...data,
  };
  contacts.push(newcontacts);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newcontacts;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const  [result]  = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
