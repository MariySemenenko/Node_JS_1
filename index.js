const contacts = require("./contacts.js");

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();



const invokeAction = async ({action, id, name, email, phone}) => {
    switch (action) {
        case 'list':
            const allContacts = await contacts.listContacts();
            return console.table(allContacts);

            case 'getById':
                const oneContact = await contacts.getContactById(id);
                return console.table(oneContact);

                case 'add':
                    const newcontacts = await contacts.addContact(name, email, phone);
                    return console.table(newcontacts);

                    case 'remove' :
                        const deleteContact = await contacts.removeContact(id);
                        return console.table(deleteContact);

                        default :
                        return console.log('Unknown action');

    }
} 
  
invokeAction(argv);




//invokeAction({action: 'read'});
//invokeAction({action: 'getById', id: 'Z5sbDlS7pCzNsnAHLtDJd'});
// invokeAction({action: 'add', name: 'Maria', email: 'mashuni92@gmail.com', phone: '0671537300'});
//invokeAction({action: 'remove', id: 'C9sjBfCo4UJCWjzBnOtxl'});
