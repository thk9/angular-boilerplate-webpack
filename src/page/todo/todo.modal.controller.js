/**
 * @description - lite modal controller
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
export class TodoModalController {
  constructor($uibModalInstance) {
    this.$uibModalInstance = $uibModalInstance;
  }

  accept() {
    this.$uibModalInstance.close('accept');
  }

  reject() {
    this.$uibModalInstance.dismiss('cancel');
  }
}
