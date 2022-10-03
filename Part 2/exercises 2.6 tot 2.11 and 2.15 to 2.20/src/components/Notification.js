import '../index.css'

const Notification =({displayMessage, displayStyle}) => {
    let className = displayStyle ? 'green': 'red'

    return(
        <div className={className}>
            {displayMessage}
        </div>
    )
}

export default Notification 