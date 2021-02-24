import React from 'react'
import { Button, Input, FormControl, InputLabel, IconButton, Grid, Divider, InputBase, Breadcrumbs, Link } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';


const Header = () => {
    return (
        <>

            <div className="Header">
                <Grid container justify='center' alignItems="center">
                    <Grid item xs={2} container justify='center' >
                        <div className="Header_logo">
                                KNC                           
                        </div>
                    </Grid>
                    <Grid item xs={7}  justify='center' container >
                        {/* <Grid container>
                            <Grid item xs={4}>
                                <Link href='/About'><div className="Header_Menu">ABOUT</div></Link>
                            </Grid>
                            <Grid item xs={4}>

                            </Grid>
                            <Grid item xs={4}>

                            </Grid>
                        </Grid> */}
                        <Breadcrumbs>
                            <Link href='/About' underline='none'><div className="Header_Menu" >ABOUT</div></Link>
                            <Link href='/About' underline='none'><div className="Header_Menu">ABOUT</div></Link>
                            <Link href='/About' underline='none'><div className="Header_Menu">ABOUT</div></Link>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={3}>
                        <Button className="Login_Button"><Link href='/Login'>로그인</Link></Button>
                    </Grid>
                </Grid>

            </div>
            <div className="Header_Cover">
                <div>
                    Welcome to KNC!
                </div>
                <FormControl>
                    {/*                         <InputLabel style={{
                            color:"white",
                        }}>Korean News Chronicle</InputLabel> */}
                    <Input autoComplete placeholder='검색어를 입력해주세요...' className='Header_Cover_SearchBar' endAdornment={
                        <IconButton size='small' style={{
                            color: "white"
                        }}>
                            <SearchIcon />
                        </IconButton>

                    } ></Input>
                </FormControl>
            </div>
        </>
    )
}

export default Header;