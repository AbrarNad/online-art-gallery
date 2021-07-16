
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkbox = () => {

   

  return (
    <div className="container">
      <div className="row" style={{margin:'70px 0px 0px 0px'}}>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="fonctionTest()"/>
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
      </div>
    </div>
    
  );

  function fonctionTest(){

    <script>
      if (document.getElementById('flexCheckDefault').checked) 
      {
          alert("Checked")
      } else 
      {
          alert("Not Checked")
      }
    </script>
    
  }
}

/*const menuList = MenuList.map(({url,title,index}) =>{
      return (
          <li key={index}>
              <NavLink to={url} activeClassName="active">{title}</NavLink>
          </li>
      );
  });
}*/

export default Checkbox;
