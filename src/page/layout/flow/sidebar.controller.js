export class SidebarController {
  /* @ngInject */
  constructor($http, Notification, bkPrompt) {
    this.$http = $http;
    this.Notification = Notification;
    this.bkPrompt = bkPrompt;
    
    this.description = 'Let\'s fight together 1234!';
    this.authority = {};
  }

  shouldFieldUpdate(field) {
    return ['description', 'authority'].includes(field);
  }
  
  handleAuthorityClick(authority) {
    console.group('Authority');
    console.log(this.authority);
    console.log(authority);
    console.groupEnd('Authority');
  
    this.$http.post('/api/example', authority).then((data) => {
      console.log(data);
    }, () => {
      this.Notification.error('Network not connect');
    });
  }
}

SidebarController.ng_hmr_identity ='layout_flow_sidebar_controller_js';