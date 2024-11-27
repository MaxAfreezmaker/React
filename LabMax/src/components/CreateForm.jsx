import { useContext, useState } from "react";
import AppContext from "../data/AppContext";

function CreateForm() {
    const [errors, setErrors] = useState([]);
    const [isSending, setSending] = useState(false);
    const dispatch = useContext(AppContext).dispatch;

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        const title = data.get("title");
        if (title.slice(0, 1) !== title.slice(0, 1).toUpperCase()) {
            setErrors(["Tytuł musi zaczynać się wielką literą!"]);
            return;
        }

        setErrors([]);
        setSending(true);
        await new Promise((res) => setTimeout(res, 1000));

        dispatch({
            type: "add",
            data: {
                id: Date.now(),
                title,
                birth: "Unknown",
                eyes: "Unknown",
                rating: 0, // Domyślna wartość
            },
        });

        setSending(false);
        e.target.reset();
    };

    return (
        <form onSubmit={onSubmit}>
            {errors.map((error, index) => (
                <p key={index} style={{ color: "red" }}>{error}</p>
            ))}
            <input type="text" name="title" placeholder="Title" required />
            <button type="submit" disabled={isSending}>Add</button>
        </form>
    );
}

export default CreateForm;