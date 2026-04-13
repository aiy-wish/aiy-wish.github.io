interface Props {
  index: string
  label: string
}

export default function SectionLabel({ index, label }: Props) {
  return (
    <div className="sl">
      <span className="sln">{index}</span>
      <span className="slt">{label}</span>
      <div className="slhr" />
    </div>
  )
}
