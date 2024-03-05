interface InformationRowProps {
  img: string,
  alt: string,
  children: React.ReactNode
}

export default function InformationRow({ img, alt, children }: InformationRowProps) {
  return (
    <div className="flex flex-row items-start gap-2">
      <img src={img} alt={alt} className="mt-px lg:mt-0 size-3.5 lg:size-auto" />
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
}