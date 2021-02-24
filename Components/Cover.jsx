import React from 'react'
import Link from 'next/link'
import { Button, Input, FormControl, InputLabel, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const Cover = () => {



    return (
        <>
            <div className='Cover_Box'>
                <div className='Cover_blur'/>
                <div className='Cover'>
                    <div className='Cover_logo'>
                        KNC
                    </div>
                    <div className='Cover_Search'>
                        <FormControl>
                            {/*                         <InputLabel style={{
                            color:"white",
                        }}>Korean News Chronicle</InputLabel> */}
                            <Input autoComplete placeholder='검색어를 입력해주세요...' className='Cover_SearchBar' endAdornment={
                                <IconButton size='small' style={{
                                    color: "white"
                                }}>
                                    <SearchIcon />
                                </IconButton>

                            } ></Input>
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