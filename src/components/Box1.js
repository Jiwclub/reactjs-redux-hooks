import React from 'react'
import { useSelector } from 'react-redux'

export const Box1 = () => {
    const appReducer = useSelector(({appReducer})=>appReducer)
    return (
        <div>
            <h2>Box1 : {appReducer.count}  </h2>
            <span>{JSON.stringify(appReducer.account)}</span>
        </div>
    )
}
