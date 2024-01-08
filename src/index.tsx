import * as React from 'react';
import { render } from 'react-dom';
import Examples from './examples/Examples';

render(<Examples />, document.getElementById('root'));

if (import.meta.env.DEV) {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React, { exclude: [/^RLDDFloating/] });
}
