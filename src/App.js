
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notfound from './component/404/Notfound';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';

import About from './component/About/About';
import Service from './component/Service/Service';
import CourseDetail from './component/CourseDetail/CourseDetail';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App">

 
      
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Home></Home>            
          </Route>

          <Route exact path='/Home'>
            <Home></Home>
          </Route>
          <Route exact path='/About'>
       <About></About>
          </Route>

          <Route exact path='/Service'>
<Service></Service>
          </Route>
          <Route exact path='/contact'>
<Contact></Contact>
          </Route>
          <Route  path='/course/:courseId'>
           <CourseDetail></CourseDetail>
          </Route>
          <Route exact path='*'>
            <Notfound></Notfound>
          </Route>

        </Switch>
        
</Router>
      
      

<Footer></Footer>
      
    </div>
  );
}

export default App;
