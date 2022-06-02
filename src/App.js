
import './App.css';
import one from './images/01.jpg'
import two from './images/02.jpg'
import three from './images/03.jpg'
import four from './images/04.jpg'
import five from './images/05.jpg'
import six from './images/06.jpg'
import seven from './images/07.jpg'

function App() {

  const Image = ({ image }) => {
    return (
      <img onClick={(e)=>navigator.clipboard.writeText(e.target.currentSrc)} style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={image} alt="" />
    )
  }
  return (
    <div className="App" style={{ display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(250px, 1fr) )' }}>
      <Image image={one}  />
      <Image image={two}  />
      <Image image={three}  />
      <Image image={four}  />
      <Image image={five}  />
      <Image image={six}  />
      <Image image={seven}  />
    </div>
  );
}

export default App;
