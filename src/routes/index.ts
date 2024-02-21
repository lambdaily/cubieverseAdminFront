import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const UsersTable = lazy(() => import('../pages/Tables/Users'));
const RolesTable = lazy(() => import('../pages/Tables/Roles'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const FormLayoutUpdate = lazy(
  () => import('../components/cars/FormLayoutupdate'),
);
const FormLayoutCreate = lazy(
  () => import('../components/cars/FormLayoutCreate'),
);
const Cars = lazy(() => import('../pages/Tables/Car/Cars'));

const coreRoutes = [
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables/user',
    title: 'Tables',
    component: UsersTable,
  },
  {
    path: '/tables/user/update/:id',
    title: 'Update User',
    component: FormLayoutUpdate,
  },
  {
    path: '/tables/role',
    title: 'Tables',
    component: RolesTable,
  },
  {
    path: '/tables/role/update/:id',
    title: 'Update Role',
    component: FormLayoutUpdate,
  },
  {
    path: '/tables/car',
    title: 'Cars',
    component: Cars,
  },
  {
    path: '/tables/car/update/:id',
    title: 'Update Car',
    component: FormLayoutUpdate,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  {
    path: '/tables/car/create/new',
    title: 'new-car',
    component: FormLayoutCreate,
  } /*,
  {
    path: '/car/update/:id', //hacer el path como cars/new 
    title: 'updatecar',
    component: FormLayoutUpdate, // usar camel case
  }, */,
];

const routes = [...coreRoutes];
export default routes;
