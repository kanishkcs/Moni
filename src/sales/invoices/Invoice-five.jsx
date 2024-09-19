import React from 'react'
import { Logo2, WhiteLogo, qr, signature } from '../../_components/Imagepath'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const InvoiceFive = () => {
  return (
    <div>
      <div className="main-wrapper">
  <div className="container">
    <div className="invoice-wrapper download_section invoice-five">
      <div className="inv-content  ">
        <div className="invoice-header">
          <div className="inv-header-left">
            <a href="#">
              <img
                className="logo-lightmode"
                src={Logo2}
                alt="Logo"
              />
              <img
                className="logo-darkmode"
                src={ WhiteLogo}
                alt="Logo"
              />
            </a>
          </div>
          <div className="inv-header-right">
            <h2>INVOICE</h2>
          </div>
        </div>
        <div className="invoice-five-details">
          <div className="gradient-block" />
          <div className="invoice-date">
            <div className="invoice-date-details">
              Invoice No :<span>#005</span>{" "}
            </div>
            <div className="invoice-date-details">
              Invoice Date :<span> 07-10-2023</span>
            </div>
          </div>
        </div>
        <div className="two-invoice-details">
          <div className="company-booking-address company-five-address">
            <div className="company-add">
              <span>Customer Details :</span>
              <h4>John Williams </h4>
              <h5>GSTIN : ACWR000054321</h5>
              <div className="paid-status-add">
                <span>Payment Status</span>
                <h6>PAID</h6>
              </div>
            </div>
            <div className="invoice-date">
              <h4>Dreamguys</h4>
              <p>
                <span>Address:</span> 15 Hodges Mews,
                <br />
                High Wycomb HP123JL,United Kingdom
              </p>
              <p>
                <span>Mobile :</span> +91 98765 43210
              </p>
            </div>
          </div>
          <div className="invoice-address-details invoice-five-group">
            <div className="invoice-to">
              <span>Billing Address :</span>
              <div className="inv-to-address">
                Walter Roberson
                <br />
                299 Star Trek Drive, Panama City, <br />
                Florida, 32405, USA.
                <br />
              </div>
            </div>
            <div className="invoice-to">
              <span>Shipping Address :</span>
              <div className="inv-to-address">
                Walter Roberson
                <br />
                299 Star Trek Drive, Panama City, <br />
                Florida, 32405, USA.
                <br />
              </div>
            </div>
          </div>
          <div className="invoice-table-details">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr className="ecommercetable">
                    <th className="table_width_1">#</th>
                    <th className="table_width_1">Item</th>
                    <th className="table_width_1 ">Quantity</th>
                    <th className="">Unit Price</th>
                    <th className="">Discount</th>
                    <th className="table_width_4 text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td className="table-description">
                      {" "}
                      Accounting Software Maintainence
                    </td>
                    <td className="">3</td>
                    <td className="">
                      $500<h6>after disc. $450.00</h6>
                    </td>
                    <td className="">10%</td>
                    <td className="text-end">$1350</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="table-description ">Man Power Support</td>
                    <td className="">1</td>
                    <td className="">$100 </td>
                    <td className="">0%</td>
                    <td className="text-end">$100</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td className="table-description ">Transportation Fee</td>
                    <td className="">2</td>
                    <td className="">
                      $200<h6>after disc. $450.00</h6>
                    </td>
                    <td className="">5%</td>
                    <td className="text-end">$380</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td className="table-description ">
                      Spars Replacement Charges
                    </td>
                    <td className="">5</td>
                    <td className="">$500 </td>
                    <td className="">0%</td>
                    <td className="text-end">$2500</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td className="table-description ">Materials Handling</td>
                    <td className="">1</td>
                    <td className="">
                      $500<h6>after disc. $450.00</h6>
                    </td>
                    <td className="">25%</td>
                    <td className="text-end">$375</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="invoice-table-footer border border-0 py-0">
            <div className="table-footer-left notes"></div>
            <div className="text-center table-footer-right ">
              <table>
                <tbody>
                  <tr className="table-data">
                    <td className="tax">Taxable Amount</td>
                    <td className="payment">$4705.00</td>
                  </tr>
                  <tr className="table-data">
                    <td className="tax">IGST 18.0%</td>
                    <td className="payment">$846.90</td>
                  </tr>
                  <tr className="table-data">
                    <td className="tax">Extra Discount (Promo - 5%)</td>
                    <td className="payment">-$235.25</td>
                  </tr>
                  <tr className="table-data">
                    <td className="tax">Round Off</td>
                    <td className="payment">-$.65</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="invoice-table-footer totalamount-footer pe-0">
            <div className="table-footer-left">
              <table className="totalamt-table total-amt-word">
                <tbody>
                  <tr>
                    <td>
                      Total Amount (in words):{" "}
                      <span>
                        Five thousand three hundred and sixteen dollars only.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-footer-right">
              <table className="totalamt-table">
                <tbody>
                  <tr>
                    <td>Amount Payable</td>
                    <td>$5316.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bank-details">
          <div className="bank-qr-detail">
            <div className="account-info">
              <span className="bank-title">Bank Details</span>
              <div className="account-details">
                Bank : <span>YES Bank</span>
              </div>
              <div className="account-details">
                Account # :<span> 6677889944551 </span>
              </div>
              <div className="account-details">
                IFSC : <span>YESBBIN4567</span>
              </div>
              <div className="account-details">
                BRANCH : <span>RS Puram</span>
              </div>
            </div>
            <div className="qr-code ms-3">
              <img src={qr} alt="qr" />
            </div>
          </div>
          <div className="company-sign">
            <span>For Dreamguys</span>
            <img src={signature} alt="signature-img" />
          </div>
        </div>
      </div>
      <div className="terms-condition">
        <span>Terms and Conditions:</span>
        <ol>
          <li>1. Goods Once sold cannot be taken back or exchanged</li>
          <li>
            2. We are not the manufactures, company will stand for warrenty as
            per their terms and conditions.
          </li>
        </ol>
      </div>
      <div className="thanks-msg">Thanks for your Business</div>
    </div>
    <div className="file-link">
      <a className="download_btn download-link">
      <FeatherIcon icon="download-cloud"  style={{ marginRight: '5px' }}/> <span>Download</span>
      </a>
      <a href="javascript:window.print()" className="print-link">
      <FeatherIcon icon="printer" style={{ marginRight: '5px' }}/> <span className="">Print</span>
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default InvoiceFive
