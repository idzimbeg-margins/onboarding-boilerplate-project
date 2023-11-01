import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Card = styled.div`
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: 8px;
	padding: 16px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const CardTitle = styled.h1`
	font-size: 16px;
	font-weight: 600;
	color: #000;
	text-align: center;
`

export const CardImageContainer = styled.div`
	width: 100%;
	height: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const CardImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
	margin-bottom: 0.5rem;
`

export const CardDetailsContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`
