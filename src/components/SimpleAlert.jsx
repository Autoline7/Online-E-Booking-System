import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert(){
  return (
    <Alert className='alert' icon={<CheckIcon fontSize="inherit" />} severity="success">
      Registration Succesfull!!!
    </Alert>
  );
}
