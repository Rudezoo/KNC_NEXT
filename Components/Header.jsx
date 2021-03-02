import React,{useState} from 'react'
import { Button, Input, FormControl, InputLabel, IconButton, Grid, Divider, InputBase, Breadcrumbs, Link } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()

    const [SearchValue, setSearchValue] = useState();

    const HandleSubmit=(e)=>{
        e.preventDefault();
        router.push({
            pathname: '/Result',
            query: {input: SearchValue},
        })
    }

    const HandleInput=(e)=>{
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    return (
        <>

            <div className="Header">
                <Grid container justify='center' alignItems="center">
                    <Grid item xs={3} container justify='center' >
                        <div className="Header_logo_container">
                                <Button className="Header_logo" href='/Main'>KNC</Button>                          
                        </div>
                    </Grid>
                    <Grid item xs={6}  justify='center' container >
                        {/* <Grid container>
                            <Grid item xs={4}>
                                <Link href='/About'><div className="Header_Menu">ABOUT</div></Link>
                            </Grid>
                            <Grid item xs={4}>

                            </Grid>
                            <Grid item xs={4}>

                            </Grid>
                        </Grid> */}
                        <Breadcrumbs className="Header_menus">
                            <Link href='/About' underline='none'><div className="Header_Menu" >ABOUT</div></Link>
                            <Link href='/About' underline='none'><div className="Header_Menu">ABOUT</div></Link>
                            <Link href='/About' underline='none'><div className="Header_Menu">ABOUT</div></Link>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={3}> 
                    <Button className="Header_Login_Button" href='/Login' >로그인</Button>
                    </Grid>
                </Grid>

            </div>
            <div className="Header_Cover">
                <div>
                    Welcome to KNC!
                </div>
                <FormControl component='form' onSubmit={HandleSubmit}>
                    {/*                         <InputLabel style={{
                            color:"white",
                        }}>Korean News Chronicle</InputLabel> */}
                    <Input placeholder='검색어를 입력해주세요...' className='Header_Cover_SearchBar' endAdornment={
                        <IconButton size='small' style={{
                            color: "white"
                        }} type='submit'>
                            <SearchIcon />
                        </IconButton>
                    } onChange={HandleInput}></Input>
                </FormControl>
            </div>
        </>
    )
}

export default Header;