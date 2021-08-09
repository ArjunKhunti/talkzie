import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="4337e071-6785-471c-af4c-826ee82ed425"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};
export default App;
