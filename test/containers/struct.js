

function makeData() {
  var data = [];

  /* 
  addr: ScAddr,
  type: ScType,
  src?: ScAddr,
  trg?: ScAddr,
  alias?: string,
  content?: string,
  */
  
  // edge 3
  data.push({
    addr: new ScAddr(3),
    type: ScType.EdgeDCommonConst,
    src: new ScAddr(0),
    trg: new ScAddr(1),
    alias: null,
    content: null
  });

  // node 0
  data.push({
    addr: new ScAddr(0),
    type: ScType.NodeConst,
    src: null,
    trg: null,
    alias: "node 0",
    content: null
  });

  // node 1
  data.push({
    addr: new ScAddr(1),
    type: ScType.NodeConst,
    src: null,
    trg: null,
    alias: "node 1",
    content: null
  });

  // node 4
  data.push({
    addr: new ScAddr(4),
    type: ScType.NodeConst,
    src: null,
    trg: null,
    alias: "node 4",
    content: null
  });

  // edge 5
  data.push({
    addr: new ScAddr(5),
    type: ScType.EdgeAccessConstPosPerm,
    src: new ScAddr(4),
    trg: new ScAddr(3),
    alias: null,
    content: null
  });

  return data;
}

function test_struct(container) {
  let c = document.createElement('div');
  c.id = 'struct-content';

  container.appendChild(c);

  data = makeData();
  let viewer = new SCgViewer('struct-content');
  let struct = viewer.getStruct();
  for (var i = 0; i < data.length; ++i) {
    struct.addObject(data[i]);
  }
  struct.update();
  viewer.layout();
}