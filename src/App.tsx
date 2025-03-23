import {fetchMessage} from "./components/fetchMessage.tsx";
import MessageComponent from "./components/MessageComponent.tsx";

const messagePromise = fetchMessage().catch(() => 'No message available' )
// Компонент для відображення повідомлення

// Приклад використання
const App = () => <MessageComponent messagePromise ={messagePromise} />
export default App