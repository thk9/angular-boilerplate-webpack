/**
 * @description - HMR bridge manager util method
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

const captureModalIdentity = /^<!--\s@ngModalIdentity\s(.+)\s-->/;

/**
 * @description - analyze modal template identity
 *
 * @param {string} template
 * @return {string}
 */
export function analyzeModalIdentity(template) {
  let match = captureModalIdentity.exec(template);

  return match[1];
}

/**
 * @description - modal template selector
 *
 * @param {string} additionalWindowClass
 * @return {string}
 */
export function huntModalSelector(additionalWindowClass) {
  return `.${additionalWindowClass} .modal-content`;
}
/**
 * @description - transform modal identity (absolute path) into normal class name
 *
 * @param {string} identity
 *
 * @return {string}
 *
 * @example
 * // src-page-love-love-modal-html
 * resolveModalClass('src/page/love/love.modal.html')
 */
export function transformModalClass(identity) {
  return identity.replace(/(\/|\.)/g, '-').toLowerCase();
}

/**
 * @description - resolve modal identity into modal window class
 *
 * @param {string} windowClass
 * @param {string} additionalWindowClass
 *
 * @return {string}
 */
export function resolveModalClass(windowClass, additionalWindowClass) {
  switch (true) {
    case !windowClass:
      return additionalWindowClass;
    case !windowClass.includes(additionalWindowClass):
      return `${windowClass} ${additionalWindowClass}`;
    default:
      return windowClass;
  }
}