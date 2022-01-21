import React from 'react'
import { render, screen } from '@testing-library/react'
import CardHeader from '../components/base/CardHeader';

test("On render, check that Logo image is present and has alt text for accessibility", () => {
    render(<CardHeader/>);

    expect(screen.getByAltText("NEAR logo Image"))
});
