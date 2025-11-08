 "use client"

import { StackControls } from "@/components/visualizer/stack/stack-controls"
import { StackDisplay } from "@/components/visualizer/stack/stack-display"
import { StackOperations } from "@/components/visualizer/stack/stack-operations"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarkdownContent } from "@/components/shared/markdown-content"
import SelectionSortOperation from "@/components/sorting-visualizer/selection-sort/selectionSortOperation" // Updated import
import { useStack } from "@/hooks/use-stack"

interface StackVisualizerProps {
  content: React.ReactNode
}

export function SelectionSortVisualizer({ content }: StackVisualizerProps) {
  // const { 
  //   stack,
  //   operations,
  //   isAnimating,
  //   highlightedIndex,
  //   push,
  //   pop,
  //   clear,
  //   isFull,
  //   isEmpty,
  // } = useStack()

  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight"> Selection Sort</h1>
        <p className="text-muted-foreground">
          Selection Sort is a simple sorting algorithm that repeatedly selects the smallest (or largest) element from the unsorted portion of the array and places it at the beginning (or end) of the sorted portion.
        </p>
      </div>

      <Tabs defaultValue="visualization" className="w-full space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="visualization">Visualization</TabsTrigger>
          <TabsTrigger value="explanation">Explanation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="visualization" className="space-y-6">
          
              <SelectionSortOperation /> {/* This should now work with the default import */}
           
        </TabsContent>
        
        <TabsContent value="explanation" className="prose prose-invert max-w-none">
          <MarkdownContent content={content} />
        </TabsContent>
      </Tabs>
    </div>
  )
}