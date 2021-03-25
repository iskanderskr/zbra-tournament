import styled from 'styled-components'

import { Card } from 'antd'

export const Candidate = styled(Card)<{ themecolor: string }>`
	margin-bottom: 50px;
	& .ant-card-head {
		background-color: ${props => {
			return props.themecolor ? props.themecolor : ''
		}};
	}
	&:first-child::after,
	&:first-child::before {
		content: '';
		position: absolute;
		width: 20px;
		height: 2px;
		background: #fff;
		transform: rotate(45deg);
		bottom: -30px;
		left: calc(50% - 10px);
	}
	&:first-child::before {
		transform: rotate(-45deg);
	}
	&:last-child::after,
	&:last-child::before {
		display: none;
	}
	@media screen and (min-width: 768px) {
		margin-bottom: 0px;
		&:first-child::after,
		&:first-child::before {
			display: none;
		}
	}
`

export const Property = styled.div`
	text-overflow: ellipsis;
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
`
