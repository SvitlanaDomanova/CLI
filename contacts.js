import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const filePath = path.resolve("db", "contacts.json");

 const listContacts = async()=> {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}
 const getContactById = async(id)=> {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === id);
    return result || null;
}

 const removeContact = async (id) => {
    const contacts = await listContacts();
    const index = contacts.find(item => item.id === id);
    if (index === -1) {
      return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
    return result;
  };
 const addContact= async(name, email, phone)=> {
    const contacts = await listContacts();
    const newContacts = {
        id: nanoid(),
        name,
        email,
        phone,
    }
    contacts.push(newContacts);
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
    return newContacts || null;
}
module.exports = { listContacts, getContactById, addContact, removeContact };