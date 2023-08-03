const contacts = require("./contacts.js");


const invokeAction = async ({action, id, name, email, phone}) => {
    switch (action) {
        case 'read':
            const allContacts = await contacts.listContacts();
            return console.table(allContacts);

            case 'getById':
                const oneContact = await contacts.getContactById(id);
                return console.table(oneContact);

                case 'add':
                    const newcontacts = await contacts.addContact(name, email, phone);
                    return console.table(newcontacts);

    }
} 
  

//invokeAction({action: 'read'});
//invokeAction({action: 'getById', id: 'Z5sbDlS7pCzNsnAHLtDJd'});
invokeAction({action: 'add', name: 'Maria', email: 'mashuni92@gmail.com', phone: '0671537300'});

