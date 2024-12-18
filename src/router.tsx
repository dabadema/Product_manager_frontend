import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Product, {
    loader as productsLoader,
    action as updateAvailabilityAction,
} from './views/Product';
import NewProduct, { action as newProductAction } from './views/NewProduct';
import EditProduct, {
    loader as editProductLoader,
    action as editProductAction,
} from './views/EditProduct';
import { action as deleteProductAction } from './components/ProductDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Product />,
                loader: productsLoader,
                action: updateAvailabilityAction,
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction,
            },
            {
                path: 'productos/:id/editar', // ROA Pattern - Resource-oriented design
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction,
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction,
            },
        ],
    },
]);
