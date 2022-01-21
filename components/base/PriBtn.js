import React from 'react'

const PriBtn = ({clicked, text,addStyle, testId }) => {

    return (
        <button data-testid={testId} onClick={clicked} type="button" className={`bg-black border border-black rounded whitespace-nowrap
        focus:outline-none py-2 px-8 text-white hover:text-figyelllow mb-3 ${addStyle}`}>
            {text}
        </button>
    )
}

export default PriBtn
