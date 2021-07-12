import { Request, Response } from 'express'
import { ContactBusiness } from '../business/contact.business'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { Contact } from '../model/contact.model'

export class ContactController {
    contactBusiness: ContactBusiness

    async getContacts(req: Request, res: Response) {

        return res.json(await this.contactBusiness.getContacts())
    }

    async getContact(req: Request, res: Response) {

        const id = Number(req.params.id)

        if(Number.isNaN(id)) {
            return res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST)
        }

        return res.json(await this.contactBusiness.getContact(id))
    }

    async createContact(req: Request, res: Response) {
        const contact: Contact = req.body

        return res.json(await this.contactBusiness.createContact(contact))
    }

    async updateContact(req: Request, res: Response) {
        const contact: Contact = req.body

        return res.json(await this.contactBusiness.updateContact(contact))
    }
    
    async deleteContact(req: Request, res: Response) {
        
        const id = Number(req.params.id)

        if(Number.isNaN(id)) {
            return res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST)
        }

        return res.status(StatusCodes.NO_CONTENT)
    }
        
    constructor() {
        this.contactBusiness = new ContactBusiness()
    }
}