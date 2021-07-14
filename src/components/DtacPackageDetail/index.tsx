import React, { FC, memo } from 'react';

import FooterLayout from '../../container/flexi/layout/footer';
import CategoryLayout from '../../container/layout/index';
import Footer from '../../container/package-detail/Footer';
import PackageDetail from '../../modular/PackageDetail';

interface DtacPackageDetail {
  pageName: string
}
const DtacPackageDetail: FC<DtacPackageDetail> = (props) => {
  return (
    // <CategoryLayout titleName={pageName}>
    <PackageDetail />
    // <FooterLayout>
    //   <Footer />
    // </FooterLayout>
    // </CategoryLayout>
  )
}

export default memo(DtacPackageDetail)
