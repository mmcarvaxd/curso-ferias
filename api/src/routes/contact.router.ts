import { Router, Request, Response } from 'express'
import { ContactController } from '../controllers/contact.controller'


export class ContactRouter {
    
    getRoutes() {
        const router = Router()
        const contactController = new ContactController()

        router.get('/', (req: Request, res: Response) => contactController.getContacts(req, res))
        router.get('/:id', (req: Request, res: Response) => contactController.getContact(req, res))
        router.post('/', (req: Request, res: Response) => contactController.createContact(req, res))
        router.put('/', (req: Request, res: Response) => contactController.updateContact(req, res))
        router.delete('/', (req: Request, res: Response) => contactController.deleteContact(req, res))
        
        return router
    }
} 