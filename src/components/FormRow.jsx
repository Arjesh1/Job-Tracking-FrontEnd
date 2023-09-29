const FormRow = ({type, name, labelText, placeholder}) => {
  return (
     <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <input type={type} name={name} id={name} placeholder={placeholder} required className="form-input"/>
      </div>
  )
}

export default FormRow
