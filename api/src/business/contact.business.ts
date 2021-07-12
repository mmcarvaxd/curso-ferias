import { Contact } from "../model/contact.model";
import { ContactRepository } from "../repository/contact.repository";

export class ContactBusiness {
    
    contactRepository: ContactRepository

    async getContacts(): Promise<Contact[]> {
        return await this.contactRepository.getContacts()
    }

    async getContact(id: number): Promise<Contact>  {
        return await this.contactRepository.getContact(id)
    }

    async createContact(contact: Contact): Promise<Contact> {
        if(contact.name.length === 0) {
            throw 'Name inválido'
        }

        if(contact.contactNumber.length < 10 || contact.contactNumber.length > 11) {
            throw 'ContactNumber inválido'
        }
        
        return await this.contactRepository.createContact(contact)
    }

    async updateContact(contact: Contact): Promise<Contact> {
        if(contact.name.length === 0) {
            throw 'Name inválido'
        }

        if(contact.contactNumber.length < 11 || contact.contactNumber.length > 11) {
            throw 'ContactNumber inválido'
        }
        
        return await this.contactRepository.updateContact(contact)
    }
    
    async deleteContact(id: number): Promise<void> {
        
        return await this.contactRepository.deleteContact(id)
    }

    constructor() {
        this.contactRepository = new ContactRepository()
    }

}