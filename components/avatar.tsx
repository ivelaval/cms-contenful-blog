import ContentfulImage from './contentful-image'
interface IAvatar {
    name: string;
    picture: any;
}

export default function Avatar({ name, picture }: IAvatar) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <ContentfulImage
          src={picture.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
