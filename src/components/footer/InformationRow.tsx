interface InformationRowProps {
  img: string,
  alt: string,
  children: React.ReactNode
}

export default function InformationRow({ img, alt, children }: InformationRowProps) {
  return (
    <div className="flex flex-row gap-2 lg:gap-1.5 items-start">
      <img src={img} alt={alt} className="mt-px lg:mt-[3px] size-3.5 lg:size-auto" />
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
}