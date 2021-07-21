/*
 * @Author: web_XL
 * @Date: 2021-07-08 13:59:48
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-21 14:11:31
 * @Description:
 */
import React, { FC, ReactNode } from 'react'
import { PageHeader } from 'antd'
// FC === function component
// type ReactNode = boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
// type FC<P = {}> = FunctionComponent<P>
interface Props {// 代表着props 的数据类型
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {

  return (
    <div>
      <PageHeader
        className="jumbotron"
        title="PageHeader"
        subTitle="PageHeader"
      />
      <div style={{ width: "85%", margin: "0 auto" }}>{children}</div>
    </div>
  )
}

export default Layout
