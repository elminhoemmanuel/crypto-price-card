import React from 'react'
import { render, screen } from '@testing-library/react'
import Loader from '../components/base/Loader';

test("On render, check that spinner is present", () => {
    render(<Loader/>);

    expect(screen.getByTestId("spinner"))
})
