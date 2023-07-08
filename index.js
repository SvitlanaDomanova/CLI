import { Command } from "commander";
import { program } from "commander";
import contactsService from "./contacts.js";    
const program = new Command();
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
        const allContacts = await contactsService.listContacts();
        return console.table(allContacts);

      case 'get':
            const oneContacts = await contactsService.getContactById(id);
            return console.table(oneContacts);
  
      case 'add':
            const newContacts = await contactsService.addContact({name, email, phone})
            return console.log(newContacts);
  
      case 'remove':
        const removeContact = await contacts.removeContact(id);
        console.log(`Contact by ID removed: ${id}`);
        return console.table(removeContact);

      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  
  invokeAction(argv);
  