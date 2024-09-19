import React from 'react'
import { Logo2, WhiteLogo, qr, signature } from '../../_components/Imagepath'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const InvoiceThree = () => {
  return (
    <div>
      <div className="main-wrapper invoice-three">
  <div className="container">
    <div className="invoice-wrapper download_section">
      <div className="inv-content">
        <div className="invoice-header">
          <div className="inv-header-left">
            <div className="invoice-title tax-invoice">INVOICE</div>
            <div className="company-details">
              <span className="company-name invoice-title">Dreamguys</span>
              <div className="gst-details">
                GST IN : <span>22AABCU9603R1ZX</span>
              </div>
              <div className="gst-details">
                Address :{" "}
                <span>
                  5 Hodges Mews, High Wycombe HP12 3JL, United Kingdom
                </span>
              </div>
              <div className="gst-details mb-0">
                Mobile : <span>+ 91 98765 43210</span>
              </div>
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
          </div>
        </div>
        <div className="invoice-address">
          <div className="invoice-address-details">
            <div className="invoice-to">
              <span>Billing Address:</span>
              <div className="inv-to-address">
                Walter Roberson
                <br />
                299 Star Trek Drive, Panama City, <br />
                Florida, 32405, USA.
                <br />
                walter@example.com <br />
                +45 5421 4523
              </div>
            </div>
            <div className="invoice-to">
              <span>Shipping Address:</span>
              <div className="inv-to-address">
                Lowell H. Dominguez
                <br /> 84 Spilman Street, London
                <br />
                United King
                <br />
                domlowell@example.com
                <br />
                +45 5421 2154
              </div>
            </div>
          </div>
          <div className="invoice-details-content">
            <div className="invoice-status-details">
              <div>
                <span>Invoice No:</span>
                <span>#10077005</span>
              </div>
            </div>
            <div className="invoice-status-details">
              <div>
                <span>Invoice Date:</span>
                <span>07/12/2023</span>
              </div>
            </div>
            <div className="invoice-status-details">
              <div>
                <span>Payment Status:</span>
                <span>NOT PAID</span>
              </div>
            </div>
            <div className="invoice-status-details">
              <div>
                <span>Due Date :</span>
                <span>07/31/2023</span>
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
          <div className="table-footer-left notes"></div>
          <div className="text-end table-footer-right">
            <table>
              <tbody>
                <tr>
                  <td className="table-footer-right-title">Taxable Amount</td>
                  <td>$18,218.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="invoice-table-footer">
          <div className="table-footer-left notes">
            <span />
          </div>
          <div className="text-end table-footer-right">
            <table>
              <tbody>
                <tr>
                  <td className="table-footer-right-title">IGST 18.0%</td>
                  <td>$3,279.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="invoice-table-footer">
          <div className="table-footer-left notes">
            <span />
          </div>
          <div className="text-end table-footer-right">
            <table>
              <tbody>
                <tr>
                  <td className="table-footer-right-title">
                    Extra Discount (Promo - 5%)
                  </td>
                  <td>-$235.25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="invoice-table-footer">
          <div className="table-footer-left notes">
            <span />
          </div>
          <div className="text-end table-footer-right">
            <table>
              <tbody>
                <tr>
                  <td className="table-footer-right-title">Round Off</td>
                  <td>-$.65</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="invoice-table-footer mt-4">
          <div className="table-footer-left">
            <span className="total-item">Total amount (in words):</span>
            <span>Five thousand three hundred and sixteen dollars only.</span>
          </div>
          <div className="text-end table-footer-right">
            <table>
              <tbody>
                <tr>
                  <td className="invoice-title">Amount Payable</td>
                  <td className="invoice-title">$5,316.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bank-details">
          <div className="account-info">
            <div>
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
                BRANCH : <span>Florida</span>
              </div>
            </div>
            <div className="qr-code">
              <img src={qr} alt="qr" />
              <p className="scan-details">Scan to View Receipt</p>
            </div>
          </div>
          <div className="company-sign">
            <span>For Dreamguys</span>
            <img src={signature} alt="signature-img" />
          </div>
        </div>
        <div className="invoice-notes">
          <p>
            {" "}
            <strong>
              NOTES: All accounts are to be paid within 7 days from receipt of
              invoice. To be paid by cheque or credit card or direct payment
              online. If account is not paid within 7 days the credits details
              supplied as confirmation of work undertaken will be charged the
              agreed quoted fee noted above.
            </strong>{" "}
          </p>
        </div>
        <div className="thanks-msg text-start">Thanks for your Business</div>
      </div>
    </div>
    <div className="file-link">
      <button className="download_btn download-link">
      <FeatherIcon icon="download-cloud" style={{ marginRight: '5px' }}/><span>Download</span>
      </button>
      <a href="javascript:window.print()" className="print-link">
      <FeatherIcon icon="printer" style={{ marginRight: '5px' }}/> <span className="">Print</span>
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default InvoiceThree
