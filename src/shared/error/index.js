import styled from 'styled-components';
import { colors } from '../styles/settings';
import { Label } from '../label';

export const Error = styled(Label)`
	color: ${colors.danger};
	font-size: 0.75rem;
	font-weight: 500;
	line-height: 0.875rem;
	margin-top: 0.5rem;
	text-transform: Capitalize;
	width: 100%;
`;
