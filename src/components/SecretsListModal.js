import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import SecretList from './SecretsList';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SecretsListModal(props) {
  const handleClose = () => props.module(false);

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
            File Name : {props.filename}
          </Typography>
          <Container sx={{mx:1, my:5}}>
        <SecretList list={props.lists}/>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
