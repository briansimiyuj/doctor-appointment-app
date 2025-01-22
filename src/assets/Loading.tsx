import React from 'react'
import Logo from './Logo'

export const LogoLoading: React.FC = () =>(

    <div className="scale-150 animate-pulse">

        <Logo size="large"/>

    </div>

)


export const CircleSpinner: React.FC = () =>(

    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>

)

export const PulseSpinner: React.FC = () =>(

  <div className="flex space-x-2">

    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>

    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-75"></div>

    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>

  </div>
)

export const RippleSpinner: React.FC = () =>(

  <div className="relative w-10 h-10">

    <div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-ping"></div>

    <div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-ping delay-300"></div>

  </div>
)

export const DualRingSpinner: React.FC = () =>(

  <div className="relative w-12 h-12">

    <div className="absolute w-full h-full border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin"></div>

  </div>

)