import {ChatEngine} from "react-chat-engine";
import "./App.css"
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
    if (!localStorage.getItem("username")) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID="e7c5c2cc-3fdc-42d3-beb7-892bcd0e47c1"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App
