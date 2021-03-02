import React,{useState} from 'react'
import Link from 'next/link'
import { Button, Input, FormControl, InputLabel, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router'

const Cover = () => {
    const router = useRouter();
    const [SearchValue, setSearchValue] = useState();

    const HandleSubmit = (e) => {
        e.preventDefault();
        router.push({
            pathname: '/Result',
            query: { input: SearchValue },
        })
    }

    const HandleInput = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    return (
        <>
            <div className='Cover_Box'>
                <div className='Cover_blur' />
                <div className='Cover'>
                    <div className='Cover_logo'>
                        KNC
                    </div>
                    <div className='Cover_Search'>
                        <FormControl component='form' onSubmit={HandleSubmit}>
                            {/*                         <InputLabel style={{
                            color:"white",
                        }}>Korean News Chronicle</InputLabel> */}
                            <Input placeholder='검색어를 입력해주세요...' className='Cover_SearchBar' endAdornment={
                                <IconButton size='small' style={{
                                    color: "white"
                                }} type='submit'>
                                    <SearchIcon />
                                </IconButton>

                            } onChange={HandleInput}></Input>
                        </FormControl>

                    </div>
                    <div className='Cover_buttonBox'>
                        <Button className='Cover_button' variant="outlined" >
                            <Link href='/Main'>메인으로</Link>
                        </Button>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Cover;