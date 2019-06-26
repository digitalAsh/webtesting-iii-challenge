// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {
    it('matches snapshot', () => { // this test compares a snapshot of the code to the current code
        const tree = renderer.create(<Controls />); // generated a DOM tree
 
        expect(tree.toJSON()).toMatchSnapshot();
    }) 

    it('should call toggleCLosed on button click', () => {
        const toggleClosed = jest.fn();

        const { getByText } = render(<Controls toggleClosed={toggleClosed}/>)

        
        const closeGateButton = getByText(/close gate/i);

        fireEvent.click(closeGateButton);
        
        expect(toggleClosed).toHaveBeenCalled();
        expect(toggleClosed).toHaveBeenCalledTimes(1);
    })
    
    // it('should call toggleLocked on button click', () => {
    //     const toggleLocked = jest.fn();

    //     const { getByText } = render(<Controls toggleLocked={toggleLocked}/>)

    //     const lockGateButton = getByText(/lock gate/i);

    //     fireEvent.click(lockGateButton);

    //     expect(toggleLocked).toHaveBeenCalled();
    //     expect(toggleLocked).toHaveBeenCalledTimes(1)
    // })

 })