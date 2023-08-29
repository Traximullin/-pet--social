import { useRef, type FC, useEffect } from "react"

const Tree: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current
        const context = canvas.getContext("2d")

        if (!context) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        context.fillStyle = "black"
        context.fillRect(0, 0, canvas.width, canvas.height)
    }, [])

    return <canvas ref={canvasRef} />
}

export { Tree }
