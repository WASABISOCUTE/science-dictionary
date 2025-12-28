const words = [
  { 
    en: "Quantity", 
    cn: "量", 
    enUsage: "Represents the magnitude of a physical quantity", 
    usage:"表示物理量的大小或数值，不涉及方向。", 
    tags: ["Physics"], 
    formula:"", 
    category:"Scalar", 
    similar:["Distance","Speed",], 
    example:"质量、长度、时间" 
  },
  { 
    en: "Speed", 
    cn: "速率", 
    enUsage: "Rate at which an object is moving. Does not depend on direction.", 
    usage:"表示物体运动快慢的量，不包含方向。", 
    tags: ["Physics"], 
    formula:"s = d/t", 
    category:"Scalar", 
    similar:["Distance","Velocity",], 
    example:"汽车行驶速度、风速" 
  },
  { 
    en: "Velocity", 
    cn: "速度", 
    enUsage: "Speed with direction. Has magnitude and direction.", 
    usage:"具有大小和方向的速度，是一个向量。", 
    tags: ["Physics"], 
    formula:"v = s/t", 
    category:"Vector", 
    similar:["Displacement","Speed",], 
    example:"向北10 ms¯¹" 
  },
  { 
    en: "Vector", 
    cn: "向量", 
    enUsage: "Represents a quantity with both magnitude and direction", 
    usage:"表示同时具有大小和方向的物理量。", 
    tags: ["Physics","Math"], 
    formula:"", 
    category:"Vector", 
    similar:["Acceleration","Displacement","Velocity",], 
    example:"力、速度" 
  },
  { 
    en: "Scalar", 
    cn: "标量", 
    enUsage: "A quantity that only has magnitude without direction", 
    usage:"只有大小、没有方向的物理量。", 
    tags: ["Physics","Math"], 
    formula:"", 
    category:"Scalar", 
    similar:["Distance","Magnitude",], 
    example:"温度、质量" 
  },
  { 
    en: "Magnitude", 
    cn: "大小", 
    enUsage: "A measure that has a value", 
    usage:"表示一个量的数值大小，不包含方向信息。", 
    tags: ["Physics","Math"], 
    formula:"", 
    category:"Scalar", 
    similar:["Scalar","Vector"], 
    example:"速度的大小、力的大小" 
  },
  { 
    en: "Acceleration", 
    cn: "加速", 
    enUsage: "Change in velocity over time", 
    usage:"单位时间内速度的变化量，是一个向量。", 
    tags: ["Physics"], 
    formula:"a = Δv/t", 
    category:"Vector", 
    similar:["Speed","Velocity",], 
    example:"自由落体加速度 9.8 ms⁻²" 
  },
  { 
    en: "Trigonometric Function", 
    cn: "三角函数", 
    enUsage: "Functions like sine, cosine, tangent", 
    usage:"用于描述角度与边长关系的函数，如正弦、余弦、正切等。", 
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
    usage:"描述直角三角形三边长度关系的定理。", 
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
    usage:"由单一成分组成的物质。", 
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
    usage:"由两种或多种物质混合而成的物质。", 
    tags: ["Chemistry"], 
    formula:"", 
    category:"Substance", 
    similar:["Pure Substance"], 
    example:"空气、盐水" 
  },
  { 
    en: "Distance", 
    cn: "距离", 
    enUsage: "How far an object travels, does not depend on direction", 
    usage:"物体实际运动路径的总长度，不包含方向。", 
    tags: ["Physics"], 
    formula:"s = v × t", 
    category:"Scalar", 
    similar:["Displacement","Speed"], 
    example:"The ant walked 1cm" 
  },
  { 
    en: "Displacement", 
    cn: "位移", 
    enUsage: "Difference between an object's final and its starting position, does depend on direction", 
    usage:"物体实际运动路径的总长度，与方向无关。", 
    tags: ["Physics"], 
    formula:"Δx = x₂ - x₁", 
    category:"Vector", 
    similar:["Distance","Velocity"], 
    example:"The ant walked 3cm East" 
  },
  { 
    en: "Constant", 
    cn: "常数", 
    enUsage: "A fixed numerical value", 
    usage:"数值固定不变的量", 
    tags: ["Math","Physics"], 
    formula:"", 
    category:"Scalar", 
    similar:["Magnitude","Quantity",], 
    example:"π=3.14159, 重力加速度 g=9.8 ms¯²" 
  }
];
