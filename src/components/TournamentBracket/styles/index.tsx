import styled from 'styled-components'

export const Content = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: calc(100vh - 100px);
	flex: 1;

	@media screen and (min-width: 768px) {
		margin: 50px 0;
		flex-direction: row;
		/* display: flex; */
	}
`

export const Section = styled.section<{ height: number }>`
	position: relative;
	width: 300px;
	display: block;
	justify-content: space-between;
	align-items: space-between;
	flex-direction: column;
	margin-bottom: 30px;
	margin: 0 auto;

	@media screen and (min-width: 768px) {
		display: flex;
		height: ${props => props.height}px;
		margin: 0 0 30px;
		margin-right: 60px;

		&::before {
			content: '';
			top: 50%;
			left: 0;
			width: calc(100% + 30px);
			position: absolute;
			height: 50%;
			border: 1px solid #fff;
			border-left: none;
			z-index: -1;
			transform: translateY(-55%);
		}
		&::after {
			content: '';
			top: calc(50% - 8px);
			left: calc(100% + 30px);
			width: 30px;
			background: #fff;
			position: absolute;
			height: 1px;
			z-index: -1;
		}
	}
`

export const Finalist = styled.section`
	position: relative;
	width: 300px;
	display: block;
	justify-content: space-between;
	align-items: space-between;
	flex-direction: column;
	margin-bottom: 30px;
	margin: 0 auto;

	&::before,
	&::after {
		display: none;
	}

	@media screen and (min-width: 768px) {
		display: flex;
		margin: 0;
		margin-right: 60px;
	}
`

export const Title = styled.h2`
	font-size: 20px;
	margin-bottom: 10px;
	@media screen and (min-width: 768px) {
		display: none;
		margin: 0;
		margin-right: 60px;
	}
`

export const Step = styled.div<{ height: number }>`
	display: inline-flex;
	align-items: space-around;
	justify-content: space-around;
	flex-direction: column;
	flex-shrink: initial;
	@media screen and (min-width: 768px) {
		/* flex-direction: row; */
		height: ${props => {
			return props.height ? props.height : ''
		}}px;
	}
`
