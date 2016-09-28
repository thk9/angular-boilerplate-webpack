/**
 * @description - layout router config
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

import { CollectionController } from './collection.controller';

// router rule declare
export const CollectionRoute = [
  {
    name: 'application.collection',
    url: '/collection',
    views: {
      'page': {
        template: require('./collection.html'),
        controller: CollectionController,
        controllerAs: 'vm'
      }
    }
  }
];

// router config implement
export function /* @ngInject */ $collectionRouterConfig($stateProvider) {
  [...CollectionRoute].forEach((route) => {
    $stateProvider.state(route);
  });
}