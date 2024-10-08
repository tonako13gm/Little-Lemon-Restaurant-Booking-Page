import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { ChakraProvider } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import theme from "./theme/brand"

export default function Layout() {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Container maxW='container.xl'>
                    <Header/>
                    <main>
                        <Outlet />
                    </main>
                    <Footer/>
                </Container>
            </ChakraProvider>
        </>
    )
}
