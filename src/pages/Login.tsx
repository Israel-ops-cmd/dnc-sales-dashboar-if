import { ChangeEvent, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie';

// COMPONENTES
import Box from "@mui/material/Box";
import { BannerImage, FormComponent, Logo,  StyledH1, StyledP } from "@/components";

//HOOKS
import { useFormValidation, usePost } from '@/hooks';

// UTILS
import { jwtExpirationDateConverter, pxToRem } from "@/utils";

// TYPES
import { DecodedJwt, MessageProps, LoginData, LoginPostData } from "@/types"

// REDUX
import { useSelector } from "react-redux"
import { RootState } from '@/redux'

function Login() {
    const navigate = useNavigate()
    const { email, message } = useSelector((state: RootState) => state.createProfile)
    const inputs = [
        {type: 'email', placeholder: 'Email'},
        {type: 'password', placeholder: 'Senha'}
    ]
    const { data, loading, error, postData } = usePost<LoginData, LoginPostData>('login')
    const { formValues, formValid, handleChange } = useFormValidation(inputs)

    const handleMessage = (): MessageProps => {
        if (!error) return {msg: message ?? '', type: 'success'}
        switch(error) {
            case 401: 
                return {
                    msg: 'Email e/ou senha inválidos',
                    type: 'error'
                }
            default: 
                return {
                    msg: "Não foi possível realizar a operação. Entre em contato com o nosso suporte.",
                    type: 'error'
                }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await postData({
            email: String(formValues[0]),
            password: String(formValues[1])
        })
    }

    useEffect(() => {
        if (data?.jwt_token){
            const decoded: DecodedJwt = jwtDecode(data?.jwt_token)
            Cookies.set("Authorization", data?.jwt_token, {
                expires: jwtExpirationDateConverter(decoded.exp),
                secure: true,
            })
        }
        if (Cookies.get('Authorization')) navigate('/home')
    }, [data, navigate])

    useEffect(() => {
        if (email) {
            handleChange(0, email)
        }
    }, [email])

    return (
        <>
            <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
                <Box sx={{ width: "50vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ marginBottom: pxToRem(24) }}>
                        <Logo height={41} width={100}/>
                    </Box>
                    <Box sx={{ marginBottom: pxToRem(24) }}>
                        <StyledH1>Bem-vindo</StyledH1>
                        <StyledP>Digite sua senha e email para logar</StyledP>
                    </Box>
                    <FormComponent inputs={inputs.map((input, index) => ({
                        type: input.type,
                        placeholder: input.placeholder,
                        value: formValues[index] || '',
                        onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange(index, (e.target as HTMLInputElement).value)
                    }))}
                    buttons = {[
                        { 
                            className: 'primary', 
                            disabled: !formValid || loading,  
                            type: 'submit', 
                            onClick: handleSubmit, 
                            children: loading ? 'Aguarde...' : 'Login'
                        }
                    ]}
                    message = {handleMessage()}
                    />
                </Box>
                <Box sx={{ width: "50vw", display: { xs: "none", sm: "block" } }}>
                    <BannerImage />
                </Box>
            </Box>
        </>
    )       
}


export default Login;
