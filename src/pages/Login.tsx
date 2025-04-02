import Box from "@mui/material/Box";
import { BannerImage } from "@/components";




function Login() {
    return (
        <>
            <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
                <Box sx={{ width: "50vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1>LOGIN</h1>
                </Box>
                <Box sx={{ width: "50vw", display: { xs: "none", sm: "block" } }}>
                    <BannerImage />
                </Box>
            </Box>
        </>
    )       
}


export default Login;
