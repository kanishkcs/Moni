import React from "react";
import { InvoiceLogo1, WhiteLogo, signature } from "../../_components/Imagepath";

const InvoiceSubscription = () => {
  return (
    <>
  <div className="main-wrapper">
  <div className="container">
    <div className="invoice-wrapper download_section subscription-invoice">
      <div className="inv-content">
        <div className="invoice-header">
          <div className="inv-header-right text-start">
            <a href="#">
              <img
                className="logo-lightmode"
                src={InvoiceLogo1}
                alt="Logo"
              />
              <img
                className="logo-darkmode"
                src={WhiteLogo}
                alt="Logo"
              />
            </a>
            <span>Original For Recipient</span>
          </div>
          <div className="inv-header-left">
            <h4>Subscription INVOICE</h4>
            <div className="invoice-num-date">
              <ul>
                <li>
                  Date : <span>05/01/2024</span>
                </li>
                <li>
                  Invoice No : <span>INV00001</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="patient-infos">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-7">
                  <div className="sub-invoive-detail">
                    <h5>Invoice To :</h5>
                    <p>
                      Hellman-Ullrich <br />
                      299 Star Trek Drive, Panama City,
                      <br />
                      Florida, 32405, USA.
                      <br />
                      info@gmail.com
                      <br />
                      +45 5421 4523
                    </p>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="sub-invoive-detail">
                    <h5>Pay To :</h5>
                    <p>
                      Kanakku
                      <br />
                      84 Spilman Street, London
                      <br />
                      United King
                      <br />
                      domlowell@gmail.com
                      <br />
                      +45 5421 2154
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sub-invoive-detail detail-right">
                <h5>Kanakku</h5>
                <ul>
                  <li>
                    GST IN :<br />
                    22AABCU9603R1ZX
                  </li>
                  <li>
                    Address :<br />
                    15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.
                  </li>
                  <li>
                    Mobile :<br />
                    +91 98765 43210
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="invoice-table p-0">
          <div className="table-responsive">
            <table>
              <thead>
                <tr className="ecommercetable">
                  <th className="table_width_1">#</th>
                  <th className="table_width_2">Item</th>
                  <th className="text-start">Tax Value</th>
                  <th className="text-end">Qty</th>
                  <th className="text-end">Price</th>
                  <th className="text-end">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="text-start">Basic Plan</td>
                  <td className="text-start">Monthly Package</td>
                  <td className="text-end unit-price-data">1</td>
                  <td className="text-end">$350</td>
                  <td className="text-end">$350</td>
                </tr>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td className="text-end">
                    IGST 18.0% <br />
                    <span className="mt-2 d-inline-flex">Sub Total</span>
                  </td>
                  <td className="text-end">
                    $165.00 <br />
                    <span className="mt-2 d-inline-flex">$455.00</span>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td className="text-end">
                    <h4>Total</h4>
                  </td>
                  <td className="text-end">
                    <h4>$455.00</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="total-amountdetails ps-0 pe-0">
          <p>
            Total amount ( in words):{" "}
            <span> USD Four Hundred and Fifty Five</span>
          </p>
        </div>
        <div className="bank-details p-0">
          <div className="row w-100 align-items-center">
            <div className="col md-6">
              <div className="payment-info">
                <div className="qr">
                  <h5>Bank Details</h5>
                </div>
                <div className="pay-details">
                  <div className="mb-2">
                    <span className="payment-title">Bank : YES Bank</span>
                  </div>
                  <div className="mb-2">
                    <span>Account # : 6677889944551</span>
                  </div>
                  <div className="mb-2">
                    <span>IFSC : YESBBIN4567</span>
                  </div>
                  <span>BRANCH : UK</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="company-sign">
                <span>For Kanakku</span>
                <img src={signature} alt="signature-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="terms-condition p-0">
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
    </div>
    <div className="file-link justify-content-center subscription-invoice-foot">
      <button className="download_btn download-link">
        <i className="feather-download-cloud me-1" /> <span>Download</span>
      </button>
      <a href="javascript:window.print()" className="print-link">
        <i className="feather-printer" /> <span className="">Print</span>
      </a>
    </div>
  </div>
</div>

    </>
  );
};
export default InvoiceSubscription;
