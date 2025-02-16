import React from 'react'
import {SILocationPin} from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";


export const Header = () => {
  return (
    <section>
      <section>
        <div>
          {/* logo */}
          <a href="/">
            <img src="../commenResoures/Amazon_icon.png" alt="amazon logo" />
          </a>
          {/* delivery */}
          <div></div>
          <span>
            <p>Delivery</p>
            <span>Luxembourg</span>
          </span>
        </div>
        <div>
          {/* search */}
          <select name="" id=""></select>
          <option value="">All</option>
          <input type="name" id="" placeholder="search products" />
          {/* icon */}
        </div>
        {/* right side link */}
        <div>
          <div>
            <img src="../commenResoures/flag-us-svgrepo-com.svg" alt="" />
            <section>
              <option value="">EN</option>
            </section>
          </div>
          {/* three componewnts */}
          <a href="">
            <div>
              <p>sign in</p>
              <span>Account & List</span>
            </div>
          </a>
          {/* order */}
          <a href="">
            <p>returns</p>
            <span>& orders</span>
          </a>
          {/* Carts */}
          <a to={ BiCart}>
            {/* icon */}
            <span>0</span>
          </a>
        </div>
      </section>
    </section>
  );
}
