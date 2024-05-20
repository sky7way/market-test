import { BrowserRouter } from 'react-router-dom';
import { RouteProvider } from './config/route/RouteProvider';
import { Header } from './components/UI/Header/Header';
import { Container } from './components/Common/Container/Container';

function App() {

  return (
    <BrowserRouter>
        <Header/>
        <Container>
        <RouteProvider />
        </Container>
    </BrowserRouter>
  )
}

export default App
