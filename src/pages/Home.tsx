import { CardComponent, Header } from "@/components"
import AvatarsList from "@/components/AvatarsList"
import { Container } from "@mui/material"
import { currencyConverter } from "@/utils"

function Home() {
    const mockListData = [
        {
            avatar: 'dnc-avatar.svg',
            name: 'Nome Sobrenome 1',
            subtitle: currencyConverter(4234.54)
        },
        {
            avatar: 'dnc-avatar.svg',
            name: 'Nome Sobrenome 2',
            subtitle: currencyConverter(3334.14)
        },
        {
            avatar: 'dnc-avatar.svg',
            name: 'Nome Sobrenome 3',
            subtitle: currencyConverter(2264.74)
        },
    ]
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <CardComponent className="warning">CARD</CardComponent>
                <CardComponent>
                    <AvatarsList listData={mockListData}/>
                </CardComponent>
            </Container>
            <h1>Home</h1>
        </>
    )
  }
  
  export default Home