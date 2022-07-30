import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import {Button} from '@mui/material';
import  QuestionMark  from '@mui/icons-material/QuestionMark';
import { useEffect, useState } from 'react';
import HelpModal from '../components/HelpModal'; 
import TextField from '@mui/material/TextField';
import MainScanModal from '../components/MainScanModal';
import SpiderScanModal from '../components/SpiderScanModal';

let si = false, ajax = false, passive = false, active = false;
function validate(string){
    let url;
  
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return (url.protocol === "http:" || url.protocol === "https:");

}



const WebScan = ()=>{
    

    const [url, setUrl] = useState(false);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const [a1, setA1] = useState(false);
    const [a2, setA2] = useState(false);
    const [a3, setA3] = useState(true);
    const [a4, setA4] = useState(true);



    const [error, setError] = useState(false);
    

    useEffect(()=>{
        if(localStorage.getItem('weblink') !== null){
            setUrl(localStorage.getItem('weblink'))
        }
        if(localStorage.getItem('spider') === 'true'){
            setA3(false)
            setA4(false)
        }

    },[show1, show2])


    return (
        <>
        <SpiderScanModal show={show1} module={setShow1} simple={si} ajaxspider={ajax} url={url}/>
        <MainScanModal show={show2} module={setShow2} active={active} passive={passive} url={url}/>
        <HelpModal show={show} module={setShow}/>
        <Typography variant="h3" fontWeight="bold" sx={{my:5}}>Web App Scanner</Typography>
        <TextField
        error={error}
          sx={{my:5,width: '40%'}}
          required
          onChange={(e)=>setUrl(e.target.value)}
          id="outlined-required"
          label="Web Application URI"
          helperText={"E.g.: https://www.example.com"}
        />
         <Container sx={{minHeight:'50vh'}}>
         <Button onClick={()=>{
            if(validate(url)){
                setError(false)
                si = true
                ajax = false
                active=false
                passive=false
                setShow1(true)

            }else setError(true)
         }} disabled={a1} sx={{mx:2}} variant="contained" color="warning">Spider Scan</Button>
         <Button onClick={()=>{
            if(validate(url)){
                setError(false)
                si = false 
                ajax = true
                active=false
                passive=false
                setShow1(true)

            }else setError(true)
         }} disabled={a2} sx={{mx:2}} variant="contained" color="error">AjaxSpider Scan</Button>
         <Button onClick={()=>{
             if(validate(url)){
                setError(false)
                si = false 
                ajax = false
                active = false
                passive = true
                setShow2(true)

            }else setError(true)
         }} disabled={a3} sx={{mx:2}} variant="contained" color="success">Passive Scan</Button>
         <Button onClick={()=>{
             if(validate(url)){            
                setError(false)
                si = false 
                ajax = false
                active = true
                passive = false
                
                setShow2(true)

            }else setError(true)
         }} disabled={a4} sx={{mx:2}} variant="contained" color="info">Active Scan</Button>
        <br/><br/>
        <Button onClick={()=>setShow(true)} sx={{}} variant="contained" color="info"><QuestionMark/> Help</Button>
         </Container>

        </>
    )

}


export default WebScan;
