
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import VulnerabilityDisplay from './VulnerabilityDisplay';
import Container from '@mui/material/Container'

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
    height:'100%',
  };


export default function CVEModal(props) {
  const handleClose = () => props.module(false)

  return (
    <div>
      <Modal
        open={props.show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title"  fontWeight={"bold"} variant="h6" component="h6">
            Package Name : {props.name}
          </Typography>
          <Typography id="modal-modal-title" fontWeight={"bold"} variant="h6" component="h6">
            Package Version : {props.version}
          </Typography>
          <Container sx={{mx:1, my:5}}>
          <VulnerabilityDisplay cves={props.cve}/>

          </Container>
        </Box>
      </Modal>
    </div>
  );
}
