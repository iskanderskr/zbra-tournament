import styled from 'styled-components'

import { Card } from 'antd'

export const Candidate = styled(Card)<{ themecolor: string }>`
	margin-bottom: 30px;
	& .ant-card-head {
		background-color: ${props => {
			return props.themecolor ? props.themecolor : ''
		}};
	}
`

export const Property = styled.div`
	margin-bottom: 10px;
	text-overflow: ellipsis;
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
`

export const Actions = styled.div`
	margin-top: 20px;
`
