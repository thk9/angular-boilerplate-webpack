'use strict';

import {
  HMRStateProviderConfig,
  HMRModalDecoratorConfig,
  HMRInjectorDecoratorConfig,
  HMRProvider
} from './hmr.cooperation';

const HMR_MODULE = '@bk/ng-hmr';

angular.module(HMR_MODULE, [])
  .config(HMRStateProviderConfig)
  .config(HMRModalDecoratorConfig)
  .config(HMRInjectorDecoratorConfig)
  .provider('$hmr', HMRProvider);

export { HMR_MODULE };