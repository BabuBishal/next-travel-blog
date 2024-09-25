import Link from 'next/link'
import clsx from "clsx"


const Route = ({route, label, onClick, isActive}) => {
  return (
   <Link 
   href={route}
   onClick={onClick}
   className={clsx(isActive && "text-primary ")}>
    {label}
   </Link>
  )
}

export default Route