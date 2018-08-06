import { cartPath } from '~/src/helpers/routes/CartRoute';
import { catalogPath } from '~/src/helpers/routes/CatalogRoute';
import { contactsPath } from '~/src/helpers/routes/ContactsRoute';


const menuItems = [
    {
        name: 'Main',
        url: catalogPath()
    },
    {
        name: 'Cart',
        url: cartPath(),
    },
    {
        name: 'Contacts',
        url: contactsPath()
    }
];

export default menuItems;