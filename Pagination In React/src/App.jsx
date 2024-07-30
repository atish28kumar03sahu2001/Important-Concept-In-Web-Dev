import { useEffect, useState } from "react";
import './App.css';
export const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const func1 = async () => {
    let res = await fetch('https://dummyjson.com/products?limit=104');
    let data = await res.json();
    console.log(data.products);
    if (data && data.products) {
      setData(data.products);
    }
  }
  useEffect(() => {
    func1();
  }, [])
  const SelectPageHandler =(selectpage) => {
    if(selectpage >= 1 && selectpage <= data.length / 8 && selectpage !== page){
      setPage(selectpage);
    }
  }
  return (
    <>
      <h1>Pagination In React Traditional Way</h1>
      <div className="Container">
        {
          data.slice(page * 8 - 8,page*8).map((data) => (
            <div key={data.id} className="Prod-Div">
              <img src={data.thumbnail} alt={data.title} width="200px" height="200px" />
              <p>{data.id}</p>
              <p>{data.title}</p>
              <p>{data.price}</p>
            </div>
          ))
        }
      </div>
      <div className="PaginationD">
        {
          data.length > 0 && 
          <div className="BTND">
            <button className={page > 1 ? "Btn" : "Btn1"} onClick={()=>SelectPageHandler(page - 1)}>Previous</button>
            {
              [...Array(data.length/8)].map((_,index)=>{
                  return <div key={index}><button onClick={()=>SelectPageHandler(index + 1)} className={page === index+1 ? "SPB":"SPB1"}>{index + 1}</button></div>
              })
            }
            <button className={page < data.length / 8 ? "Btn" : "Btn1"} onClick={()=>SelectPageHandler(page + 1)}>Next</button>
          </div>
        }
      </div>
    </>
  );
}