/**
 * https://medium.com/@nate.d.gage/configuring-jest-with-next-js-6670f0026dd9
 *
 * Config from Nage Gage
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
