import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';





export default function TopMenu(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{backgroundColor: 'black', opacity:'0.8', borderBottom:'3px white solid'}}>
                <Toolbar>
                    <Button color="inherit">christophe rime</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}