import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
export const RepoInput = () => {
    return(
        <div>
            <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: '70ch', margin: '5ch'}}>
                    <OutlinedInput placeholder="Enter the repo URL" />
                </FormControl>
            </Box>
        </div>
    )
}