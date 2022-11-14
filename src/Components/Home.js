import NavbarComponent from "./Navbar";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
    }}>
        <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#f8f9fa'
        }}/>
        <NavbarComponent/>
        <div style={{
            position: 'absolute',
            top: '40%',
            alignSelf: 'center',
            color: 'black',
            fontFamily: 'cursive',
            height: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            width: '100%',
        }}>
            <h1>Welcome to Portfolio Builder</h1>
            <h2>Build Your Personal Website in less than 10 minutes</h2>
            <Button variant="outline-dark" style={{
                fontSize: 22,
                width: '20%',
                alignSelf: 'center'
            }}>Get Started</Button>{' '}
        </div>
    </div>
  );
}

export default Home;