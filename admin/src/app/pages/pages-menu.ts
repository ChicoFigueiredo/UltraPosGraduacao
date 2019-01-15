import { NbMenuItem } from '@nebular/theme';
import { DEV_ITENS } from './pages-menu.dev';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'ADMIN',
    group: true,
  },
  {
    title: 'Parâmetros',
    icon: 'ion-code-working',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Cupons',
        link: '/pages/parametros/cupons',
      },
    ],
  },
  ...DEV_ITENS,
];


