import React from 'react';

export const FormInput = ({ input, label, type, meta: { touched, error, warning } }) => {
  const isInvalid = touched && error;
  return (
    <label className={isInvalid ? "error" : null}>{label}
      <input {...input} className={isInvalid ? "is-invalid-input" : null} placeholder={label} type={type}/>
      {touched && ((isInvalid && <small className="error">{error}</small>) || (warning && <small className="error">{warning}</small>))}
    </label>
  );
}

const selectBoxOptions = () => {
  var options = [<option key="0"></option>];
  for (var i=1; i<=12; i++) {
    options.push(
      <option key={i} value={i}>{(i === 1) ? `${i} Year` : `${i} Years`}</option>
    );
  }
  return options;
}

export const FormSelect = ({ input, label, type, meta: { touched, error, warning } }) => {
  const isInvalid = touched && error;
  return (
    <label className={isInvalid ? "error" : null}>{label}
      <select {...input} className={isInvalid ? "is-invalid-input" : null} placeholder={label} type={type}>
        { selectBoxOptions() }
      </select>
      {touched && ((isInvalid && <small className="error">{error}</small>) || (warning && <small className="error">{warning}</small>))}
    </label>
  );
}
