import React from "react"
import List from '@mui/material/List';
import { useState } from "react"
import Contact from "../Contact/Contact";


const ContactList = () => {

    return (

        <List
            sx={{
                width: '100%',
                alignSelf: 'center',
                position: 'relative',
                overflow: 'auto',
            }}
            height='100%'
        >
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </List>

    )
}

export default ContactList