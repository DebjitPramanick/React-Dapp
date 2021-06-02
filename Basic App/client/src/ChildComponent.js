import React, {useContext} from 'react'
import BlockChainContext from './BlockChainContext'

const ChildComponent = () => {

    const {web3, accounts, contract} = useContext(BlockChainContext)

    return (
        <div>
            <p>{accounts[0]}</p>
        </div>
    )
}

export default ChildComponent
