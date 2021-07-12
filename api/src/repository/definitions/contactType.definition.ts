import {EntitySchema} from "typeorm";
import { ContactType } from "../../model/contactType.model";

export const ContactTypeEntity = new EntitySchema<ContactType>({
    name: "contactType",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        type: {
            type: String
        }
    }
});