import Alert from 'components/alert'
import Footer from 'components/footer'
import Meta from 'components/meta'
import { ReactNode } from 'react';

interface ILayout {
    preview?: boolean;
    children?: ReactNode;
}

export default function Layout({ preview, children }: ILayout) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
