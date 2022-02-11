import {useState} from 'react'
import DateAdapter from '@mui/lab/AdapterDateFns';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import LocationSearchBar from './LocationSearchBar';
import { format } from 'date-fns';
import './index.css'
import ReCAPTCHA from "react-google-recaptcha";
const axios = require('axios');

export default function ReportForm() {
    
    const [email, setEmail] = useState("");
    const [dateTime, setDateTime] = useState(new Date());
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [userInput, setUserInput] = useState("");

    const handleDateTime = (newDateTime) => {
        setDateTime(newDateTime);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    }

    // console.log(new Intl.DateTimeFormat('en-US', {hour: "numeric", minute: "numeric", dayPeriod: "short",}).format(value))

    const submitReport = (event) => {
        event.preventDefault();
        const dateToString = format(dateTime, 'yyyy-MM-dd');
        const timeToString = format(dateTime, "HH:mm");

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
    }
    
    function captchaChange(value) {
        console.log("Captcha value:", value);
      }

    const isDisabled =  handleUserInput === ''
    
    return (
        <div className="incident-form">
            <h3>Incident Report Form</h3>
                <form action="">
                    
                    <LocalizationProvider dateAdapter={DateAdapter}>
                        <Stack spacing={5}>
                            <label className="input-box" htmlFor="">Email 
                                <input className="email-text-box" type="email" onChange={handleEmail} />
                            </label>

                            <label className="input-box" htmlFor="">Date
                                <MobileDatePicker 
                                    inputFormat="MM/dd/yyyy"
                                    value={dateTime}
                                    onChange={handleDateTime}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </label>

                            <label className="input-box" htmlFor="">Time
                                <TimePicker
                                    value={dateTime}
                                    onChange={handleDateTime}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </label>

                            <label className="input-box" htmlFor="">Location
                                <LocationSearchBar 
                                    className="location-search-bar" 
                                    passLngData={setLng} 
                                    passLatData={setLat}/>
                            </label>

                            <label className="incident-description" htmlFor="">Optional description/information
                                <textarea
                                id="incident-info" name="incident-info" rows="4" cols="50" onChange={handleUserInput}></textarea>
                            </label>

                        </Stack>
                    </LocalizationProvider>
                    
                    <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={captchaChange} />
                 
                    <button className="submit-btn" onClick={submitReport}>Submit report</button>

                </form>
        </div>
    )
}