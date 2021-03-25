import React from 'react'
import cripto from 'crypto'

import { Modal, Form, Input, Button } from 'antd'
import MaskedInput from 'antd-mask-input'
import { CirclePicker } from 'react-color'

interface color {
	hex: string
}

interface candidate {
	id: string
	name: string
	tel: string
	email: string
	color: color
	power: number
}

type ModalProps = {
	listCandidates: candidate[]
	openedModal: boolean
	setOpenedModal: (value: boolean) => void
	initialValues: candidate | undefined
	finish?: (candidate) => void | undefined
	setListCandidate: (value: candidate[]) => void
}

function AddCandidate({
	listCandidates,
	openedModal = false,
	setOpenedModal,
	initialValues,
	finish,
	setListCandidate
}: ModalProps): JSX.Element {
	const [form] = Form.useForm()

	const addCandidate = (values: candidate): void => {
		const candidate = { ...values }
		candidate.id = cripto.randomBytes(10).toString('hex')
		candidate.color = values.color
		candidate.power = Math.round(Math.random() * 99 + 1)
		const cloneCandidates = [...listCandidates]
		cloneCandidates.push(candidate)
		setListCandidate(cloneCandidates)
		localStorage.setItem('listCandidates', JSON.stringify(cloneCandidates))
		form.resetFields()
		setOpenedModal(false)
	}

	return (
		<Modal
			title="Adicionar candidato"
			visible={openedModal}
			footer={false}
			onCancel={() => setOpenedModal(false)}>
			<Form
				name="AddCandidate"
				form={form}
				initialValues={initialValues}
				onFinish={finish ? finish : addCandidate}>
				<Form.Item
					label="Nome"
					name="name"
					rules={[
						{
							required: true,
							message: 'Por favor insira um nome!'
						}
					]}>
					<Input name="name" />
				</Form.Item>
				<Form.Item
					label="Telefone"
					name="tel"
					rules={[
						{
							required: true,
							message: 'Por favor insira um telefone!'
						}
					]}>
					<MaskedInput name="tel" mask="(11) 11111-1111" />
				</Form.Item>
				<Form.Item
					label="E-mail"
					name="email"
					rules={[
						{
							required: true,
							message: 'Por favor insira um e-mail!'
						},
						{
							type: 'email',
							message: 'Por favor insira um e-mail válido!'
						}
					]}>
					<Input name="email" />
				</Form.Item>
				<Form.Item
					label="Cor do participante"
					name="color"
					rules={[
						{
							required: true,
							message:
								'Por favor selecione uma cor do participante!'
						}
					]}>
					<CirclePicker />
				</Form.Item>
				<Button type="primary" htmlType="submit">
					Salvar
				</Button>
			</Form>
		</Modal>
	)
}

export default AddCandidate
