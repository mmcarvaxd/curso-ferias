import { ContactType } from './contactType.model';

export interface Contact {
  id?: number;
  name: string;
  contactNumber: string;
  contactType: ContactType;
}
