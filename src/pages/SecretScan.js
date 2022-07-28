import Container from '@mui/material/Container';
import { RepoInput } from '../components/RepoInput';
import Typography from '@mui/material/Typography';
import FilesNameDisplay from '../components/FileNameDisplay';
import {useState,useEffect} from 'react';
import axios from 'axios';
import ErrorModal from '../components/ErrorModal';
import LoadingWidget from '../components/LoadingWidget';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

function validate(string){
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return (url.protocol === "http:" || url.protocol === "https:" )&& ( string.includes("github"));

}


const SecretScan = ()=>{

    const [url,setUrl] = useState('')
    const [loading,setLoading] = useState(false)
    const [repoinput, setRepoInput] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    useEffect(()=>{
      if(localStorage.getItem('projecturl')!==null){
        setUrl(localStorage.getItem('projecturl'))
      }
      setRepoInput(true)
      if(validate(url)){
                
          var config = {
            method: 'get',
            url: `http://localhost:8000/findsecrets?url=${url}`,
          };

          axios(config)
          .then(function (response) {
              setLoading(false)
              setData(response.data)
          })
          .catch(function (error) {
            setLoading(false)
            setError(true)

          });

    }

  },[loading])
  

    return (
      <>
      <ErrorModal show={error} module={setError}/>
          <Typography variant="h3" fontWeight="bold" sx={{my:5}}>Secret Scanner</Typography>
         
         {repoinput?<RepoInput url={url} changeurl={setUrl} validate={validate} startloading={setLoading}/>: null}
         <Container sx={{minHeight:'50vh'}}>
         {loading?(
                 <Container>
                 <LoadingWidget/>
                 </Container>
            ) : null}
         {data !== null?<FilesNameDisplay files={data}/>: null}
         {data !== null? <Button sx={{my:3}} variant="contained" color="success" onClick={()=>{
          navigate("/web")
         }}>
          Proceed to Web Scan (If Applicable)
         </Button>:null}
         
         </Container>
         
      </>
    )

}


export default SecretScan;
