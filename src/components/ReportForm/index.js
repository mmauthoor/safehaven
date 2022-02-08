import {useState} from 'react'
import DateAdapter from '@mui/lab/AdapterLuxon';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DateTime } from "luxon";

export default function ReportForm() {
    
    const [value, setValue] = useState(new Date());

    const handleChange = (newValue) => {
    setValue(newValue);
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

            </form>
        </>
    )
}