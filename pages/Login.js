import React from 'react'
import { Button, Input, FormControl, InputLabel, IconButton, TextField, Paper, Grid } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useRouter } from 'next/router'

const Login = () => {

    const router = useRouter()

    return (
        <>
            <div className="Login">
                <div className='Login_blur' />
                <div className='Login_Page'>
                    <div className="Login_logo">
                        KNC
                    </div>
                    <Paper className="Login_Paper" elevation={3}>
                        <Grid container alignItems="center" justify='center' style={{
                            marginBottom: "30px"
                        }}>
                            <Grid item xs={4}>
                                <IconButton color='primary' onClick={() => router.back()}>
                                    <ArrowBackIosIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <div style={{
                                    fontWeight:"bold"
                                }}>
                                    로그인
                                </div>
                                
                            </Grid>
                            <Grid item xs={4}>

                            </Grid>
                        </Grid>
                        <FormControl style={{
                            margin:"10px"
                        }}>
                            <TextField label="아이디" variant='outlined' size='small' margin='dense'>
                            </TextField>
                            <TextField label="비밀번호" variant='outlined' size='small' margin='dense'>
                            </TextField>
                            <Button variant="contained" color='primary' className="Login_Button" >접속</Button>
                        </FormControl>

                    </Paper>
                </div>

            </div>
        </>
    )
}

export default Login;