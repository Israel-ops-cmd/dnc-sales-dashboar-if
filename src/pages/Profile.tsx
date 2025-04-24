import { useContext } from "react";
import { AppThemeContext } from "@/contexts/AppThemeContext";

// COMPONENTS
import { CardComponent, Header, StyledH2, StyledButton } from "@/components";
import { Container, Grid} from "@mui/material";

// SERVICES
import { logout } from "@/services";

function Profile() {
    const themeContext = useContext(AppThemeContext);

    return (
        <>
            <Header />
            <Container className="mb-2" maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid component="div" sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)' } }}>
                        <CardComponent>Seus dados...</CardComponent>
                    </Grid>
                    <Grid component="div" sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)' } }}>
                        <CardComponent>
                            <StyledH2 className="mb-1">Definições de Conta</StyledH2>
                            <StyledButton className="primary mb-1" onClick={themeContext?.toggleTheme}>
                                Trocar para tema {themeContext?.appTheme === "light" ? "escuro" : "claro"}
                            </StyledButton>
                            <StyledButton className="alert" onClick={logout}>Logout</StyledButton>
                        </CardComponent>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Profile;
