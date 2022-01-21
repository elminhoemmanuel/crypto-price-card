import React from 'react'
import { render, screen } from '@testing-library/react'
import PriBtn from '../components/base/PriBtn';

test("On render, check that the button is present", () => {
    render(<PriBtn/>);

    expect(screen.getByRole("button"))
})
