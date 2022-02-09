import {useState} from 'react'
import DateAdapter from '@mui/lab/AdapterLuxon';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DateTime } from "luxon";
import LocationSearchBar from './LocationSearchBar';


export default function ReportForm() {
    
    const [value, setValue] = useState(new Date());
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    const handleChange = (newValue) => {
    setValue(newValue);
    console.log(value)
    };
    
    
    return (
        <>
            <form action="">
                
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

            </form>
        </>
    )
}