import { useForm } from "react-hook-form"
import { Button } from "../Button/styles"
import { StyledFieldInput } from "../Inputs/styles"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { StyledReportsForm } from "./styles"
import "../../styles/text.css"
import { useContext } from "react"
import { ReportsContext } from "../../contexts/ReportsContext"

const schema = yup.object().shape({
    adress: yup.string().required('Endereço da denúncia é obrigatório'),
    description: yup.string().required('Informação da denúncia é obrigatória')
})

interface iReportsForm {
    adress: string,
    city: string,
    description: string
}

export const ReportsForm = () => {
    const { submitReport } = useContext(ReportsContext)
    const { register, handleSubmit, formState: { errors } } = useForm<iReportsForm>({
        resolver: yupResolver(schema)
    })

    return (
        <StyledReportsForm>
            <h1 className="form-title">Denuncie maus-tratos</h1>
            <span>X</span>
            <form onSubmit={handleSubmit(submitReport)}>
                <StyledFieldInput>Endereço:
                    <input
                    className="input--small" 
                    type="text"
                    placeholder="Digite o endereço"
                    {...register('adress')} />
                    <p className="form__label--error form_label">{errors.adress?.message}</p>
                </StyledFieldInput>
                <StyledFieldInput>Cidade:
                    <input
                    className="input--small" 
                    type="text"
                    placeholder="Digite a cidade"
                    {...register('city')} />
                    <p className="form__label--error form_label">{errors.city?.message}</p>
                </StyledFieldInput>
                <StyledFieldInput>Informações:
                    <input 
                    className="input--large"
                    type="text"
                    placeholder="Conte-nos sobre o ocorrido"
                    {...register('description')} />
                    <p className="form__label--error form_label">{errors.description?.message}</p>
                </StyledFieldInput>
                <Button className='button__size--medium button__color--yellow'>Enviar</Button>
            </form>
        </StyledReportsForm>
    )
}