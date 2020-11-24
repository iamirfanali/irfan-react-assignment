import styled from 'styled-components';
import { colors, globals } from '../styles/settings';

const buttonThemes = {
	primary: {
		backgroundColor: `linear-gradient(180deg, rgba(249, 83, 101, 0.8) 0%, #F95365 100%)`,
		border: `1px solid #F04B5D`,
		color: `${colors.white}`,
		hoverColor: `white`,
		hoverBg: '#F95365',
	},
	secondary: {
		backgroundColor: `linear-gradient(180deg, rgba(13, 17, 31, 0) 0%, rgba(255, 255, 255, 0.1) 100%)`,
		border: `1px solid #C4CDD5 !important;`,
		color: `${colors.primaryTextColor}`,
		hoverColor: `${colors.primaryTextColor}`,
		hoverBg: `linear-gradient(180deg, rgba(13, 17, 31, 0) 0%, rgba(255, 255, 255, 0.1) 100%);`,
	},
	outlined: {
		backgroundColor: `transparent`,
		border: `2px solid #F04B5D`,
		color: `${colors.primary}`,
		hoverColor: `white`,
		hoverBg: '#F95365',
	},
	disabled: {
		backgroundColor: `#E7E1D6`,
		border: `none`,
		color: `${colors.white}`,
		hoverColor: `${colors.white}`,
		hoverBg: `#E7E1D6`,
	},
};

export const Button = styled.button`
	background: ${(props) => (props.themestyle ? buttonThemes[props.themestyle].backgroundColor : 'transparent')};
	border: ${(props) => (props.themestyle ? buttonThemes[props.themestyle].border : colors.gray)};
	border-radius: ${globals.buttonBorderRadius};
	color: ${(props) => (props.themestyle ? buttonThemes[props.themestyle].color : colors.gray)};
	font-size: ${(props) => (props.fontSize ? props.fontSize : globals.fontSizeSmall)};
	line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}rem` : `normal`)};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : globals.fontWeightMedium)};
	height: ${(props) => (props.height ? `${props.height}rem` : '2.5rem')};
	width: ${(props) => (props.width ? props.width : 'auto')};
	min-width: 100px;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => (props.themestyle ? buttonThemes[props.themestyle].hoverBg : 'transparent')};
		color: ${(props) => (props.themestyle ? buttonThemes[props.themestyle].hoverColor : colors.blue)};
		text-decoration: none;
		outline: none;
	}

	&:focus {
		background-color: ${(props) => (props.themestyle ? buttonThemes[props.themestyle].hoverBg : colors.blue)};
		color: ${(props) => (props.themestyle ? buttonThemes[props.themestyle].hoverColor : colors.white)};
		outline: none;
	}
`;
