import NavBar from "../../components/NavBar/NavBar"
import Contact from "../../components/Contact/Contact";
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import Input from "../../components/Input/Input";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from "react";
import "./index.css"
import ContactList from "../../components/ContactList/ContactList";
import { Divider } from "@mui/material";

const Chat = () => {
    const [value, setValue] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div className="main">
            <div className="menu" >
                {/* <NavBar icon={<ChatIcon sx={{ color: "#AEBAC1" }} />} /> */}
                <NavBar icon={<ChatIcon sx={{ color: "#fff" }} />} />
                <div className="input-icons">
                    <SearchIcon sx={{ color: "#54656F", fontSize: 20, position: "absolute", top: "22px", right: "40px" }} />
                    <Input value={value} onChange={e => setValue(e.target.value)} type="text" border="1.5px solid #F0F2F5" borderRadius="5px" margin="15px 0px 15px 0px" width="90%" placeholder="Search or start new chat" color="#54656F" backgroundColor="#F0F2F5" />
                </div>
                <Divider />
                <ContactList />
            </div>
            <div className="chat-page">
                {/* <NavBar icon={<SearchIcon sx={{ color: "#AEBAC1" }} />} /> */}
                <NavBar icon={<SearchIcon sx={{ color: "#fff" }} />} />
                <div className="chat-container">
                    Chat Block
                </div>
                <div className="input-message">
                    <div className="input-message-container">
                        <InsertEmoticonIcon sx={{ color: "#54656F", fontSize: 26 }} />
                        <Input value={message} onChange={e => setMessage(e.target.value)} type="text" border="1.5px solid #fff" borderRadius="5px" margin="10px 0px 10px 10px" width="100%" placeholder="Type a message" color="#AEBAC1" backgroundColor="#fff" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Chat