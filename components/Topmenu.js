import {Tabs} from "@mui/material";

function LinkTab(props) {
    return (
        <Tabs
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function TopMenu(){
    return(
    <Tabs value="Test" aria-label="nav tabs example">
        <LinkTab label="Page One" href="/drafts" />
        <LinkTab label="Page Two" href="/trash" />
        <LinkTab label="Page Three" href="/spam" />
    </Tabs>
    )
}