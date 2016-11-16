import React from 'react';                     // required to get test to work.  we can get around this later with more configuration
import { shallow } from 'enzyme';              // method from enzyme which allows us to do shallow render
import App from '../../src/components/app';  // import our soon to be component

describe('(Component) App', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.type()).to.eql('div');
  });
});
