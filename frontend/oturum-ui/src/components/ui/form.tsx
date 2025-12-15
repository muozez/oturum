import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      className='flex flex-col'
    >
      <TextField id="outlined-basic" label="İsim" variant="outlined" />
      <TextField id="outlined-basic" label="Soyisim" variant="outlined" />
      <TextField id="outlined-basic" label="Telefon Numarası" variant="outlined" />
      <TextField id="outlined-basic" label="E-Posta" variant="outlined" />
      <TextField id="outlined-basic" label="Bölüm" variant="outlined" />
      <TextField id="outlined-basic" label="Sınıf" variant="outlined" />
      <Button variant='contained'>Gönder</Button>
    </Box>
  );
}