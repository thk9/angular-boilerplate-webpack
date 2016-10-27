'use strict';

import { HMRStateProviderConfig, HMRProvider } from './hmr.cooperation';

const HMR_MODULE = '@bk/ng-hmr';

angular.module(HMR_MODULE, [])
  .config(HMRStateProviderConfig)
  .provider('$hmr', HMRProvider);

export { HMR_MODULE };