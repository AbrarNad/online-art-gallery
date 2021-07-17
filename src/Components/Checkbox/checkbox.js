
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

//const history = createBrowserHistory({forceRefresh:true});
const history = createBrowserHistory();

function searches(keyValue, label){
  this.keyValue = keyValue;
  this.label = label;
}

var searchList = [];
var styleList = [new searches("Style=Modern", "Modern"), 
                new searches("Style=Realism", "Realism"), 
                new searches("Style=Figurative", "Figurative"), 
                new searches("Style=Conceptual", "Conceptual"), 
                new searches("Style=Illustration", "Illustration"),
                new searches("Material=Wood", "Wood"),
                new searches("Material=Paper", "Paper"),
                new searches("Material=Cardboard", "Cardboard"),
                new searches("Material=Canvas", "Canvas"),
                new searches("Material=Fabric", "Fabric"),
                new searches("Subject=Abstract", "Abstract"),
                new searches("Subject=Landscape", "Landscape"),
                new searches("Subject=People", "People"),
                new searches("Subject=Portrait", "Portrait"),
                new searches("Subject=Nature", "Nature"),
                new searches("Price=500", "Under $500"),
                new searches("Price=500&&1000", "$500-$1000"),
                new searches("Price=1000&&2000", "$1000-$2000"),
                new searches("Price=2000&&5000", "$2000-$5000"),
                new searches("Price=5000", "Over $5000"),];

var labelList = ["Style", "Material", "Subject", "price"];


var newArray = [];


function updateUrl(){
  if(searchList.length == 0) {
    history.push("/Drawings");
    return ;
  }
  var str = "";

  if(searchList.length == 1) str = searchList[0].keyValue;
  else{
    str = searchList[0].keyValue;
    for(let i = 1; i < searchList.length; i++){
      str += "&" + searchList[i].keyValue;
    }
  }
  str = "?" + str;
  var urlString = "/Drawings/" + str;
  history.push(urlString);
}

function filterProduct(products){
  //var newProd = JSON.parse(JSON.stringify(products));
  newArray = products.filter(function (el) {
    var ret = true;
    for(let i = 0; i < searchList.length; i++){
        var myNewArray = searchList[i].keyValue.split("=");
        if (typeof myNewArray !== 'undefined') {
            //console.log(el[myNewArray[0]]);
          if(myNewArray[0] == "Price"){
            var priceRange = myNewArray[1].split("&&");
            if(priceRange.length == 1){
              if(priceRange[0] == "500"){
                ret = ret && el[myNewArray[0]] <= 500;
              }
              else ret = ret && el[myNewArray[0]] > 5000;
            }
            else{
              var lb = parseInt(priceRange[0]);
              var ub = parseInt(priceRange[1]);
              ret = ret && el[myNewArray[0]] > lb && el[myNewArray[0]] <= ub;
            }
            continue;
          }
          ret = ret && el[myNewArray[0]] == myNewArray[1];
        }
    }
    return ret;
  });
}



const Checkbox = ({ products, SettingProducts }) => {

  var checkBoxList = [];
  for(let i = 0; i < styleList.length; i++){
    if(i % 5 === 0) checkBoxList.push(<div><hr/><b>{labelList[i/5]}</b><hr/></div>)
    checkBoxList.push(
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={(event) => {
          let checked = event.target.checked;
          if(checked){
            searchList.push(styleList[i]);
            updateUrl();
            filterProduct(products);
            SettingProducts(newArray);
          }
          else{
            //history.push('/Drawings');
            searchList = searchList.filter(function(el) { return !(el.keyValue === styleList[i].keyValue) });
            updateUrl();
            filterProduct(products);
            SettingProducts(newArray);
          }
        }}/>
        <label className="form-check-label" for="flexCheckChecked">
          {styleList[i].label}
        </label>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="row" style={{margin:'70px 0px 0px 0px'}}>
        {checkBoxList}
      </div>
    </div>
    
  );

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
