import React from 'react'

const Button = ({text}) => {
  return (
<button className="p-[2px] bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] rounded-full">
            <p className="font-md px-5 py-3.5 bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] rounded-full w-full h-full">
              {text}
            </p>
          </button>  )
}

export default Button