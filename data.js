const words = [
  { 
    en: "Quantity", 
    cn: "量", 
    enUsage: "Represents the magnitude of a physical quantity", 
    usage:"表示物理量的大小", 
    tags: ["Physics"], 
    formula:"", 
    category:"Scalar", 
    similar:["Speed","Distance"], 
    example:"质量、长度、时间" 
  },
  { 
    en: "Speed", 
    cn: "速率", 
    enUsage: "Represents the displacement per unit time", 
    usage:"表示单位时间内的位移大小", 
    tags: ["Physics"], 
    formula:"v = s/t", 
    category:"Scalar", 
    similar:["Velocity","Distance"], 
    example:"汽车行驶速度、风速" 
  },
  { 
    en: "Velocity", 
    cn: "速度", 
    enUsage: "A vector quantity that specifies both magnitude and direction", 
    usage:"矢量，表示方向和大小", 
    tags: ["Physics"], 
    formula:"v = Δx/Δt", 
    category:"Vector", 
    similar:["Speed","Displacement"], 
    example:"向北10 m/s" 
  },
  { 
    en: "Vector", 
    cn: "向量", 
    enUsage: "Represents a quantity with both magnitude and direction", 
    usage:"表示具有大小和方向的量", 
    tags: ["Physics","Math"], 
    formula:"v = √(v_x² + v_y² + v_z²)", 
    category:"Vector", 
    similar:["Displacement","Velocity","Acceleration"], 
    example:"力、速度" 
  },
  { 
    en: "Scalar", 
    cn: "标量", 
    enUsage: "A quantity that only has magnitude without direction", 
    usage:"只有大小没有方向的量", 
    tags: ["Physics","Math"], 
    formula:"", 
    category:"Scalar", 
    similar:["Magnitude","Distance"], 
    example:"温度、质量" 
  },
  { 
    en: "Magnitude", 
    cn: "大小", 
    enUsage: "Represents the size of a vector", 
    usage:"向量的大小", 
    tags: ["Physics","Math"], 
    formula:"", 
    category:"Scalar", 
    similar:["Scalar","Vector"], 
    example:"速度的大小、力的大小" 
  },
  { 
    en: "Acceleration", 
    cn: "加速度", 
    enUsage: "Rate of change of velocity per unit time", 
    usage:"单位时间内速度的变化", 
    tags: ["Physics"], 
    formula:"a = Δv/Δt", 
    category:"Vector", 
    similar:["Velocity","Speed"], 
    example:"自由落体加速度 9.8 m/s²" 
  },
  { 
    en: "Trigonometric Function", 
    cn: "三角函数", 
    enUsage: "Functions like sine, cosine, tangent", 
    usage:"正弦、余弦、正切等函数", 
    tags: ["Math"], 
    formula:"", 
    category:"Function", 
    similar:["Pythagorean Theorem"], 
    example:"sin(30°)=0.5, cos(60°)=0.5" 
  },
  { 
    en: "Pythagorean Theorem", 
    cn: "毕氏定理", 
    enUsage: "Relation between the sides of a right triangle", 
    usage:"直角三角形边长关系", 
    tags: ["Math"], 
    formula:"a² + b² = c²", 
    category:"Theorem", 
    similar:["Trigonometric Function"], 
    example:"直角三角形，a=3, b=4, c=5" 
  },
  { 
    en: "Pure Substance", 
    cn: "纯净物", 
    enUsage: "A material with a single type of component", 
    usage:"单一成分的物质", 
    tags: ["Chemistry"], 
    formula:"", 
    category:"Substance", 
    similar:["Mixture"], 
    example:"水、氧气" 
  },
  { 
    en: "Mixture", 
    cn: "混合物", 
    enUsage: "A combination of two or more substances", 
    usage:"两种或多种物质混合", 
    tags: ["Chemistry"], 
    formula:"", 
    category:"Substance", 
    similar:["Pure Substance"], 
    example:"空气、盐水" 
  },
  { 
    en: "Distance", 
    cn: "距离", 
    enUsage: "Scalar quantity representing the path length", 
    usage:"标量，路径长度", 
    tags: ["Physics"], 
    formula:"s = v × t", 
    category:"Scalar", 
    similar:["Displacement","Speed"], 
    example:"从家到学校的路程" 
  },
  { 
    en: "Displacement", 
    cn: "位移", 
    enUsage: "Vector quantity showing straight-line distance from start to end point", 
    usage:"矢量，表示起点到终点直线距离", 
    tags: ["Physics"], 
    formula:"Δx = x₂ - x₁", 
    category:"Vector", 
    similar:["Distance","Velocity"], 
    example:"从起点到终点的直线距离" 
  },
  { 
    en: "Constant", 
    cn: "常数", 
    enUsage: "A fixed numerical value", 
    usage:"固定数值", 
    tags: ["Math","Physics"], 
    formula:"", 
    category:"Scalar", 
    similar:["Quantity","Magnitude"], 
    example:"π=3.14159, 重力加速度 g=9.8 m/s²" 
  }
];
