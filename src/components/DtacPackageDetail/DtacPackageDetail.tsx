import React, { FC, memo, ReactNode } from 'react';

import FooterLayout from '../../container/flexi/layout/footer';
import CategoryLayout from '../../container/layout/index';
import Footer from '../../container/package-detail/Footer';
import PackageDetail from '../../modular/PackageDetail';

const PackageDetailSms: FC<{ children: ReactNode; pageName: string }> = ({
  children,
  pageName,
}) => {
  return (
    <CategoryLayout titleName={pageName}>
      <PackageDetail />
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </CategoryLayout>
  )
}

export default memo(PackageDetailSms)
