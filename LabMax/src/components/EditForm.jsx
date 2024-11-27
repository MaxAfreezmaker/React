import { useContext, useState, useEffect } from "react";
import AppContext from "../data/AppContext";
import { useParams } from "react-router-dom";

function EditForm() {
    const { items, dispatch } = useContext(AppContext);
    const { id } = useParams();
    const [formData, setFormData] = useState({ title: "", rating: 0 });

    useEffect(() => {
        const itemToEdit = items.find((item) => item.id === parseInt(id));
        if (itemToEdit) {
            setFormData(itemToEdit);
        }
    }, [id, items]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "edit", data: formData });
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={onChange}
                required
            />
            <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={onChange}
                required
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default EditForm;
