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

   it('buttons should update dynamically', () => {
       const { getByText, queryByText } = render(<Dashboard />);
        //testing all of the button displays
        getByText(/close gate/i);
        getByText(/unlocked/i);
        getByText(/open/i);
        getByText(/lock gate/i);
        expect(queryByText(/open gate/i)).toBeFalsy();

        const closeGateButton = getByText(/close gate/i);

        fireEvent.click(closeGateButton);

        getByText(/open gate/i);
        getByText(/closed/i);
        getByText(/unlocked/i);
        getByText(/lock gate/i);
        expect(queryByText(/close gate/i)).toBeFalsy();
        //expect(queryByText(/open/i)).toBeFalsy();  //i believe this fails because the text open appears in the Open Gate button

        const  lockGateButton = getByText(/lock gate/i);

        fireEvent.click(lockGateButton);

        getByText(/locked/i);
        getByText(/closed/i);
        getByText(/open gate/i);
        getByText(/unlock gate/i);
        expect(queryByText(/unlocked/i)).toBeFalsy();

        const unlockGateButton = getByText(/unlock gate/i);
        const openGateButton = getByText(/open gate/i);
        fireEvent.click(unlockGateButton);
        fireEvent.click(openGateButton);

        getByText(/unlocked/i);
        getByText(/open/i);
        getByText(/lock gate/i);
        getByText(/close gate/i);
        expect(queryByText(/open gate/i)).toBeFalsy();
        expect(queryByText(/closed/i)).toBeFalsy();
        //  expect(queryByText(/locked/i)).toBeFalsy();
   })
})
