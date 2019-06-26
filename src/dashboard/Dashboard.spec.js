// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard';


describe('<Dashboard />', () => {
   it('matches snapshot', () => { // this test compares a snapshot of the code to the current code
       const tree = renderer.create(<Dashboard />); // generated a DOM tree

       expect(tree.toJSON()).toMatchSnapshot();
   }) 
})
