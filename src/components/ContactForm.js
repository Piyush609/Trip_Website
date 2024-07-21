import "./ContactFormsStyles.css"

function ContactForm (){
    return(
        <div className="from-container">
            <h1>Send a message to us!</h1>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />

                <textarea rows="4" placeholder="Messages.."></textarea>
                <button>Send Messages</button>
            </form>
        </div>
    )
}

export default ContactForm;