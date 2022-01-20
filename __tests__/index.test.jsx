import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

test("on initial render, h1 is present", () => {
    render(<Home/>);

    expect(screen.getByRole("heading",{name:/crypto/i}))
})
