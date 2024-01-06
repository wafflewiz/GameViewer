// calls the API Component
import ApiComponent from './APIComponent';
//import SearchComponent from './testcomponent';
import SearchComponent from './SearchComponent';



const Home = () => {
  return (
    <div>
      <h1>  
        <ul id="mainmenu">
          <li id="submenu"><a href='../index.tsx'>Home</a></li>
          <li id="submenu"><a href='../searchPage.jsx'>Search</a></li>
        </ul>
      </h1>
      <SearchComponent/>
    </div>
  );
};

export default Home;
