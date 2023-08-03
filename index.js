const contacts = require("./contacts.js");

const invokeAction = async ({action, id, name, email, phone}) => {
    switch (action) {
        case 'read':
            const allContacts = await contacts.getAll();
            return console.log(allContacts);

            case 'getById':
                const oneContact = await contacts.getById(id);
                return console.log(oneContact)

    }
} 
  

//invokeAction({action: 'read'});
//invokeAction({action: 'getById', id: 'Z5sbDlS7pCzNsnAHLtDJd'});
invokeAction({action: 'add', name: 'Maria', email: 'mashuni92@gmail.com', phone: '0671537300'});

