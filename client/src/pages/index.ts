
import Home from './home';
import AllConcerts from './all-concerts';
import CreateConcert from './create-concert';
import EditConcert from './edit-concert';
import MyProfile from './my-profile';
import { Login } from './login';
import ConcertDetails from './concert-details';
import ManagerProfile from './manager-profile';
import Managers from './manager';


//predstavlja izvoz svih komponenti koje se koriste u aplikaciji. Svaka od ovih komponenti se uvozi iz svog odgovarajućeg fajla
// i nakon toga se izvozi na korišćenje drugim delovima aplikacije.
export {
  Home,
  Login,
  AllConcerts,
  CreateConcert,
  MyProfile,
  EditConcert,
  ConcertDetails,
  ManagerProfile,
  Managers
};