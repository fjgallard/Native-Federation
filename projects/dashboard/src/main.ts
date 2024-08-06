import { initFederation } from '@angular-architects/native-federation';

initFederation()
  .catch(err => console.error(err))
  .then(_ => {
    console.log('initialized');
    return import('./bootstrap')
  })
  .catch(err => console.error(err));
