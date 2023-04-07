import logo from './logo.svg';
import './App.css';
import Header from './Header';

// function Header(){
//   return <>
//     <div className="header">
//       header
//     </div>
//   </>
// }

function Center(){
  return <>
    <div className="center">
    center
    </div>
  </>
}

function Footer(){
  return <>
    <div className="footer">
    footer
    </div>
  </>
}
function App1() {
  return (
    <>
   <Header />
   <Center />
   <Footer />
    </>
  );
}

export default App1;
