import styled from 'styled-components';
import { colors, globals } from '../styles/settings';

export const Label = styled.label`
	color: ${(props) =>
		props.color ? `${props.color}` : props.disabled ? `${colors.gray}` : `${colors.primaryTextColor}`};
	cursor: ${(props) => (props.cursor ? `${props.cursor}` : `default`)};
	display: inline-block;
	font-family: 'Roboto', sans-serif;
	font-size: ${(props) => (props.fontSize ? props.fontSize : globals.fontSizeSmall)};
	line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}rem` : `normal`)};
	margin-bottom: 0;
	text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
	text-transform: ${(props) => (props.textTransform ? props.textTransform : 'none')};
	vertical-align: middle;
`;
