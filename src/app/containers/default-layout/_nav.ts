import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'Gestionar',
    title: true,
    iconComponent: { name: 'house' },
  },
  {
    name: 'Tienda',
    url: '/base',
    iconComponent: { name: 'hose' },
    children: [
      {
        name: 'Categoría',
        url: '/base/accordion',
        iconComponent: { name: 'chart' },
      },
      {
        name: 'Items',
        url: '/base/breadcrumbs',
        iconComponent: { name: 'cart' },
      },      
    ]
  },
  
];
