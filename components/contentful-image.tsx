import Image from 'next/image'

interface IContentfulLoader {
  src: any;
  width: number;
  quality: number;
}

const contentfulLoader = ({ src, width, quality }: IContentfulLoader) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage = (props: any) => {
  return <Image loader={contentfulLoader} alt={'Image'} {...props} />
}

export default ContentfulImage
