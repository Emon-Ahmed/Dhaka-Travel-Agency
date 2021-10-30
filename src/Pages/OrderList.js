import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

export default function OrderList() {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);
  const orderMail = user.email;
  const url = `http://localhost:5000/orderlist/${orderMail}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [orderMail]);
  console.log(order);
  if(order.length == 0) return <p>Nothing To Show</p>
  return (
    <div>
      <h1 className="text-center text-4xl py-20">
        Order Total : {order.length} <br />
      </h1>
      <div>
        {
          order?.map( o => <h1 className="text-center text-2xl">{o.name} </h1>)
        }
      </div>
    </div>
  );
}
