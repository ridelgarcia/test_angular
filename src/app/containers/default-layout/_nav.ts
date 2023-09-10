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
        children:[
          {
            name:'Adicionar Categoría',
            url:'/category/add-category'
          },
          {
            name:'Buscar Categoría',
            url:'/category/search-category'
          }
        ],
      },
      {
        name: 'Items',
        url: '/base/breadcrumbs',
        iconComponent: { name: 'cart' },
        children:[
          {
            name:'Adicionar Item',
            url:'/items/add-item'
          },
          {
            name:'Buscar Item',
            url:'/items/search-item'
          }
        ],
      },      
    ]
  },
  
];
