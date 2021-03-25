import styled from 'styled-components'

import { Layout, Button } from 'antd'

export const Content = styled(Layout.Content)`
	width: 80%;
	min-height: calc(100vh - 180px);
	margin: 50px auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const Actions = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`

export const AddButton = styled(Button)`
	margin-right: 20px;
`
