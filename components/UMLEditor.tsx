'use client'

import React, { useState, useRef, useCallback } from 'react';
import createEngine, {
  DiagramModel,
  DefaultNodeModel,
  DefaultLinkModel,
  DefaultLinkFactory,
  DefaultNodeFactory,
  DefaultPortModel
} from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { toPng } from 'html-to-image';

import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import PropertiesPanel from './PropertiesPanel';

const UMLEditor: React.FC = () => {
  const [engine] = useState(() => {
    const engine = createEngine();
    const model = new DiagramModel();
    engine.setModel(model);
    return engine;
  });

  const [selectedNode, setSelectedNode] = useState<DefaultNodeModel | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const addNode = useCallback((type: string) => {
    const node = new DefaultNodeModel({
      name: 'New ' + type.charAt(0).toUpperCase() + type.slice(1),
      color: 'rgb(0,192,255)'
    });
    node.addInPort('In');
    node.addOutPort('Out');
    node.setPosition(100, 100);
    engine.getModel().addNode(node);
    engine.repaintCanvas();
  }, [engine]);

  const handleSave = async () => {
    if (canvasRef.current) {
      const dataUrl = await toPng(canvasRef.current);
      const link = document.createElement('a');
      link.download = 'uml-diagram.png';
      link.href = dataUrl;
      link.click();
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All changes will be lost.')) {
      engine.getModel().getNodes().forEach(node => {
        engine.getModel().removeNode(node);
      });
      engine.repaintCanvas();
    }
  };

  const updateSelectedNode = (updates: Partial<DefaultNodeModel>) => {
    if (selectedNode) {
      selectedNode.setName(updates.name || selectedNode.getOptions().name);
      engine.repaintCanvas();
    }
  };

  const handleNodeClick = (node: DefaultNodeModel) => {
    setSelectedNode(node);
  };

  return (
    <div className="h-screen flex flex-col">
      <Toolbar onSave={handleSave} onCancel={handleCancel} />
      <div className="flex-1 flex">
        <Sidebar onAddNode={addNode} />
        <div className="flex-1 relative bg-grid" ref={canvasRef}>
          <CanvasWidget
            engine={engine}
            className="h-full w-full"
          />
        </div>
        <PropertiesPanel
          selectedNode={selectedNode}
          onUpdateNode={updateSelectedNode}
        />
      </div>
    </div>
  );
};

export default UMLEditor;

