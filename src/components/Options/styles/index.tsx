import styled from 'styled-components'

import { Button } from 'antd'

export const Container = styled.section`
	position: fixed;
	right: 20px;
	bottom: 20px;
	@media screen and (min-width: 768px) {
		right: 50px;
		bottom: 50px;
	}
`

export const Actions = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`

export const AddButton = styled(Button)`
	margin-bottom: 20px;
	width: 100%;
	font-size: 15px;
`

export const ButtonTournament = styled(Button)`
	width: 100%;
	font-size: 15px;
`

export const Label = styled.label`
	cursor: pointer;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #3c9be8;
	position: relative;
	& .plus {
		transition: all 0.8s ease;
		::after,
		::before {
			content: '';
			width: 20px;
			height: 3px;
			background: #fff;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}

		::before {
			transform: translate(-50%, -50%) rotate(90deg);
		}
	}

	@media screen and (min-width: 768px) {
		width: 80px;
		height: 80px;
		& .plus {
			::after,
			::before {
				width: 35px;
				height: 4px;
			}
		}
	}
`

export const Content = styled.div`
	position: absolute;
	padding: 40px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	right: 40px;
	bottom: 40px;
	background: #141414;
	transform: scale(0);
	transform-origin: right bottom;
	transition: all 0.3s ease;

	@media screen and (min-width: 768px) {
		right: 70px;
		bottom: 70px;
	}
`

export const Checkbox = styled.input`
	display: none;
	&:checked ~ ${Label} .plus {
		transform: rotate(315deg);
	}

	&:checked ~ ${Content} {
		transform: scale(1);
	}
`
