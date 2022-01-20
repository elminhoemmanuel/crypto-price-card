import React from 'react'
import { render, screen } from '@testing-library/react'
import { within } from '@testing-library/dom'
import Card from '../components/base/Card';

const testData = {
    "id": 208851,
    "created_at": "2021-01-11T10:20:13.70879-06:00",
    "updated_at": "2021-01-11T10:20:13.70879-06:00",
    "time": "2021-01-11T10:20:04.132926-06:00",
    "height": 27326763,
    "hash": "6RtU9UkAQaJBVMrgvtDiARxzbhx1vKrwoTv4aZRxxgt7",
    "block_hash": "FrWmh1BtBc8yvAZPJrJ97nVth6eryukbLANyFQ3TuQai",
    "sender": "86e6ebcc723106eee951c344825b91a80b46f42ff8b1f4bd366f2ac72fab99d1",
    "receiver": "d73888a2619c7761735f23c798536145dfa87f9306b5f21275eb4b1a7ba971b9",
    "gas_burnt": "424555062500",
    "actions": [
        {
            "data": {
                "deposit": "716669915088987500000000000"
            },
            "type": "Transfer"
        }
    ],
    "actions_count": 1,
    "success": true
}

const scaleFactor = 24

const formatDeposit = (deposit)=>{
    let num = deposit / ( 10**scaleFactor );
    return `${String(num)} NEAR`
}

test("On render, check that sender value is displayed", () => {

    const { getByTestId } = render(<Card data={testData} />)
    const { getByText } = within(getByTestId('sender'))
    expect(getByText("86e6ebcc723106eee951c344825b91a80b46f42ff8b1f4bd366f2ac72fab99d1")).toBeInTheDocument()
})

test("On render, check that receiver value is displayed", () => {

    const { getByTestId } = render(<Card data={testData} />)
    const { getByText } = within(getByTestId('receiver'))
    expect(getByText("d73888a2619c7761735f23c798536145dfa87f9306b5f21275eb4b1a7ba971b9")).toBeInTheDocument()
})

test("On render, check that height value is displayed", () => {

    const { getByTestId } = render(<Card data={testData} />)
    const { getByText } = within(getByTestId('height'))
    expect(getByText(27326763)).toBeInTheDocument()
})

test("On render, check that deposit value is displayed", () => {

    const { getByTestId } = render(<Card data={testData} />)
    const { getByText } = within(getByTestId('deposit'))
    expect(getByText(formatDeposit("716669915088987500000000000"))).toBeInTheDocument()
})
