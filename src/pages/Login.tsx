import Box from "@mui/material/Box";
import { BannerImage, FormComponent, Logo,  StyledH1, StyledP } from "@/components";
import { pxToRem } from "@/utils";




function Login() {
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
                    <FormComponent inputs={[
                        {type: 'email', placeholder: 'Email', disabled: true},
                        {type: 'password', placeholder: 'Senha'}
                    ]} 
                    buttons = {[
                        { className: 'primary', type: 'submit', children: 'Login', disabled: true}
                    ]}
                    message = {{
                        msg: 'Sucesso!!!',
                        type: 'success'
                    }}
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
