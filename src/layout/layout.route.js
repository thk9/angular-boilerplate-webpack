/**
 * @description - layout router config
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

export const LayoutRouter = [
  {
    name: 'authorize',
    url: '/authorize',
    views: {
      'core': {
        template: require('./authority/authorize.html')
      }
    }
  },
  {
    name: 'application',
    url: '/application',
    views: {
      'navbar': {
        template: require('./flow/navbar.html')
      },
      'sidebar': {
        template: require('./flow/sidebar.html')
      },
      'core': {
        template: require('./flow/core.html')
      }
    }
  }
];