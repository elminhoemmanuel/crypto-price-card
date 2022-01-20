import React from 'react'

const Loader = () => {
    return (
        <div className="py-5 h-screen flex justify-center items-center">
            <div data-testid="spinner" className="spinner">
            </div>
        </div>
    )
}

export default Loader
