import React from 'react';
import CheckboxStyle from './CheckboxStyle';
import { Field } from 'formik';

const Checkbox = ({ name, label }) => {
	return (
		<Field name={name}>
			{({ field: { value }, form: { setFieldValue } }) => (
				<CheckboxStyle onClick={() => setFieldValue(name, value ? false : true)}>
					<div className='checkbox'>{value && <div className='checked'></div>}</div>
					<span className='label'>{label}</span>
				</CheckboxStyle>
			)}
		</Field>
	);
};

export default Checkbox;
