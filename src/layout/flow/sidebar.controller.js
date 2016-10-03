/* @ngInject */
export class SidebarController {
  constructor(bkPrompt) {
    this.description = 'hello world';
    this.bkPrompt = bkPrompt;
  }
  
  handleHotClick() {
    this.bkPrompt.speakHot();
  }
}