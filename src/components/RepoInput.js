import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useState} from 'react';


export const RepoInput = (props) => {

    const [valid, setValid] = useState(false);


    return(
        <div>
            <Box sx={{'my':'20px'}} component="form" noValidate autoComplete="off">
            <TextField
            error={valid}
            defaultValue={props.url}
            onChange={(e)=>props.changeurl(e.target.value)}
                sx={{'width':'500px'}}
                        required
                        id="outlined-required"
                        label="Source URL"
                        helperText={"E.g.: https://github.com/zricethezav/gitleaks"}
        />       <Button onClick={()=>{
                if(props.validate(props.url)){
                    setValid(false);
                    props.startloading(true);
                }else{
                    setValid(true);
                }

        }} sx={{'my':1,'mx':1}} variant="contained" color="success">Submit</Button>

            </Box>
        </div>
    )
}