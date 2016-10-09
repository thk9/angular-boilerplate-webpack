export class SidebarController {
  /* @ngInject */
  constructor($http, Notification, bkPrompt) {
    this.$http = $http;
    this.Notification = Notification;
    this.bkPrompt = bkPrompt;
    
    this.description = 'hello world';
    this.authority = {};
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