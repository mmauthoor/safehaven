import {useState} from 'react'
import DateAdapter from '@mui/lab/AdapterDateFns';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import LocationSearchBar from './LocationSearchBar';
import { format } from 'date-fns';
const axios = require('axios');



export default function ReportForm() {
    
    const [email, setEmail] = useState("");
    const [value, setValue] = useState(new Date());
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [userInput, setUserInput] = useState("");

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handleUserInput = ({target}) => {
        const {value} = target;
        setUserInput(value);
    }

    // console.log(new Intl.DateTimeFormat('en-US', {hour: "numeric", minute: "numeric", dayPeriod: "short",}).format(value))

    const submitReport = (event) => {
        event.preventDefault();
        const dateToString = format(value, 'yyyy-MM-dd');
        const timeToString = format(value, "HH:mm");

        let url = "http://localhost:8000/api/reports"
        axios.post(url, {
            email: email,
            lat: lat,
            lng: lng,
            date: dateToString,
            time: timeToString,
            user_input: userInput
        })
            .then(response => {
                 if (response.data.redirect == "/resources"){
                     window.location="/resources"
                 }
            })
            .catch(error => console.log(error))
        
        // ideally redirect to help page with new message saying verify your email for report to be published
    }

    // const renderHelp = () => {
    //     console.log("Sorry you feel bad")
    // }
    
    
    return (
        <div className="report-form-container">
            <form action="">
                
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <Stack spacing={5}>
                        <label htmlFor="">Email 
                            <input type="email" onChange={handleEmail} />
                        </label>
                        
                        <MobileDatePicker label="Date mobile"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />

                        <TimePicker
                        label="Time"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
                <LocationSearchBar passLngData={setLng} passLatData={setLat}/>
                <label htmlFor="">Optional description of events 
                    <textarea id="w3review" name="w3review" rows="4" cols="50" onChange={handleUserInput}></textarea>
                </label>
                <button onClick={submitReport}>Submit report</button>

            </form>
        </div>
    )
}