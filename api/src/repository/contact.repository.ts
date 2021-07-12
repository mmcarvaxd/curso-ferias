import { createConnection, getConnection, Repository } from "typeorm"
import { Contact } from "../model/contact.model"
import { ContactType } from "../model/contactType.model"
import { ContactEntity } from "./definitions/contact.definition"
import { ContactTypeEntity } from "./definitions/contactType.definition"

export class ContactRepository {
    private contactRepository: Repository<Contact>
    private contactTypeRepository: Repository<ContactType>

    async getContacts(): Promise<Contact[]> {
        return this.contactRepository.find()
    }

    async getContact(id: number): Promise<Contact>{
        const contact = await this.contactRepository.findOne(id)
        return contact
    }

    async createContact(contact: Contact): Promise<Contact> {
        const type = await this.contactTypeRepository.findOne(contact.contactType.id)

        if(!type) {
            throw 'Tipo de contato inexistente'
        }

        contact.contactType = type

        const newContact = this.contactRepository.create(contact)
        await this.contactRepository.save(newContact)

        return newContact
    }

    async updateContact(contact: Contact): Promise<Contact>  {
        const type = await this.contactTypeRepository.findOne(contact.contactType.id)

        if(!type) {
            throw 'Tipo de contato inexistente'
        }

        const oldContact = await this.contactRepository.findOne(contact.id)

        contact.contactType = type

        const newContact = this.contactRepository.merge(oldContact, contact)
        await this.contactRepository.save(newContact)

        return newContact
    }
    
    async deleteContact(id: number): Promise<void> {
        await this.contactRepository.delete(id)
        return 
    }

    constructor() {
        createConnection().then(()=>{

            this.contactRepository = getConnection().getRepository(ContactEntity)
            this.contactTypeRepository = getConnection().getRepository(ContactTypeEntity)
        })
    }
}