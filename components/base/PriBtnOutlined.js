import React from 'react'

const PriBtnOutlined = ({clicked, text,addStyle }) => {

    return (
        <button onClick={clicked} type="button" className={`bg-transparent border border-black rounded whitespace-nowrap
        focus:outline-none py-2 px-8 text-black hover:text-figyelllow hover:bg-black mb-3 ${addStyle}`}>
            {text}
        </button>
    )
}

export default PriBtnOutlined
