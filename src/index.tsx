import React from 'react';
import { render } from 'react-dom';

import { App } from './App';

const body = document.getElementsByTagName('body')[0];
const root = document.createElement('div');

render(<App />, body.appendChild(root));
