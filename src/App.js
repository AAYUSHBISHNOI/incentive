import './App.css';
import Backtootp from './components/Backtotop';
import Card from './components/Card';
import Chat from './components/Chat';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Pricing from './components/Pricing';
import Promote from './components/Promote';
import Why from './components/Why';
import Win from './components/Win';

function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Card/>
    <Win/>
    <Chat/>
    <Why/>
    <Promote/>
    <Pricing/>
    <Footer/>
    <Backtootp/>
    </>
  );
}

export default App;
