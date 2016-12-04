/**
 * @description - lite modal controller
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
export class TodoModalController {
  constructor($uibModalInstance) {
    this.$uibModalInstance = $uibModalInstance;
  }

  accept() {
    console.log('Modal HMR accept 123!');
    this.$uibModalInstance.close('accept');
  }

  reject() {
    this.$uibModalInstance.dismiss('cancel');
  }
}
