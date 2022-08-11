import { format } from 'date-fns'

interface IDateComponent {
  dateString: string;
}

export default function DateComponent({ dateString }: IDateComponent) {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  )
}
