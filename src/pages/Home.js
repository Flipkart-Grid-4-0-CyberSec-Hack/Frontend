import {RepoInput}  from '../components/RepoInput';
import  {PackageDisplay } from '../components/PackageDisplay';
import Container  from '@mui/material/Container';
import { Typography } from '@mui/material';
import LoadingWidget from '../components/LoadingWidget';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ErrorModal from '../components/ErrorModal';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

function validate(string){
    let url;
  
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return (url.protocol === "http:" || url.protocol === "https:" )&& (string.includes("pypi") || string.includes("github") || string.includes("npm"));

}


export const Home = () => {

    const navigate = useNavigate()
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)
    const [error,setError] = useState(false);

    useEffect(()=>{
        if(validate(url)){
            localStorage.clear();
            var config = {
                method: 'get',
                url: `http://localhost:8000/getvulnerablepackages?url=${url}`,
                headers: { 
                    },
                };
                
                axios(config)
                .then(function (response) {
                    setData(response.data)
                    console.log(response.data)
                    setLoading(false);
                
                })
                .catch(function (error) {
                    setLoading(false);
                    setError(true);
                });
        }

    },[loading])
    



    return(
        <>
            <ErrorModal show={error} module={setError}/>
            <Typography variant="h3" fontWeight="bold" sx={{my:5}}>Source Project Scanner</Typography>
         
            <RepoInput url={url} changeurl={setUrl} validate={validate} startloading={setLoading}/>
            
            <Container sx={{minHeight:'50vh'}}>
            {loading?(
                 <Container>
                 <LoadingWidget/>
                 </Container>
            ) : null}
           {data !== null ?<PackageDisplay info={data.packages}/> : null}
           {data !== null && data.projecturl !== null? <Button sx={{my:2}} variant="contained" color="warning" onClick={()=>{
            localStorage.setItem("projecturl",data.projecturl);
            if(data.webLink !== null )  localStorage.setItem("weblink",data.webLink);

            navigate("/secret")
           }}>Secret Scan Section</Button> : null}
           <br/><br/>
           {data !== null && data.webLink !== null? <Button sx={{my:2}} variant="contained" color="warning" 
           onClick={()=>{
            localStorage.setItem("projecturl",data.projecturl);

            navigate("/web")
           }}>Secret Scan Section</Button> : null}

            </Container>
        </>
    )
}