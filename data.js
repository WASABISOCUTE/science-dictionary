const words = [
  { en: "Quantity", cn: "量", tags: ["Physics"], formula:"", usage:"表示物理量的大小", category:"Scalar", similar:["Speed","Distance"] },
  { en: "Speed", cn: "速率", tags: ["Physics"], formula:"v = s/t", usage:"表示单位时间内的位移大小", category:"Scalar", similar:["Velocity","Distance"] },
  { en: "Velocity", cn: "速度", tags: ["Physics"], formula:"v = Δx/Δt", usage:"矢量，表示方向和大小", category:"Vector", similar:["Speed","Displacement"] },
  { en: "Vector", cn: "向量", tags: ["Physics","Math"], formula:"v = √(v_x² + v_y² + v_z²)", usage:"表示具有大小和方向的量", category:"Vector", similar:["Displacement","Velocity","Acceleration"] },
  { en: "Scalar", cn: "标量", tags: ["Physics","Math"], formula:"", usage:"只有大小没有方向的量", category:"Scalar", similar:["Magnitude","Distance"] },
  { en: "Magnitude", cn: "大小", tags: ["Physics","Math"], formula:"", usage:"向量的大小", category:"Scalar", similar:["Scalar","Vector"] },
  { en: "Acceleration", cn: "加速", tags: ["Physics"], formula:"a = Δv/Δt", usage:"单位时间内速度的变化", category:"Vector", similar:["Velocity","Speed"] },
  { en: "Trigonometric Function", cn: "三角函数", tags: ["Math"], formula:"", usage:"正弦、余弦、正切等函数", category:"Function", similar:["Pythagorean Theorem"] },
  { en: "Pythagorean Theorem", cn: "毕氏定理", tags: ["Math"], formula:"a² + b² = c²", usage:"直角三角形边长关系", category:"Theorem", similar:["Trigonometric Function"] },
  { en: "Pure Substance", cn: "纯净物", tags: ["Chemistry"], formula:"", usage:"单一成分的物质", category:"Substance", similar:["Mixture"] },
  { en: "Mixture", cn: "混合物", tags: ["Chemistry"], formula:"", usage:"两种或多种物质混合", category:"Substance", similar:["Pure Substance"] },
  { en: "Distance", cn: "距离", tags: ["Physics"], formula:"s = v × t", usage:"标量，路径长度", category:"Scalar", similar:["Displacement","Speed"] },
  { en: "Displacement", cn: "位移", tags: ["Physics"], formula:"Δx = x₂ - x₁", usage:"矢量，表示起点到终点直线距离", category:"Vector", similar:["Distance","Velocity"] },
  { en: "Constant", cn: "常数", tags: ["Math","Physics"], formula:"", usage:"固定数值", category:"Scalar", similar:["Quantity","Magnitude"] }
];
