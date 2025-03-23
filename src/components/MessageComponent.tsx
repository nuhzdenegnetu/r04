import { use } from 'react'

const MessageComponent = ({ messagePromise }) => {
    const message = use(messagePromise)
    return <p>{message}</p>
}

export default MessageComponent