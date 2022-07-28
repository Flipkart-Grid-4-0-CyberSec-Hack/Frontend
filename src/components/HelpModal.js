import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function BasicModal(props) {
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
          <Typography fontWeight={"bold"} id="modal-modal-title" variant="h6" component="h2">
            Help Section
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ol>
                <li><span style={{fontWeight:'bold'}}>Spider Scan</span> : This Scan is used to find hidden links in web pages</li>
                <li><span style={{fontWeight:'bold'}}> Ajax Spider Scan </span>: Special Version of Spider Scan for websites which use JavaScript for Routing</li>
                <li><span style={{fontWeight:'bold'}}> Active Scan </span>: Runs a Vulnerability Scan on Webpage. (Please run this after Spider Scans Only)</li>
                <li><span style={{fontWeight:'bold'}}> Passive Scan </span>: Runs a Vulnerability Scan without making hosts aware. (Please run this afer Spider Scans Only)</li>

            </ol>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
