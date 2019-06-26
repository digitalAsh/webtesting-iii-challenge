// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Control from './Control';

describe('<Control />', () => {
    it('matches snapshot', () => { // this test compares a snapshot of the code to the current code
        const tree = renderer.create(<Control />); // generated a DOM tree
 
        expect(tree.toJSON()).toMatchSnapshot();
    }) 
 })