import React from 'react'
import { Link } from "react-router-dom";
import { Logo2, Paid, WhiteLogo, qr } from '../../_components/Imagepath';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const InvoiceOnea = () => {
  return (
    <>
      <div className="main-wrapper invoice-one">
  <div className="container">
    <div className="invoice-wrapper download_section">
      <div className="inv-content">
        <span className="line" />
        <div className="invoice-header">
          <div className="inv-header-left">
            <h4>Invoice</h4>
            <div className="company-details">
              <div className="gst-details">
                <h6>Dreamguys Technologies Pvt Ltd</h6>
                <span>
                  Address:15 Hodges Mews,
                  <br /> High Wycombe HP12 3JL, United Kingdom.
                </span>
              </div>
              <div className="address-bg" />
            </div>
          </div>
          <div className="inv-header-right">
            <a href="#">
              <img
                className="logo-lightmode"
                src={Logo2}
                alt="Logo"
              />
              <img
                className="logo-darkmode"
                src={WhiteLogo}
                alt="Logo"
              />
            </a>
            <h6>
              Invoice No : <span> #005</span>
            </h6>
            <h6>
              Invoice Date :<span> 07-10-2023</span>
            </h6>
            <p>
              {" "}
              <span>Due Date : 07-12-2023</span>
            </p>
          </div>
        </div>
        <span className="line" />
        <h5>Customer Information</h5>
        <div className="patient-infos">
          <div className="row">
            <div className="col-sm-4">
              <div className=" patient-detailed">
                <div className="bill-add">Customer Details :</div>
                <div className="customer-name">
                  John Williams
                  <p>
                    <span>GSTIN : ACWR000054321</span>{" "}
                  </p>
                </div>
                <div className="payment-status">
                  Payment Status{" "}
                  <p>
                    <span> PAID </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className=" patient-detailed">
                <div className="bill-add">Billing Address :</div>
                <div className="add-details">
                  Walter Roberson <br /> 299 Star Trek Drive, Panama City,
                  <br /> Florida, 32405,
                  <br /> USA
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className=" patient-detailed">
                <div className="bill-add">Shipping Address :</div>
                <div className="add-details">
                  Walter Roberson <br /> 299 Star Trek Drive, Panama City,
                  <br /> Florida, 32405,
                  <br /> USA
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="invoice-table">
          <div className="table-responsive">
            <table>
              <thead>
                <tr className="ecommercetable">
                  <th className="table_width_1">#</th>
                  <th className="table_width_2">Item</th>
                  <th className="text-start">Quantity</th>
                  <th className="text-start">Unit Price</th>
                  <th className="text-start">Discount</th>
                  <th className="text-end">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="text-start">
                    Accounting Software Maintainence
                  </td>
                  <td className="text-start">3</td>
                  <td className="text-start unit-price-data">
                    $500 <span>after disc. $450.00</span>
                  </td>
                  <td className="text-start">10%</td>
                  <td className="text-end">$1350</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="text-start">Man Power Support</td>
                  <td className="text-start">1</td>
                  <td className="text-start unit-price-data">$100</td>
                  <td className="text-start">0%</td>
                  <td className="text-end">$100</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="text-start">Transportation Fee</td>
                  <td className="text-start">2</td>
                  <td className="text-start unit-price-data">
                    $200 <span>after disc. $190.00</span>
                  </td>
                  <td className="text-start">5%</td>
                  <td className="text-end">$380</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td className="text-start">Spars Replacement Charges</td>
                  <td className="text-start">5</td>
                  <td className="text-start unit-price-data">$500</td>
                  <td className="text-start">2%</td>
                  <td className="text-end">$2500</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td className="text-start">Materials Handling</td>
                  <td className="text-start">2</td>
                  <td className="text-start unit-price-data">
                    $200 <span>after disc. $190.00</span>
                  </td>
                  <td className="text-start">5%</td>
                  <td className="text-end">$380</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="invoice-table-footer">
          <div className="table-footer-left notes">
            <div className="logo3">
              <img src={Paid} />
            </div>
          </div>
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
        <div className="total-amountdetails">
          <p>
            Total amount ( in words):{" "}
            <span> Five thousand three hundred and sixteen dollars only.</span>
          </p>
        </div>
        <div className="bank-details">
          <div className="row">
            <div className="col md-6">
              <div className="payment-info">
                <div className="qr">
                  <img src={qr} alt="qr" />
                  <h6 className="scan-details">Scan to View Receipt</h6>
                </div>
                <div className="pay-details">
                  <span className="payment-title">Payment Info:</span>
                  <div>
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
                <span>Terms &amp; Conditions:</span>
                <ol>
                  <li> Goods Once sold cannot be taken back or exchanged</li>
                  <li>
                    {" "}
                    We are not the manufactures, company will stand for warrenty
                    as per their terms and conditions.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="thanks-msg text-center">Thanks for your Business</div>
      </div>
    </div>
    <div className="file-link">
      <button className="download_btn download-link">
      <FeatherIcon icon="download-cloud" style={{ marginRight: '5px' }}/><span>Download</span>
      </button>
      <Link to="javascript:window.print()" className="print-link">
      <FeatherIcon icon="printer" style={{ marginRight: '5px' }}/> <span className="">Print</span>
      </Link>
    </div>
  </div>
</div>

    </>
  )
}

export default InvoiceOnea

