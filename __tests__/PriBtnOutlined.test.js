import React from 'react'
import { render, screen } from '@testing-library/react'
import PriBtnOutlined from '../components/base/PriBtnOutlined';

test("On render, check that the button is present", () => {
    render(<PriBtnOutlined/>);

    expect(screen.getByRole("button"))
})
