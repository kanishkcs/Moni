import { img2, img3 } from "../../_components/Imagepath";

export default {
    Data: [
        {
          id: 1,
          key:1,
          Invoice: "#4987",
          Category: "Food",
          Created : "23 Mar 2023",
          Name: "John Smith",
          email: "john@example.com",
          img:img2,
          Total: "$1,54,220",
          Paid: "$1,50,000",
          Payment: "Cash",
          Balance: "$0",
          Due: "-",
          Status: "Paid",
          Action: ""
        },
        {
          id:2, 
          key:2, 
          Invoice: "#4988",
          Category: "Advertising",
          Created : "16 Mar 2022",
          Name: "Johnny",
          email: " johnny@example.com",
          img:img3,
          Total: "$3,54,220",
          Paid: "$2,50,000",
          Payment: "Cheque",
          Balance: "$4,220",
          Due: "16 Jan 2023",
          Status: "Paid",
          Action: ""
        }
       
    ]
}