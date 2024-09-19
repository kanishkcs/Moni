import React from 'react'
import { Logo2, WhiteLogo, qr } from '../../_components/Imagepath'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const InvoiceTwo = () => {
  return (
    <>
      <div className="main-wrapper invoice-two">
  <div className="container">
    <div className="invoice-wrapper download_section">
      <div className="inv-content invoice-two">
        <div className="invoice-header">
          <div className="inv-header-left">
            <h2>Invoice</h2>
          </div>
          <div className="inv-header-right">
            <a href="#">
              <img
                className="logo-lightmode"
                src={Logo2 }
                alt="Logo"
              />
              <img
                className="logo-darkmode"
                src={WhiteLogo}
                alt="Logo"
              />
            </a>
          </div>
        </div>
        <div className="two-invoice-details">
          <div className="company-booking-address">
            <div className="company-add">
              Dreamguys Technologies PVT Ltd
              <span>
                Address: 15 Hodges Mews,High Wycomb HP123JL,United Kingdom
              </span>
            </div>
            <div className="invoice-date">
              <h6>
                Invoice No :<span>#005</span>{" "}
              </h6>
              <h6>
                Invoice Date :<span> 07-10-2023</span>
              </h6>
            </div>
          </div>
          <h5>Customer Info</h5>
          <div className="invoice-address-details">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="invoice-to">
                    <span>Invoice To :</span>
                    <div className="inv-to-address">
                      Walter Roberson
                      <br />
                      299 Star Trek Drive, Panama City, <br />
                      Florida, 32405,
                      <br />
                      USA.
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="invoice-to">
                    <span>Pay To :</span>
                    <div className="inv-to-address">
                      Walter Roberson
                      <br />
                      299 Star Trek Drive, Panama City, <br />
                      Florida, 32405, <br />
                      USA.
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="invoice-to-payment">
                    <span>Due Date</span>
                    <div className="inv-to-address">
                      <h6>07/23/2023</h6>
                      <br />
                      <span>Payment Status</span>
                      <br />
                      NOT PAID
                      <br />
                    </div>
                  </div>
                </div>
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
                    <th className="text-start">Unit Price</th>
                    <th className="text-start">Discount</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td className="table-description">
                      {" "}
                      Accounting Software Maintainence
                    </td>
                    <td className="text-start">3</td>
                    <td className="text-start">
                      $500<h6>after disc. $450.00</h6>
                    </td>
                    <td className="text-start">10%</td>
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
          <div className="invoice-table-footer">
            <div className="table-footer-left notes"></div>
            <div className="text-end table-footer-right">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span>Taxable Amount</span>
                    </td>
                    <td>$4705.00</td>
                  </tr>
                  <tr>
                    <td>
                      <span>IGST 18.0%</span>
                    </td>
                    <td>$846.90</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Extra Discount (Promo - 5%)</span>
                    </td>
                    <td>$235.25</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Round Off</span>
                    </td>
                    <td>-$.65</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="invoice-table-footer totalamount-footer">
            <div className="table-footer-left"></div>
            <div className="table-footer-right">
              <table className="totalamt-table">
                <tbody>
                  <tr>
                    <td>Total Amount</td>
                    <td>$5316.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bank-details">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="payment-info">
                  <div className="qr-code">
                    <img src={qr} alt="qr" />
                    <h6 className="scan-details">Scan to View Receipt</h6>
                  </div>
                  <div className="debitcard">
                    <span className="payment-title">Payment Info:</span>
                    <div className="debit-card">
                      <span>Debit Card :</span> 465 *************645
                    </div>
                    <div className="mb-0">
                      <span>Amount :</span> $1,815
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="terms-condition">
                  <div className="amount">
                    Total amount (in word):Five thousand three hundred and
                    sixteen dollars only.
                  </div>
                  <span>Terms &amp; Conditions:</span>
                  <ol>
                    <li>
                      This is a GST based invoice bill,Which is applicable for
                      TDS Deduction
                    </li>
                    <li>
                      We are not the manufactures, company will stand for
                      warranty as per their terms and conditions.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="thanks-msg text-center">Thanks for your Business</div>
      </div>
    </div>
    <div className="file-link">
      <button className="download_btn download-link">
      <FeatherIcon icon="download-cloud" style={{ marginRight: '5px' }}/> <span>Download</span>
      </button>
      <a href="javascript:window.print()" className="print-link">
      <FeatherIcon icon="printer" style={{ marginRight: '5px' }}/> <span className="">Print</span>
      </a>
    </div>
  </div>
</div>

    </>
  )
}

export default InvoiceTwo
