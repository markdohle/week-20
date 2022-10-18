import React from "react";
import ReactBootstrap from "react-bootstrap";
import axios from "axios";
import {
    Card,
    Accordion,
    Button,
    Container,
    Row,
    Col,
    Image,
    //Input,
  } from "react-bootstrap";
//==============================================================
// simulate getting products from DataBase
const products = [
    { name: "Apples_:", country: "Italy", cost: 3, instock: 10 },
    { name: "Oranges:", country: "Spain", cost: 4, instock: 3 },
    { name: "Beans__:", country: "USA", cost: 2, instock: 5 },
    { name: "Cabbage:", country: "USA", cost: 1, instock: 8 },
  ];
  //=========Cart=============
  /*const Cart = (props) => {
    const { Card, Accordion, Button } = ReactBootstrap;
    let data = props.location.data ? props.location.data : products;
    console.log(`data:${JSON.stringify(data)}`);
  
    return <Accordion defaultActiveKey="0">{list}</Accordion>;
  };
  */
  //useDataApi takes care of state
  //fetch data from the warehouse changes the url and fires the fetch from the database
  const useDataApi = (initialUrl, initialData) => {
    const { useState, useEffect, useReducer } = React;
    const [url, setUrl] = useState(initialUrl);
  
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      data: initialData,
    });
    console.log(`useDataApi called`);
    useEffect(() => {
      console.log("useEffect Called");
      let didCancel = false;
      const fetchData = async () => {
        dispatch({ type: "FETCH_INIT" });
        try {
          const result = await axios(url);
          console.log("FETCH FROM URl");
          if (!didCancel) {
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: "FETCH_FAILURE" });
          }
        }
      };
      fetchData();
      return () => {
        didCancel = true;
      };
    }, [url]);
    return [state, setUrl];
  };
  const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };
  //web component
  const Products = (props) => {
    const [items, setItems] = React.useState(products);
    const [cart, setCart] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    
    console.log(`these are in the cart ${JSON.stringify(cart)}`)
    //  Fetch Data by calling the useDataApi function.
    const { Fragment, useState, useEffect, useReducer } = React;
    const [query, setQuery] = useState("products");
    //"data" comes back as part of the object { data, isLoading, isError }
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
      "http://localhost:1337/api/products",
      {
        data: [],
      }
    );
    console.log(`Rendering Products ${JSON.stringify(data)}`);
    // Fetch Data
    //When we add to the cart, we need to coordinate with the checkout.
    const addToCart = (e) => {
      let name = e.target.name;
  
      //filter creates a new array. In this case, it is an array with one
      let item = items.filter((item) => item.name == name);
      if (item[0].incart > 0) {
        item[0].incart = item[0].incart + 1
      } else {
        item[0].incart = 1
      }
      
      //validate instock.
      if (item[0].instock == 0) return;
      //subract the item from the stock to coordinate with the product list.
      item[0].instock = item[0].instock - 1;
  
      if (item[0].incart == 1) {
        setCart([...cart,...item]);
      } else {
        setCart([...cart]);
      };
      
      console.log(`addToCart: let ${name} = e.target.name = `)
      console.log(`addToCart: filter out ${item} from the items array. If [object Object], it needs JSON.stringify(item)`)
      console.log(`addToCart: This is the item added to the cart ${JSON.stringify(item)}`);
      console.log(`addToCart: item.instock = ${item.instock}`)
      console.log(`addToCart: item[0].instock = ${item[0].instock}`)
      console.log(`addToCart: item[0].incart = ${item[0].incart}`)
     /*
      if (item[0].incart > 0) {
        cart.map((cartItem,cartIndex) => {
          console.log(`cartItem ${cartItem.name}`)
          if( item[0].name = cartItem.name) {
            item[0].incart = item[0].incart + 1
            console.log(`does the item have an "incart" key? ${item[0].incart}`)
            setCart(cart)
          }
        });
      } else {
          item[0].incart = 1
          setCart([...cart, ...item])
        };
      //item[0].incart = 1
      */
      //spread the existing items in the cart and the add the new items to setCart and update useState.
      //setCart([...cart, ...item])
      
    };
    //delete index of the items in the cart, not the Product list. Triggered the onCick event in the cartItems function.
    const deleteCartItem = (delIndex) => {
      //use filter to find the item to delete. Keep all items not equal to the item clicked on.
      let newCart = cart.filter((item, i) => delIndex != i);
      let target = cart.filter((item, index) => delIndex == index);
      //map all the items in the product list and if the target item matches any existing items, then add stock to that item.
      let newItems = items.map((item, index) => {
        if (item.name == target[0].name) item.instock = item.instock + 1;
        return item;
      });
      setCart(newCart);
      setItems(newItems);
    };
    //const photos = ["apple.png", "orange.png", "beans.png", "cabbage.png"];
  
    let list = items.map((item, index) => {
      let n = index + 1049;
      //set the piscum id, which is part of the url with n(random to get different photos for each)."/500/500" changes the image size. What happens if you make it /5/5?
      let urlPhotos = "https://picsum.photos/id/" + n + "/500/500";
  
      return (
        <li key={index}>
          <Image src={urlPhotos} width={70} roundedCircle></Image>
          <Button variant="primary" size="large">
            {item.name}:${item.cost}-Stock={item.instock}
          </Button>
          <input name={item.name} type="submit" onClick={addToCart}></input>
        </li>
      );
    });
    let cartList = cart.map((item, index) => {
      console.log(`cartList: item = ${JSON.stringify(item)}`)
      console.log(`cartList: index = ${index}`)
      console.log(`cartList: item.name = ${item.name}`)
      console.log(`cartList: item.incart = ${item.incart}`)
  
      return (
        <Accordion.Item key={1+index} eventkey={1 + index}>
        <Accordion.Header>
          {item.name}-{item.incart}
        </Accordion.Header>
        <Accordion.Body onClick={() => deleteCartItem(index)}
          eventkey={1 + index}>
          $ {item.cost} from {item.country}
        </Accordion.Body>
      </Accordion.Item>
      );
    });
  
    let finalList = () => {
      //total price at from the checkOut function.
      let total = checkOut();
      //map all the items in the cart. Return the names of all the items in the cart.
      let final = cart.map((item, index) => {
        return (
          <div key={index} index={index}>
            {item.name}
          </div>
        );
      });
      //return the final and total for use in the container tags in the checkout column. 
      return { final, total };
    };
  
    const checkOut = () => {
      let costs = cart.map((item) => item.cost);
      const reducer = (accum, current) => accum + current;
      let newTotal = costs.reduce(reducer, 0);
      console.log(`total updated to ${newTotal}`);
      return newTotal;
    };
    // TODO: implement the restockProducts function
      //set url with doFetch. When the useState is changed, it will trigger the fetch. Make sure the fetch comes back as "data". Where is data defined? It comes back inside an object from doFetch(url). This can be done by creating a variable "b" and setting it equal to the object that holds data. Then use dot notation to access the data array b.data.map. It needs to be an array of the new products.
      //pick out each item of the products. The items come in with more attributes than are needed. 
        //destructure item and put into an object that contains only the attributes we need.
        //Return the destructured object into newItems for each item(product). newItems stores an array of all the items as objects(products).
      //spread existing items and add in all the newItems. This changes the items. And the next time the list of items is rerendered, the "list" is updated.
      const restockProducts = (url) => {
        doFetch(url);
        let b = data
        //console.log(b.data[0])
        let newItems = b.data.map((item) => {
          let { name, country, cost, instock } = item;
          item.incart = 0
          return { name, country, cost, instock };
        });
        setItems([...items, ...newItems]);
      };
    return (
      <Container>
        <Row>
          <Col>
            <h1>Product List</h1>
            <ul style={{ listStyleType: "none" }}>{list}</ul>
          </Col>
          <Col>
            <h1>Cart Contents</h1>
            <Accordion>{cartList}</Accordion>
          </Col>
          <Col>
            <h1>CheckOut </h1>
            <Button onClick={checkOut}>CheckOut $ {finalList().total}</Button>
            <div> {finalList().total > 0 && finalList().final} </div>
          </Col>
        </Row>
        <Row>
          <form
            onSubmit={(event) => {
              //${query} should be products
              restockProducts(`http://localhost:1337/api/${query}`);
              console.log(`Restock called on ${query}`);
              //prevent this from being called multpile times.
              event.preventDefault();
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit">ReStock Products</button>
          </form>
        </Row>
      </Container>
    );
  };
  // ========================================
  export default Products;
  