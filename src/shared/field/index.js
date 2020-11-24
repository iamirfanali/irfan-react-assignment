import { Field as FormikField } from 'formik';

import styled from 'styled-components';
import { colors, globals } from '../styles/settings';

export const Field = styled(FormikField)`
	background: ${colors.white};
	border: 1px solid ${colors.borderColor};
	box-sizing: border-box;
	box-shadow: 0px 4px 4px ${colors.borderShadow};
	border-radius: ${globals.smallBorderRadius};
	color: ${colors.primaryTextColor};
	font-size: ${globals.fontSizeSmall};
	height: 2.5rem;
	line-height: 1.1875rem;
	width: 100%;
	padding: 0.5rem 1.5rem;

	&:focus {
		border-color: ${colors.borderColor};
		outline: none;
	}
`;
