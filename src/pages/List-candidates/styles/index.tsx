import styled from 'styled-components'

import { Layout } from 'antd'

export const Content = styled(Layout.Content)`
	width: 95vw;
	margin: 50px auto;
	min-height: calc(100vh - 180px);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media screen and (min-width(768px)) {
		width: 80%;
	}
`
