import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorDisplay from '../components/base/ErrorDisplay';

test("On render, check that error message is displayed", () => {
    render(<ErrorDisplay/>);

    expect(screen.getByTestId("error-message",{name:/Something went wrong, could not fetch data. Please check your internet and refresh the page/}))
})
