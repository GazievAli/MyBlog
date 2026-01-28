'use client'
import React, { useEffect, useRef } from 'react'

export default function MatrixSnakes() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        const cellSize = 20
        let cols: number, rows: number

        let snakes: any[] = []
        let foods: any[] = []
        let rainDrops: any[] = []
        let isMatrixMode = false
        let frameCounter = 0

        const SNAKE_TIME = 60 * 60;
        const MATRIX_TIME = 300;

        const snakeColors = ['#f43f5e', '#fbbf24', '#38bdf8', '#a855f7', '#4ade80']

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            cols = Math.ceil(canvas.width / cellSize)
            rows = Math.ceil(canvas.height / cellSize)
            resetSimulation()
        }

        const createSnake = () => ({
            body: [{ x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) }],
            dir: { x: 1, y: 0 },
            color: snakeColors[Math.floor(Math.random() * snakeColors.length)],
            length: 8,
            alive: true
        })

        const resetSimulation = () => {
            isMatrixMode = false
            frameCounter = 0
            snakes = Array.from({ length: 12 }, createSnake)
            foods = Array.from({ length: 20 }, () => ({
                x: Math.floor(Math.random() * cols),
                y: Math.floor(Math.random() * rows)
            }))
            rainDrops = []
        }

        const startMatrixRain = () => {
            isMatrixMode = true
            rainDrops = Array.from({ length: cols }, () => ({
                y: -Math.random() * rows,
                speed: 0.2 + Math.random() * 0.5,
                length: 5 + Math.floor(Math.random() * 15)
            }))
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(13, 17, 23, 0.2)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            frameCounter++

            if (!isMatrixMode) {
                if (frameCounter % 10 === 0) {
                    snakes.forEach((snake, idx) => {
                        if (!snake.alive) return
                        let head = snake.body[0]

                        let target = foods[0]
                        let minDist = Infinity
                        foods.forEach(f => {
                            let d = Math.hypot(f.x - head.x, f.y - head.y)
                            if (d < minDist) { minDist = d; target = f }
                        })

                        if (target) {
                            if (target.x !== head.x) snake.dir = { x: target.x > head.x ? 1 : -1, y: 0 }
                            else if (target.y !== head.y) snake.dir = { x: 0, y: target.y > head.y ? 1 : -1 }
                        }

                        let newHead = { x: (head.x + snake.dir.x + cols) % cols, y: (head.y + snake.dir.y + rows) % rows }

                        snakes.forEach((other, oIdx) => {
                            if (idx === oIdx || !other.alive) return
                            if (other.body.some((seg: any) => seg.x === newHead.x && seg.y === newHead.y)) {
                                snake.alive = false
                                other.alive = false
                                setTimeout(() => { snakes[idx] = createSnake(); snakes[oIdx] = createSnake(); }, 2000)
                            }
                        })

                        if (snake.alive) {
                            snake.body.unshift(newHead)
                            let ate = foods.findIndex(f => f.x === newHead.x && f.y === newHead.y)
                            if (ate !== -1) {
                                foods[ate] = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) }
                            } else {
                                snake.body.pop()
                            }
                        }
                    })
                }

                foods.forEach(f => {
                    ctx.fillStyle = '#ffffff'; ctx.shadowBlur = 10; ctx.shadowColor = '#fff'
                    ctx.fillRect(f.x * cellSize + 8, f.y * cellSize + 8, 4, 4)
                    ctx.shadowBlur = 0
                })

                snakes.forEach(snake => {
                    if (!snake.alive) return
                    snake.body.forEach((seg: any, i: number) => {
                        ctx.fillStyle = i === 0 ? '#fff' : snake.color
                        ctx.fillRect(seg.x * cellSize + 1, seg.y * cellSize + 1, cellSize - 2, cellSize - 2)
                    })
                })

                if (frameCounter > SNAKE_TIME) startMatrixRain()

            } else {
                rainDrops.forEach((drop, x) => {
                    for (let i = 0; i < drop.length; i++) {
                        const yPos = Math.floor(drop.y - i)
                        if (yPos >= 0 && yPos < rows) {
                            const opacity = 1 - (i / drop.length)
                            ctx.fillStyle = i === 0 ? `rgba(255, 255, 255, ${opacity})` : `rgba(244, 63, 94, ${opacity})`
                            ctx.fillRect(x * cellSize + 2, yPos * cellSize + 2, cellSize - 4, cellSize - 4)
                        }
                    }

                    drop.y += drop.speed
                    if (drop.y - drop.length > rows) {
                        drop.y = 0
                        drop.speed = 0.2 + Math.random() * 0.5
                    }
                })

                if (frameCounter > SNAKE_TIME + MATRIX_TIME) resetSimulation()
            }

            animationFrameId = requestAnimationFrame(draw)
        }

        resize()
        draw()
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-50"
        />
    )
}