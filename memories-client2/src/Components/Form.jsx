import React from 'react'

const Form = ({inputList}) => {
    return (
        <form>
            {inputList.map(i => <Input type={i.type} title={i.title} id={i.id}/>)}
        </form>
    )
}


export default Form;

const Input = ({type, title, id}) => {
    return (
        <div className="form-floating mb-3">
            <input type={type} className="form-control" id={id} placeholder={title} />
            <label htmlFor={id}>{title}</label>
        </div>
    )
}
