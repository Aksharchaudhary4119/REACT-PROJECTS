import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { RouterProvider } from "react-router-dom";
import MainRouter from './Routes/MainRouter';
import './custom.css';
import { CookiesProvider } from 'react-cookie';





const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<SeatSelection />);

root.render(<CookiesProvider defaultSetOptions={{ path: '/' }}> <RouterProvider router={MainRouter} /> </CookiesProvider>);
