import styled from 'styled-components';
import { colors, globals } from '../styles/settings';

export const Table = styled.table`
	&&& {
		width: 100%;
		border: 1px solid ${colors.borderColor};
		border-collapse: collapse;
		th,
		td {
			border: 1px solid ${colors.borderColor};
			border-collapse: collapse;
		}
		th,
		td,
		tr {
			padding: 15px;
		}
		th {
			text-align: left;
			font-size: ${globals.fontSizeSmall};
		}
	}
`;
