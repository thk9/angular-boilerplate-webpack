/* @ngInject */
export class SidebarController {
  constructor(bkPrompt) {
    this.bkPrompt = bkPrompt;
    
    this.description = 'hello world';
    this.keyword = 'American Beauty';
  }
  
  handleHotClick() {
    this.bkPrompt.speakHot();
  }
}