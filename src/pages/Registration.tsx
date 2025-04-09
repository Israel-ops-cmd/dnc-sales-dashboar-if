import Box from "@mui/material/Box";
import { BannerImage, FormComponent, Logo, StyledH1, StyledP, StyledUl } from "@/components";
import { pxToRem } from "@/utils";



function Registration() {
    return (
        <>
            <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
            <Box sx={{ width: "50vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ marginBottom: pxToRem(24) }}>
                    <Logo height={41} width={100}/>
                </Box>
                <Box sx={{ marginBottom: pxToRem(24) }}>
                    <StyledH1>Faça seu cadastro</StyledH1>
                    <StyledP>Primeiro, diga-nos quem você é.</StyledP>
                    <StyledUl>
                        <li>Entre 8 e 16 caracteres;</li>
                        <li>Pelo menos uma letra maiúscula;</li>
                        <li>Pelo menos um caractere especial;</li>
                        <li>Pelo menos um número</li>
                    </StyledUl>
                </Box>
                <FormComponent inputs={[
                        {type: 'email', placeholder: 'Email'},
                        {type: 'password', placeholder: 'Senha'}
                    ]} 
                    buttons = {[
                        { className: 'primary', type: 'submit', children: 'Login'}
                    ]}
                    message = {{
                        msg: 'ERRO!!!',
                        type: 'error'
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
  
  export default Registration