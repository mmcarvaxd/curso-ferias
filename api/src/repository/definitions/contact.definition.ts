import {EntitySchema} from "typeorm";
import { Contact } from "../../model/contact.model";

export const ContactEntity = new EntitySchema<Contact>({
    name: "contact",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String
        },
        contactNumber: {
            type: String,
            length: 11
        }
    },
    relations: {
        contactType: {
            type: 'many-to-one',
            target: 'contactType'
        }
    }
});