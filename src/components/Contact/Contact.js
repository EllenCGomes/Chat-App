import React from "react"
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useState } from "react"
import "./index.css"
import { ListItemButton } from "@mui/material";

const Contact = ({ avatar, name, time, message }) => {

    return (

        // <div className="contact-container">
        //     <Avatar src={avatar} sx={{ width: 45, height: 45, justifySelf: "center", alignSelf: "center", margin: "0 15px" }} />
        //     <div className="title-container-main">
        //         <p className="title">Name</p>
        //         <p className="message">message</p>
        //     </div>
        //     <p className="time">9:00</p>
        // </div>
        <>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar src={avatar} />
                </ListItemAvatar>
                <ListItemText primary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline-block', maxWidth: '80%', width: '80%' }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                        >
                            Anny T
                        </Typography>
                        <Typography
                            sx={{ display: 'inline-block', maxWidth: '20%', width: '20%', textAlign: 'end' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            23/07/2023
                        </Typography>
                    </React.Fragment>
                } secondary={
                    <Typography
                        sx={{ display: 'inline-block', maxWidth: '100%', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
                        component="span"
                        variant="subtitle2"
                        color="text.secondary"
                    >
                        andcUBSCIDBICB V JSNFVUIBUBbdouhc oud oo abfviouqbvibqybvq8ybvfoqbnipn piqunbevfouqbnovibieqvobiubvoqubviofbqvioqbeoibvieqf
                    </Typography>
                }
                />
            </ListItemButton>
            <Divider variant="inset" component="li" />
        </>


    )
}

export default Contact