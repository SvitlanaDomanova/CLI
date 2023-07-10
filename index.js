import { program } from "commander";
import contacts from "./contacts.js";  
program
	.option("-a, --action <type>", "choose action")
	.option("-i, --id <type>", "user id")
	.option("-n, --name <type>", "user name")
	.option("-e, --email <type>", "user email")
	.option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({action, id, name, email, phone}) => {
    switch (action) {
      case 'list':
        const allContacts = await contacts.listContacts();
        return console.table(allContacts);

      case 'get':
            const oneContacts = await contacts.getContactById(id);
            return console.table(oneContacts);
  
      case 'add':
            const newContacts = await contacts.addContact({name, email, phone})
            return console.table(newContacts);
  
      case 'remove':
        const removeContact = await contacts.removeContact(id);
        console.log(`Contact by ID removed: ${id}`);
        return console.table(removeContact);

      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  
  invokeAction(argv);
  