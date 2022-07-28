import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Button} from '@mui/material';
import axios from 'axios';
import SecretList from './SecretsList';
import {useState} from 'react';
import LoadingWidget from './LoadingWidget';
import Container from '@mui/material/Container';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display:'block',
    p: 4,       
    overflow:'scroll',
    height:'50%',
  };

export default function SpiderScanModal(props) {
  const [data, setData] = useState(null)
  const [load, setLoad] = useState(null)

  const handleClose = () => props.module(false);

  return (
    <div>
      <Modal
        open={props.show}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography fontWeight="bold" id="modal-modal-title" variant="h5" component="h2">
            {props.simple? "Spider Scan": "Ajax Spider Scan"}
          </Typography>
          <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2">
            URI to Scan : {props.url}
          </Typography>
          
          {load?(
            <Container sx={{m:5}}>
            <LoadingWidget/>
            </Container>
          ): null}
          {data !== null ? (
             <Container sx={{my:3}}>
            <SecretList list={data}/>
            </Container>
          ): null}

          <Button disabled={load} sx={{mx:1}} onClick={()=>{
              setLoad(true)
              var config = {
                method: 'get',
                url: `http://localhost:8000/runscan?url=${props.url}&spider=${props.simple.toString()}&ajaxspider=${props.ajaxspider.toString()}`,
              
              };

              axios(config)
              .then(function (response) {
                localStorage.setItem('spider','true')
                  setLoad(false)
                  setData(response.data)
                })
              .catch(function (error) {
                  setLoad(false)
              });

          }} variant="contained" color="success">Start</Button>
          <Button disabled={load} sx={{mx:1}} onClick={()=>{
            handleClose()
          }} variant="contained" color="error">Close</Button>
        </Box>
      </Modal>
    </div>
  );
}