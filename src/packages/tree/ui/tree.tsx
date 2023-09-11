import { type FC, useEffect, useRef } from "react"

interface FamilyMember {
  id: number
  name: string
  x: number // Тип для координаты x
  y: number // Тип для координаты y
  // Другие поля для членов семьи
}

interface LinkData {
  source: FamilyMember
  target: FamilyMember
  // Другие поля для связей
}

interface FamilyTreeProps {
  data: FamilyMember[]
  linksData: LinkData[]
}

const Tree: FC<FamilyTreeProps> = (props) => {
    const { data, linksData, } = props
    const svgRef = useRef<SVGSVGElement | null>(null)

    // useEffect(() => {
    //     const svg = d3.select(svgRef.current)

    //     const nodes = svg.selectAll<SVGCircleElement, FamilyMember>("circle").data(data)
    //     nodes
    //         .enter()
    //         .append<SVGCircleElement>("circle")
    //         .attr("r", 20)
    //         // @ts-expect-error
    //         .attr("cx", (d) => d.x)
    //         // @ts-expect-error
    //         .attr("cy", (d) => d.y)

    //     const links = svg.selectAll<SVGLineElement, LinkData>("line").data(linksData)
    //     links
    //         .enter()
    //         .append<SVGLineElement>("line")
    //         .attr("x1", (d) => d.source.x)
    //         .attr("y1", (d) => d.source.y)
    //         .attr("x2", (d) => d.target.x)
    //         .attr("y2", (d) => d.target.y)

    // }, [data, linksData])

    return (
        <div className="family-tree">
            <svg ref={svgRef}></svg>
        </div>
    )
}

export { Tree }
