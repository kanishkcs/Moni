import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";

const Sidebar = () => {
  const [selectedItems, setSelectedItems] = useState(Array().fill(false));
  const { pathname } = useLocation();

  const handleItemClick = (index) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      console.log("selectedItems", selectedItems);
      // Close the previously opened item
      updatedSelectedItems.forEach((item, i) => {
        if (i !== index) {
          updatedSelectedItems[i] = false;
        }
      });

      // Toggle the state of the clicked item
      updatedSelectedItems[index] = !updatedSelectedItems[index];

      return updatedSelectedItems;
    });
  };

  const handleSubdropClick = (index) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };

  useEffect(() => {
    function handleMouseOver(e) {
      e.stopPropagation();
      if (
        document.body.classList.contains("mini-sidebar") &&
        document.querySelector("#toggle_btn").offsetParent !== null
      ) {
        var targ = e.target.closest(".sidebar");
        if (targ) {
          document.body.classList.add("expand-menu");
          document
            .querySelectorAll(".subdrop + ul")
            .forEach((ul) => (ul.style.display = "block"));
        } else {
          document.body.classList.remove("expand-menu");
          document
            .querySelectorAll(".subdrop + ul")
            .forEach((ul) => (ul.style.display = "none"));
        }
        return false;
      }
    }

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div className="sidebar" id="sidebar">
        <Scrollbars>
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul className="sidebar-vertical">
                {/* Main */}
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    key={1}
                    onClick={() => handleItemClick(1)}
                    className={selectedItems[1] ? "subdrop" : ""}
                  >
                    <i className="fe fe-home" /> <span> Dashboard</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[1] ? "block" : "none" }}>
                    <li>
                      <Link
                        to="/index"
                        className={pathname === "/index" ? "active" : ""}
                      >
                        Admin Dashboard
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    key={2}
                    onClick={() => handleItemClick(2)}
                    className={selectedItems[2] ? "subdrop" : ""}
                  >
                    <i className="fe fe-grid" /> <span> Applications</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[2] ? "block" : "none" }}>
                    <li>
                      <Link
                        className={pathname === "/chat" ? "active" : ""}
                        to="/chat"
                      >
                        Chat
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname === "/calendar" ? "active" : ""}
                        to="/calendar"
                      >
                        Calendar
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname === "/inbox" ? "active" : ""}
                        to="/inbox"
                      >
                        Email
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* /Main */}
                <li className="submenu">
                  <Link
                    to="#"
                    key={3}
                    onClick={() => handleItemClick(3)}
                    className={selectedItems[3] ? "subdrop" : ""}
                  >
                    <i className="fe fe-user" /> <span> Super Admin</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[3] ? "block" : "none" }}>
                    <li>
                      <Link to="/dashbord"  className={pathname === "/dashbord" ? "active" : ""}>Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/companies"  className={pathname === "/companies" ? "active" : ""}>Companies</Link>
                    </li>
                    <li>
                      <Link to="/subscription" className={pathname === "/subscription" ? "active" : ""}>Subscription</Link>
                    </li>
                    <li>
                      <Link to="/packages" className={pathname === "/packages" ? "active" : ""}>Packages</Link>
                    </li>
                    {/* <li>
                      <Link to="/domain-request" className={pathname === "/domain-request" ? "active" : ""}>Domain Request</Link>
                    </li> */}
                    <li>
                      <Link to="/domain" className={pathname === "/domain" ? "active" : ""}>Domain</Link>
                    </li>
                    <li>
                      <Link to="/purchase-transaction" className={pathname === "/purchase-transaction" ? "active" : ""}>
                        Purchase Transaction
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Customers */}
                <li className="menu-title">
                  <span>Customers</span>
                </li>
                <li>
                  <Link to="/customers" className={pathname === "/customers" ? "active" : ""}>
                    <i className="fe fe-users" /> <span>Customers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/customer-details" className={pathname === "/customer-details" ? "active" : ""}>
                    <i className="fe fe-file" /> <span>Customer Details</span>
                  </Link>
                </li>
                <li>
                  <Link to="/vendors" className={pathname === "/vendors" ? "active" : ""}>
                    <i className="fe fe-user" /> <span>Vendors</span>
                  </Link>
                </li>
                {/* /Customers */}
                {/* Inventory */}
                <li className="menu-title">
                  <span>Inventory</span>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(4)}
                    className={selectedItems[4] ? "subdrop" : ""}
                  >
                    <i className="fe fe-package" />{" "}
                    <span> Products / Services</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[4] ? "block" : "none" }}>
                    <li>
                      <Link to="/product-list" className={pathname === "/product-list" ? "active" : ""}>Product List</Link>
                    </li>
                    <li>
                      <Link to="/category" className={pathname === "/category" ? "active" : ""}>Category</Link>
                    </li>
                    <li>
                      <Link to="/units" className={pathname === "/units" ? "active" : ""}>Units</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/inventory" className={pathname === "/inventory" ? "active" : ""}>
                    <i className="fe fe-user" /> <span>Inventory</span>
                  </Link>
                </li>
                {/* /Inventory */}
                {/* Signature */}
                <li className="menu-title">
                  <span>Signature</span>
                </li>
                <li>
                <Link to="/signature-list" className={pathname === "/signature-list" ? "active" : ""}>
                    <i className="fe fe-clipboard" />{" "}
                    <span>List of Signature</span>
                  </Link>
                  <Link to="/signature-invoice" className={pathname === "/signature-invoice" ? "active" : ""}>
                    <i className="fe fe-box" /> <span>Signature Invoice</span>
                  </Link>
                </li>
                {/* /Signature */}
                {/* Sales */}
                <li className="menu-title">
                  <span>Sales</span>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(5)}
                    className={selectedItems[5] ? "subdrop" : ""}
                  >
                    <i className="fe fe-file" /> <span>Invoices</span>
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[5] ? "block" : "none" }}>
                    <li>
                      <Link to="/invoice-list" className={pathname === "/invoice-list" ? "active" : ""}>Invoices List</Link>
                    </li>
                    <li>
                      <Link to="/invoice-details-admin" className={pathname === "/invoice-details-admin" ? "active" : ""}>
                        Invoice Details (Admin)
                      </Link>
                    </li>
                    <li>
                      <Link to="/invoice-details" className={pathname === "/invoice-details" ? "active" : ""}>
                        Invoice Details (Customer)
                      </Link>
                    </li>
                    <li>
                      <Link to="/invoice-template" className={pathname === "/invoice-template" ? "active" : ""}>Invoice Templates</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/recurring-invoices" className={pathname === "/recurring-invoices" ? "active" : ""}>
                    <i className="fe fe-clipboard" />{" "}
                    <span>Recurring Invoices</span>
                  </Link>
                </li>
                <li>
                  <Link to="/credit-notes" className={pathname === "/credit-notes" ? "active" : ""}>
                    <i className="fe fe-edit" /> <span>Credit Notes</span>
                  </Link>
                </li>
                {/* /Sales */}
                {/* Purchases */}
                <li className="menu-title">
                  <span>Purchases</span>
                </li>
                <li>
                  <Link to="/purchases" className={pathname === "/purchases" ? "active" : ""}>
                    <i className="fe fe-shopping-cart" /> <span>Purchases</span>
                  </Link>
                </li>
                <li>
                  <Link to="/purchase-orders" className={pathname === "/purchase-orders" ? "active" : ""}>
                    <i className="fe fe-shopping-bag" />{" "}
                    <span>Purchase Orders</span>
                  </Link>
                </li>
                <li>
                  <Link to="/debit-notes" className={pathname === "/debit-notes" ? "active" : ""}>
                    <i className="fe fe-file-text" /> <span>Debit Notes</span>
                  </Link>
                </li>
                {/* /Purchases */}
                {/* Finance & Accounts */}
                <li className="menu-title">
                  <span>Finance &amp; Accounts</span>
                </li>
                <li>
                  <Link to="/expenses" className={pathname === "/expenses" ? "active" : ""}>
                    <i className="fe fe-file-plus" /> <span>Expenses</span>
                  </Link>
                </li>
                <li>
                  <Link to="/payments" className={pathname === "/payments" ? "active" : ""}>
                    <i className="fe fe-credit-card" /> <span>Payments</span>
                  </Link>
                </li>
                {/* /Finance & Accounts */}
                {/* Quotations */}
                <li className="menu-title">
                  <span>Quotations</span>
                </li>
                <li>
                  <Link to="/quotations" className={pathname === "/quotations" ? "active" : ""}>
                    <i className="fe fe-clipboard" /> <span>Quotations</span>
                  </Link>
                </li>
                <li>
                  <Link to="/delivery-challans" className={pathname === "/delivery-challans" ? "active" : ""}>
                    <i className="fe fe-file-text" />{" "}
                    <span>Delivery Challans</span>
                  </Link>
                </li>
                {/* /Quotations */}
                {/* Reports */}
                <li className="menu-title">
                  <span>Reports</span>
                </li>
                <li>
                  <Link to="/payment-summary" className={pathname === "/payment-summary" ? "active" : ""}>
                    <i className="fe fe-credit-card" />{" "}
                    <span>Payment Summary</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(20)}
                    className={selectedItems[20] ? "subdrop" : ""}
                  >
                    <i className="fe fe-box" />
                    <span>Reports</span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[20] ? "block" : "none" }}>
                    <li>
                      <Link to="/expense-report" className={pathname === "/expense-report" ? "active" : ""}>Expense Report</Link>
                    </li>
                    <li>
                      <Link to="/purchase-report" className={pathname === "/purchase-report" ? "active" : ""}>Purchase Report</Link>
                    </li>
                    <li>
                      <Link to="/purchase-return" className={pathname === "/purchase-return" ? "active" : ""}>
                        Purchase Return Report
                      </Link>
                    </li>
                    <li>
                      <Link to="/sales-report" className={pathname === "/sales-report" ? "active" : ""}>Sales Report</Link>
                    </li>
                    <li>
                      <Link to="/sales-return-report" className={pathname === "/sales-return-report" ? "active" : ""}>
                        Sales Return Report
                      </Link>
                    </li>
                    <li>
                      <Link to="/quotation-report" className={pathname === "/quotation-report" ? "active" : ""}>Quotation Report</Link>
                    </li>
                    <li>
                      <Link to="/payment-report" className={pathname === "/payment-report" ? "active" : ""}>Payment Report</Link>
                    </li>
                    <li>
                      <Link to="/stock-report" className={pathname === "/stock-report" ? "active" : ""}>Stock Report</Link>
                    </li>
                    <li>
                      <Link to="/low-stock-report" className={pathname === "/low-stock-report" ? "active" : ""}>Low Stock Report</Link>
                    </li>
                    <li>
                      <Link to="/income-report" className={pathname === "/income-report" ? "active" : ""}>Income Report</Link>
                    </li>
                    <li>
                      <Link to="/tax-report" className={pathname === "/tax-purchase" ? "active" : ""}>Tax Report</Link>
                    </li>
                    <li>
                      <Link to="/profit-loss-list" className={pathname === "/profit-loss-list" ? "active" : ""}>Profit &amp; Loss</Link>
                    </li>
                  </ul>
                </li>
                {/* /Reports */}
                {/* User Management */}
                <li className="menu-title">
                  <span>User Management</span>
                </li>
                <li>
                  <Link to="/users" className={pathname === "/users" ? "active" : ""}>
                    <i className="fe fe-user" /> <span>Users</span>
                  </Link>
                </li>
                <li>
                  <Link to="/roles-permission" className={pathname === "/roles-permission" ? "active" : ""}>
                    <i className="fe fe-clipboard" />{" "}
                    <span>Roles &amp; Permission</span>
                  </Link>
                </li>
                <li>
                  <Link to="/delete-account-request" className={pathname === "/delete-account-request" ? "active" : ""}>
                    <i className="fe fe-trash-2" />{" "}
                    <span>Delete Account Request</span>
                  </Link>
                </li>
                {/* /User Management */}
                {/* Membership) */}
                <li className="menu-title">
                  <span>Membership</span>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(6)}
                    className={selectedItems[6] ? "subdrop" : ""}
                  >
                    <i className="fe fe-book" /> <span> Membership</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[6] ? "block" : "none" }}>
                    <li>
                      <Link to="/membership-plans" className={pathname === "/membership-plans" ? "active" : ""}>Membership Plans</Link>
                    </li>
                    <li>
                      <Link to="/membership-addons" className={pathname === "/membership-addons" ? "active" : ""}>Membership Addons</Link>
                    </li>
                    <li>
                      <Link to="/subscribers" className={pathname === "/subscribers" ? "active" : ""}>Subscribers</Link>
                    </li>
                    <li>
                      <Link to="/transactions" className={pathname === "/transactions" ? "active" : ""}>Transactions</Link>
                    </li>
                  </ul>
                </li>
                {/* /Membership) */}
                {/* Content (CMS) */}
                <li className="menu-title">
                  <span>Content (CMS)</span>
                </li>
                <li>
                  <Link to="/pages" className={pathname === "/pages" ? "active" : ""}>
                    <i className="fe fe-folder" /> <span>Pages</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(7)}
                    className={selectedItems[7] ? "subdrop" : ""}
                  >
                    <i className="fe fe-book" /> <span> Blog</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[7] ? "block" : "none" }}>
                    <li>
                      <Link to="/all-blogs" className={pathname === "/all-blogs" ? "active" : ""}>All Blogs</Link>
                    </li>
                    <li>
                      <Link to="/categories" className={pathname === "/categories" ? "active" : ""}>Categories</Link>
                    </li>
                    <li>
                      <Link to="/blog-comments" className={pathname === "/blog-comments" ? "active" : ""}>Blog Comments</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(8)}
                    className={selectedItems[8] ? "subdrop" : ""}
                  >
                    <i className="fe fe-map-pin" /> <span> Location</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[8] ? "block" : "none" }}>
                    <li>
                      <Link to="/countries" className={pathname === "/countries" ? "active" : ""}>Countries</Link>
                    </li>
                    <li>
                      <Link to="/states" className={pathname === "/states" ? "active" : ""}>States</Link>
                    </li>
                    <li>
                      <Link to="/cities" className={pathname === "/cities" ? "active" : ""}>Cities</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/testimonials" className={pathname === "/testimonials" ? "active" : ""}>
                    <i className="fe fe-message-square" />{" "}
                    <span>Testimonials</span>
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className={pathname === "/faq" ? "active" : ""}>
                    <i className="fe fe-alert-circle" /> <span>FAQ</span>
                  </Link>
                </li>
                {/* /Content (CMS) */}
                {/* Support */}
                <li className="menu-title">
                  <span>Support</span>
                </li>
                <li>
                  <Link to="/contact-messages" className={pathname === "/contact-messages" ? "active" : ""}>
                    <i className="fe fe-printer" />{" "}
                    <span>Contact Messages</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(9)}
                    className={selectedItems[9] ? "subdrop" : ""}
                  >
                    <i className="fe fe-save" /> <span> Tickets</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[9] ? "block" : "none" }}>
                    <li>
                      <Link to="/tickets" className={pathname === "/tickets" ? "active" : ""}>Tickets</Link>
                    </li>
                    <li>
                      <Link to="/tickets-list" className={pathname === "/tickets-list" ? "active" : ""}>Tickets List</Link>
                    </li>
                    <li>
                      <Link to="/tickets-kanban" className={pathname === "/tickets-kanban" ? "active" : ""}>Tickets Kanban</Link>
                    </li>
                    <li>
                      <Link to="/tickets-overview" className={pathname === "/tickets-overview" ? "active" : ""}>Ticket Overview</Link>
                    </li>
                  </ul>
                </li>
                {/* /Support */}
                {/* Pages */}
                <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li>
                  <Link to="/profile" className={pathname === "/profile" ? "active" : ""}>
                    <i className="fe fe-user" /> <span>Profile</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(10)}
                    className={selectedItems[10] ? "subdrop" : ""}
                  >
                    <i className="fe fe-lock" /> <span> Authentication </span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[10] ? "block" : "none" }}>
                    <li>
                      <Link to="/login" className={pathname === "/login" ? "active" : ""}> Login </Link>
                    </li>
                    <li>
                      <Link to="/register" className={pathname === "/register" ? "active" : ""}> Register </Link>
                    </li>
                    <li>
                      <Link to="/forgot-password" className={pathname === "/forgot-password" ? "active" : ""}> Forgot Password </Link>
                    </li>
                    <li>
                      <Link to="/lock-screen" className={pathname === "/lock-screen" ? "active" : ""}> Lock Screen </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/error-404" className={pathname === "/error-404" ? "active" : ""}>
                    <i className="fe fe-x-square" /> <span>Error Pages</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blank-page" className={pathname === "/blank-page" ? "active" : ""}>
                    <i className="fe fe-file" /> <span>Blank Page</span>
                  </Link>
                </li>
                <li>
                  <Link to="/vector-map" className={pathname === "/vector-map" ? "active" : ""}>
                    <i className="fe fe-image" /> <span>Vector Maps</span>
                  </Link>
                </li>
                {/* /Pages */}
                {/* UI Interface */}
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(11)}
                    className={selectedItems[11] ? "subdrop" : ""}
                  >
                    <i className="fe fe-pocket" /> <span>Base UI </span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[11] ? "block" : "none" }}>
                    <li>
                      <Link className={pathname === "/alerts" ? "active" : ""} to="/alerts">Alerts</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/accordions" ? "active" : ""} to="/accordions">Accordions</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/avatar" ? "active" : ""} to="/avatar">Avatar</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/badges" ? "active" : ""} to="/badges">Badges</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/buttons" ? "active" : ""} to="/buttons">Buttons</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/button-group" ? "active" : ""} to="/button-group">Button Group</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/breadcrumbs" ? "active" : ""} to="/breadcrumbs">Breadcrumb</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/cards" ? "active" : ""} to="/cards">Cards</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/carousel" ? "active" : ""} to="/carousel">Carousel</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/dropdowns" ? "active" : ""} to="/dropdowns">Dropdowns</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/grid" ? "active" : ""} to="/grid">Grid</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/images" ? "active" : ""} to="/images">Images</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/lightbox" ? "active" : ""} to="/lightbox">Lightbox</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/media" ? "active" : ""} to="/media">Media</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/modals" ? "active" : ""} to="/modals">Modals</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/offcanvas" ? "active" : ""} to="/offcanvas">Offcanvas</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/pagination" ? "active" : ""} to="/pagination">Pagination</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/popover" ? "active" : ""} to="/popover">Popover</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/progress" ? "active" : ""} to="/progress">Progress Bars</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/placeholders" ? "active" : ""} to="/placeholders">Placeholders</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/rangeslides" ? "active" : ""} to="/rangeslides">Range Slider</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/spinners" ? "active" : ""} to="/spinners">Spinner</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/sweetalerts" ? "active" : ""} to="/sweetalerts">Sweet Alerts</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/tab" ? "active" : ""} to="/tab">Tabs</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/toasts" ? "active" : ""} to="/toasts">Toasts</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/tooltip" ? "active" : ""} to="/tooltip">Tooltip</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/typography" ? "active" : ""} to="/typography">Typography</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/video" ? "active" : ""} to="/video">Video</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(12)}
                    className={selectedItems[12] ? "subdrop" : ""}
                  >
                    <i className="fe fe-box" /> <span>Elements </span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[12] ? "block" : "none" }}>
                    <li>
                      <Link className={pathname === "/ribbon" ? "active" : ""} to="/ribbon">Ribbon</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/clipboard" ? "active" : ""} to="/clipboard">Clipboard</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/drag-drop" ? "active" : ""} to="/drag-drop">Drag &amp; Drop</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/rating" ? "active" : ""} to="/rating">Rating</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/text-editor" ? "active" : ""} to="/text-editor">Text Editor</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/counter" ? "active" : ""} to="/counter">Counter</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/scrollbar" ? "active" : ""} to="/scrollbar">Scrollbar</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/notification" ? "active" : ""} to="/notification">Notification</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/sticky-note" ? "active" : ""} to="/sticky-note">Sticky Note</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/timeline" ? "active" : ""} to="/timeline">Timeline</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/horizontal-timeline" ? "active" : ""} to="/horizontal-timeline">Horizontal Timeline</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/form-wizard" ? "active" : ""} to="/form-wizard">Form Wizard</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(13)}
                    className={selectedItems[13] ? "subdrop" : ""}
                  >
                    <i className="fe fe-bar-chart" /> <span> Charts </span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[13] ? "block" : "none" }}>
                    <li>
                      <Link className={pathname === "/apex-charts" ? "active" : ""} to="/apex-charts">Apex Charts</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/chart-js" ? "active" : ""} to="/chart-js">Chart Js</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/morris-charts" ? "active" : ""} to="/morris-charts">Morris Charts</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/float-charts" ? "active" : ""} to="/float-charts">Flot Charts</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/peity-charts" ? "active" : ""} to="/peity-charts">Peity Charts</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/c3-charts" ? "active" : ""} to="/c3-charts">C3 Charts</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(14)}
                    className={selectedItems[14] ? "subdrop" : ""}
                  >
                    <i className="fe fe-award" /> <span> Icons </span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[14] ? "block" : "none" }}>
                    <li>
                      <Link className={pathname === "/fontawesome-icons" ? "active" : ""} to="/fontawesome-icons">Fontawesome Icons</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/feather-icons" ? "active" : ""} to="/feather-icons">Feather Icons</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/ionic-icons" ? "active" : ""} to="/ionic-icons">Ionic Icons</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/material-icons" ? "active" : ""} to="/material-icons">Material Icons</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/pe7-icons" ? "active" : ""} to="/pe7-icons">Pe7 Icons</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/simpleline-icons" ? "active" : ""} to="/simpleline-icons">Simpleline Icons</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/themify-icons" ? "active" : ""} to="/themify-icons">Themify Icons</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/weather-icons" ? "active" : ""} to="/weather-icons">Weather Icons</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/typicon-iconsl" ? "active" : ""} to="/typicon-iconsl">Typicon Icons</Link>
                    </li>
                    <li>
                      <Link className={pathname === "/flag-icons" ? "active" : ""} to="/flag-icons">Flag Icons</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(15)}
                    className={selectedItems[15] ? "subdrop" : ""}
                  >
                    <i className="fe fe-sidebar" /> <span> Forms </span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[15] ? "block" : "none" }}>
                    <li>
                      <Link className={pathname === "/basic-inputs" ? "active" : ""} to="/basic-inputs">Basic Inputs </Link>
                    </li>
                    <li>
                      <Link className={pathname === "/input-groups" ? "active" : ""} to="/input-groups">Input Groups </Link>
                    </li>
                    <li>
                      <Link className={pathname === "/horizontal-form" ? "active" : ""} to="/horizontal-form">Horizontal Form </Link>
                    </li>
                    <li>
                      <Link className={pathname === "/vertical-form" ? "active" : ""} to="/vertical-form"> Vertical Form </Link>
                    </li>
                    <li>
                      <Link className={pathname === "/form-mask" ? "active" : ""} to="/form-mask">Form Mask </Link>
                    </li>
                    <li>
                      <Link className={pathname === "/form-validation" ? "active" : ""} to="/form-validation">Form Validation </Link>
                    </li>
                    <li>
                      <Link className={pathname === "/form-select2" ? "active" : ""} to="/form-select2">Form Select2 </Link>
                    </li>
                    <li>
                      <Link className={pathname === "/File-upload" ? "active" : ""} to="/File-upload">File Upload </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleItemClick(16)}
                    className={selectedItems[16] ? "subdrop" : ""}
                  >
                    <i className="fe fe-layout" /> <span> Tables </span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[16] ? "block" : "none" }}>
                    <li>
                      <Link to="/basic-tables">Basic Tables </Link>
                    </li>
                    <li>
                      <Link to="/data-tables">Data Table </Link>
                    </li>
                  </ul>
                </li>
                {/* /UI Interface */}
                {/* Settings */}
                <li className="menu-title">
                  <span>Settings</span>
                </li>
                <li>
                  <Link className={pathname === "/settings" ? "active" : ""} to="/settings">
                    <i className="fe fe-settings" /> <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link className={pathname === "/login" ? "active" : ""} to="/login">
                    <i className="fe fe-power" /> <span>Logout</span>
                  </Link>
                </li>
                {/* Extras */}
                <li className="menu-title">
                  <span>Extras</span>
                </li>
                <li>
                  <Link to="#">
                    <i className="fe fe-file-text" /> <span>Documentation</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fe fe-lock" /> <span>Change Log</span>{" "}
                    <span className="badge badge-primary ms-auto">v2.0.4</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    onClick={() => handleSubdropClick(17)}
                    className={selectedItems[17] ? "subdrop" : ""}
                  >
                    <i className="fa fa-list" /> <span>Multi Level</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: selectedItems[17] ? "block" : "none" }}>
                    <li className="submenu">
                      <Link
                        to="#"
                        onClick={() => handleSubdropClick(18)}
                        className={selectedItems[18] ? "subdrop" : ""}
                      >
                        {" "}
                        <span>Level 1</span> <span className="menu-arrow" />
                      </Link>
                      <ul
                        style={{
                          display: selectedItems[18] ? "block" : "none",
                        }}
                        className="level2"
                      >
                        <li>
                          <Link to="#">
                            <span>Level 2</span>
                          </Link>
                        </li>
                        <li className="submenu">
                          <Link
                            to="#"
                            onClick={() => handleSubdropClick(19)}
                            className={selectedItems[19] ? "subdrop" : ""}
                          >
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow" />
                          </Link>
                          <ul
                            style={{
                              display: selectedItems[19] ? "block" : "none",
                            }}
                            className="level3"
                          >
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <span>Level 2</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        <span>Level 1</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Extras */}
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};
export default Sidebar;