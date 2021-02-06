import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { SlotContext } from '../SlotContext';

function Form() {

    const history = useHistory();
    const sId = useParams();
    const {ar,setAr} = useContext(SlotContext)

    console.log(sId)
    const initialFieldValues = {
        id: sId,
        fname: '',
        lname: '',
        number: '',
    }
    
    var [values, setValues] = useState(initialFieldValues)
    const [yo, setYo] = useState([])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var a= [...ar, values];
        setAr(a)
        history.goBack()
    }

    useEffect(() => {
        const storeSlot = localStorage.getItem('values');
        setYo(storeSlot !== null ? JSON.parse(storeSlot) : null)
    }, [])

    
    useEffect(() => {
        if(yo.length > 0 && yo.slice().reverse().find(fruit => fruit.id.abc === sId.abc)){ 
            var match = yo.slice().reverse().find(fruit => fruit.id.abc === sId.abc);
            setValues(match)
        }
    },[yo])

    useEffect(() => {
        localStorage.setItem('values', JSON.stringify(ar))
    },[ar])
    
    return (
        <div>
            <h1>Fill The Details</h1>
        
            <form 
                onSubmit={handleSubmit}
            >
                <div className="form__div">
                    <label htmlFor="storyTitle">First Name: </label>
                    <input 
                        name="fname" 
                        placeholder="First Name"
                        value={values.fname}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form__div">
                    <label htmlFor="storyTitle">Last Name: </label>
                    <input 
                        name="lname" 
                        placeholder="Last Name"
                        value={values.lname}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form__div">
                    <label htmlFor="storyTitle">Phone: </label>
                    <input 
                        name="number" 
                        placeholder="Phone Number"
                        type="number"
                        pattern="[1-9]{1}[0-9]{9}"
                        value={values.number}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form__div">
                    <button
                    onClick={() => history.push('/')}>
                        Cancel
                    </button>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Form