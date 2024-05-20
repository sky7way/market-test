import { Container } from "../../components/Common/Container/Container"
import { CartComponents } from "../../components/UI/Cart/CartComponents"
import slyles from './Cart.module.scss'

export const Cart = () => {
    return (
        <Container>
            <CartComponents/>
        </Container>
    )
}