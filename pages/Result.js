import React,{useEffect} from 'react'
import Header from '../Components/Header'
import { withRouter } from 'next/router'

const Result =({router})=>{

    useEffect(()=>{
        console.log(router.query.input)
    },[]);

    return(
        <>
            <Header></Header>
            {router.query.input}
        </>
    )
}

export default withRouter(Result);