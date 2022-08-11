import Image from 'next/image'

interface IRichTextAsset {
  id: string;
  assets: any;
}

export default function RichTextAsset({ id, assets }: IRichTextAsset) {
  const asset = assets?.find((asset: any) => asset.sys.id === id)

  if (asset?.url) {
    return <Image src={asset.url} layout="fill" alt={asset.description} />
  }

  return null
}
