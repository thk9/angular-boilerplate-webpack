'use strict';

import { HMRStateProviderConfig, HMRModalDecoratorConfig, HMRProvider } from './hmr.cooperation';

const HMR_MODULE = '@bk/ng-hmr';

angular.module(HMR_MODULE, [])
  .config(HMRStateProviderConfig)
  .config(HMRModalDecoratorConfig)
  .provider('$hmr', HMRProvider);

export { HMR_MODULE };