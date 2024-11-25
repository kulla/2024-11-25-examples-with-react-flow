'use client'

import ReactFlow, { Background, Controls, MiniMap } from 'reactflow'
import 'reactflow/dist/style.css'
import { Heading } from '@radix-ui/themes'

export default function Home() {
  return (
    <main>
      <Heading>React Flow Example</Heading>
      <SimpleFlow />
    </main>
  )
}

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 0 },
  },
  { id: '2', data: { label: 'Default Node' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Output Node' }, position: { x: 400, y: 100 } },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
]

const SimpleFlow = () => (
  <div style={{ height: 500 }}>
    <ReactFlow nodes={initialNodes} edges={initialEdges}>
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  </div>
)
