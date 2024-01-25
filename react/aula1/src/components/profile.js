import Greetings from "./greetings"
export default function Profile({ name }) {
    return (
        <div className="container text-center">
            <Greetings
                name={name}
            />
            <img
                src="https://i.imgur.com/MK3eW3Am.jpg"
                alt="Katherine Johnson"
            />
        </div>
    )
}