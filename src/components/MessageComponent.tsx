import { use } from 'react'

interface MessageComponentProps {
    messagePromise: Promise<string>;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ messagePromise }) => {
    const message: string = use(messagePromise) as string; // Приводим к string
    return <p>{message}</p>
}

export default MessageComponent
