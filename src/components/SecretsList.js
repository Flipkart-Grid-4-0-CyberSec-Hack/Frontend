import Box from '@mui/material/Box';
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';



export default function SecretList(props) {
  return (
    <Box
      sx={{ width: '100%', maxheight: '1000px', maxWidth: '1000px', bgcolor: 'black' }}
    >
        <List sx={{color:'white'}}>
          {props.list.map((elem)=>{
            return (
              <ListItem component="div" disablePadding>
              <ListItemButton>
                <ListItemText primary={elem} />
              </ListItemButton>
            </ListItem>
            )
          })}
     
   
        </List>
    </Box>
  );
}
