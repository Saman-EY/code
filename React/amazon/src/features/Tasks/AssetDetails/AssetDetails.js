import React from 'react';
import PropTypes from 'prop-types';

import Task from '../../../components/Task/Task';
import routes from '../../../routes';

import Styles from './AssetDetails.module.css';
import { timeConverter } from '../../../utils/convertDate/ConvertDate';
const Strings = {
  TITLE: '1) Details einer Anlage',
  TASK: '. داده های موجودرا بایک فرم مناسب نمایش دهید. داده ها مربوط به دوره های زمانی سهام آمازون واطلاعات پایه ی آن ازشروع   سال 2022 می باشد. پس از ترک صفحه تمرین دیتاها بایستی از استور پاک شوند   '
};

const AssetDetails = ({ data }) => {
  console.log(data);
  return (
    <Task
      route={routes.Tasks.assetDetails}
      task={Strings.TASK}
      title={Strings.TITLE}
    >
      <div className={Styles.root}>
        <h1>{data?.data?.name}</h1>
        <div className={Styles.line}></div>
        <span className={Styles.boldText}>
          ISIN: <span>{data?.data?.isin}</span>
        </span>
        <span className={Styles.boldText}>
          Domicile: <span>{data?.data?.domicile}</span>
        </span>
        <span className={Styles.boldText}>
          Branche : <span>{data?.data?.industry}</span>
        </span>
        <span className={Styles.boldText}>
          Sektor : <span>{data?.data?.assetSector}</span>
        </span>
        <span className={Styles.boldText}>
          PriceUnit : <span>{data?.data?.priceUnit}</span>
        </span>
        <span className={Styles.boldText}>
          AssetType : <span>{data?.data?.assetType}</span>
        </span>
        <span className={Styles.boldText}>
          RiskCurrency : <span>{data?.data?.riskCurrency}</span>
        </span>

        <table className={Styles.table}>
          <thead>
            <tr>
              <th className={Styles.styleTdTh}>#</th>
              <th className={Styles.styleTdTh} scope="col-3">
                Date
              </th>
              <th className={Styles.styleTdTh} scope="col-6">
                Series
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.data?.series.map((item, index) => (
              <tr key={index}>
                <td className={Styles.styleTdTh}>{index + 1}</td>
                <td className={Styles.styleTdTh}>{timeConverter(item[0])}</td>
                <td className={Styles.styleTdTh}>
                  {item[0]}, {item[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Task>
  );
};

AssetDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default AssetDetails;
