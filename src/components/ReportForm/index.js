import {useState} from 'react'
import DateAdapter from '@mui/lab/AdapterDateFns';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import LocationSearchBar from './LocationSearchBar';
import { format } from 'date-fns'


export default function ReportForm() {
    
    const [value, setValue] = useState(new Date());
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const dateToString = format(value, 'yyyy-MM-dd');
    const timeToString = format(value, "HH:mm:SS");

    // console.log(new Intl.DateTimeFormat('en-US', {hour: "numeric", minute: "numeric", dayPeriod: "short",}).format(value))
    
    
    return (
        <>
            <form action="/api/reports">
                
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <Stack spacing={5}>
                        <label htmlFor="">Email <input type="email" /></label>
                        
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
                <label htmlFor="">Optional description of events <input type="textarea" /></label>
                <button>Submit report</button>

            </form>
        </>
    )
}