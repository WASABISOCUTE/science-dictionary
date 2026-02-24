const words = [
  {
    "en": "Quantity",
    "cn": "量",
    "enUsage": "Represents the magnitude of a physical quantity",
    "usage": "表示物理量的大小或数值，不涉及方向。",
    "tags": [
      "Physics"
    ],
    "formula": "",
    "category": "Scalar",
    "similar": [
      "Distance",
      "Speed"
    ],
    "example": "质量、长度、时间",
    "updated": "2025-12-28"
  },
  {
    "en": "Speed",
    "cn": "速率",
    "enUsage": "Rate at which an object is moving. Does not depend on direction.",
    "usage": "表示物体运动快慢的量，不包含方向。",
    "tags": [
      "Physics"
    ],
    "formula": "s = d/t",
    "category": "Scalar",
    "similar": [
      "Distance",
      "Velocity"
    ],
    "example": "汽车行驶速度、风速",
    "updated": "2026-01-21"
  },
  {
    "en": "Velocity",
    "cn": "速度",
    "enUsage": "Speed with direction. Has magnitude and direction.",
    "usage": "具有大小和方向的速度，是一个向量。",
    "tags": [
      "Physics"
    ],
    "formula": "v = s/t",
    "category": "Vector",
    "similar": [
      "Displacement",
      "Speed"
    ],
    "example": "向北10 ms¯¹",
    "updated": "2025-12-28"
  },
  {
    "en": "Vector",
    "cn": "向量",
    "enUsage": "Represents a quantity with both magnitude and direction",
    "usage": "表示同时具有大小和方向的物理量。",
    "tags": [
      "Physics",
      "Math"
    ],
    "formula": "",
    "category": "Vector",
    "similar": [
      "Acceleration",
      "Displacement",
      "Velocity"
    ],
    "example": "力、速度",
    "updated": "2025-12-28"
  },
  {
    "en": "Scalar",
    "cn": "标量",
    "enUsage": "A quantity that only has magnitude without direction",
    "usage": "只有大小、没有方向的物理量。",
    "tags": [
      "Physics",
      "Math"
    ],
    "formula": "",
    "category": "Scalar",
    "similar": [
      "Distance",
      "Magnitude"
    ],
    "example": "温度、质量",
    "updated": "2025-12-28"
  },
  {
    "en": "Magnitude",
    "cn": "大小",
    "enUsage": "A measure that has a value",
    "usage": "表示一个量的数值大小，不包含方向信息。",
    "tags": [
      "Physics",
      "Math"
    ],
    "formula": "",
    "category": "Scalar",
    "similar": [
      "Scalar",
      "Vector"
    ],
    "example": "速度的大小、力的大小",
    "updated": "2025-12-28"
  },
  {
    "en": "Acceleration",
    "cn": "加速",
    "enUsage": "The rate at which an object changes its velocity.",
    "usage": "单位时间内速度的变化量，是一个向量。",
    "tags": [
      "Physics"
    ],
    "formula": "a = Δv/t",
    "category": "Vector",
    "similar": [
      "Speed",
      "Velocity"
    ],
    "classification": [
      {
        "en": "Accelerated",
        "cn": "加速"
      },
      {
        "en": "Decelerated",
        "cn": "减速"
      }
    ],
    "example": "自由落体加速度 9.8 ms⁻²",
    "updated": "2026-01-21"
  },
  {
    "en": "Trigonometric Function",
    "cn": "三角函数",
    "enUsage": "Functions like sine, cosine, tangent",
    "usage": "用于描述角度与边长关系的函数，如正弦、余弦、正切等。",
    "tags": [
      "Math"
    ],
    "formula": "",
    "category": "Function",
    "similar": [
      "Pythagorean Theorem"
    ],
    "example": "sin(30°)=0.5, cos(60°)=0.5",
    "updated": "2025-12-28"
  },
  {
    "en": "Pythagorean Theorem",
    "cn": "毕氏定理",
    "enUsage": "Relation between the sides of a right triangle",
    "usage": "描述直角三角形三边长度关系的定理。",
    "tags": [
      "Math"
    ],
    "formula": "a² + b² = c²",
    "category": "Theorem",
    "similar": [
      "Trigonometric Function"
    ],
    "example": "直角三角形，a=3, b=4, c=5",
    "updated": "2025-12-28"
  },
  {
    "en": "Pure Substance",
    "cn": "纯净物",
    "enUsage": "Made up of only one kind of particles",
    "usage": "由单一成分组成的物质。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Substance",
    "similar": [
      "Mixture"
    ],
    "classification": [
      {
        "en": "Element",
        "cn": "单质"
      },
      {
        "en": "Compound",
        "cn": "化合物"
      }
    ],
    "example": "水、氧气",
    "updated": "2025-12-29"
  },
  {
    "en": "Mixture",
    "cn": "混合物",
    "enUsage": "Made up of two or more substances, not chemically combined, can be separated by physical means",
    "usage": "由两种或两种以上物质组成，不通过化学方式结合，可以通过物理方法分离。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Substance",
    "similar": [
      "Pure Substance"
    ],
    "classification": [
      {
        "en": "Heterogeneous Mixture",
        "cn": "非均相混合物"
      },
      {
        "en": "Homogeneous Mixture",
        "cn": "均相混合物"
      }
    ],
    "example": "空气、盐水",
    "updated": "2025-12-29"
  },
  {
    "en": "Distance",
    "cn": "距离",
    "enUsage": "The total length of the path travelled by an object. Does not depend on direction.",
    "usage": "物体实际运动路径的总长度，不包含方向。",
    "tags": [
      "Physics"
    ],
    "formula": "s = v × t",
    "category": "Scalar",
    "similar": [
      "Displacement",
      "Speed"
    ],
    "example": "The ant walked 1cm",
    "updated": "2026-01-21"
  },
  {
    "en": "Displacement",
    "cn": "位移",
    "enUsage": "The shortest straight-line distance between the initial and final position of an object. Does depend on direction",
    "usage": "物体初始位置和最终位置之间的最短直线距离，与方向无关。",
    "tags": [
      "Physics"
    ],
    "formula": "Δx = x₂ - x₁",
    "category": "Vector",
    "similar": [
      "Distance",
      "Velocity"
    ],
    "example": "The ant walked 3cm East",
    "updated": "2026-01-21"
  },
  {
    "en": "Constant",
    "cn": "常数",
    "enUsage": "A fixed numerical value",
    "usage": "数值固定不变的量",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "",
    "category": "Scalar",
    "similar": [
      "Magnitude",
      "Quantity"
    ],
    "example": "π=3.14159, 重力加速度 g=9.8 ms¯²",
    "updated": "2025-12-28"
  },
  {
    "en": "Compound",
    "cn": "化合物",
    "enUsage": "Consist of two or more elements chemically bonded together, have completely new properties",
    "usage": "由两种或两种以上元素通过化学键合而成，有新物质产生。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Substance",
    "similar": [
      "Element"
    ],
    "classification": [
      {
        "en": "Covalent",
        "cn": "共价化合物"
      },
      {
        "en": "Ionic",
        "cn": "离子化合物"
      }
    ],
    "example": "NaCI, H₂O",
    "updated": "2025-12-29"
  },
  {
    "en": "Element",
    "cn": "单质",
    "enUsage": "Consist of only one kind of atom/molecule, cannot be separated into simpler substances",
    "usage": "仅由一种原子/分子构成，不能被分解。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Pure Substance",
    "similar": [
      "Compound"
    ],
    "classification": [
      {
        "en": "Atoms",
        "cn": "原子"
      },
      {
        "en": "Molecules",
        "cn": "分子"
      }
    ],
    "example": "Gold, Argon gas",
    "updated": "2025-01-14"
  },
  {
    "en": "Particle",
    "cn": "粒子",
    "enUsage": "Matter is made of particles",
    "usage": "所有物质都是由粒子构成",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Basic Concept",
    "similar": [
      "Matter"
    ],
    "classification": [
      {
        "en": "Ions",
        "cn": "离子"
      },
      {
        "en": "Atoms",
        "cn": "原子"
      },
      {
        "en": "Molecules",
        "cn": "分子"
      }
    ],
    "example": "Atoms, molecules, ions",
    "updated": "2025-12-29"
  },
  {
    "en": "Atoms",
    "cn": "原子",
    "enUsage": "Smallest neutral particle of an element that can exist independently",
    "usage": "元素中最小且电中性的粒子",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Particle",
    "similar": [
      "Molecules",
      "Ions"
    ],
    "example": "He, Ne, Ar",
    "updated": "2025-12-29"
  },
  {
    "en": "Molecules",
    "cn": "分子",
    "enUsage": "Two or more atoms chemically bonded together",
    "usage": "由两个或以上原子通过化学键结合而成",
    "tags": [
      "Chemistry"
    ],
    "formula": "H₂O, CO₂",
    "category": "Particle",
    "similar": [
      "Atoms",
      "Ions"
    ],
    "example": "H₂, O₂, CO₂",
    "updated": "2025-12-29"
  },
  {
    "en": "Ions",
    "cn": "离子",
    "enUsage": "Charged particles formed when atoms lose or gain electrons",
    "usage": "原子失去或得到电子后形成的带电粒子",
    "tags": [
      "Chemistry"
    ],
    "formula": "Na⁺, Cl⁻",
    "category": "Particle",
    "similar": [
      "Atoms",
      "Molecules"
    ],
    "classification": [
      {
        "en": "Cation",
        "cn": "阳离子"
      },
      {
        "en": "Anion",
        "cn": "阴离子"
      }
    ],
    "example": "Na⁺, Cl⁻",
    "updated": "2025-12-29"
  },
  {
    "en": "Matter",
    "cn": "物质",
    "enUsage": "Anything that has mass and occupies space",
    "usage": "具有质量并占据空间的东西",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Basic Concept",
    "similar": [
      "Particle"
    ],
    "classification": [
      {
        "en": "Pure Substance",
        "cn": "纯净物"
      },
      {
        "en": "Mixture",
        "cn": "混合物"
      }
    ],
    "example": "Air, water, iron",
    "updated": "2026-01-14"
  },
  {
    "en": "Covalent",
    "cn": "共价化合物",
    "enUsage": "Compound formed by sharing electrons between atoms",
    "usage": "原子之间通过共享电子形成的化合物",
    "tags": [
      "Chemistry"
    ],
    "formula": "H₂O",
    "category": "Compound",
    "similar": [
      "Ionic"
    ],
    "example": "Water (H₂O)",
    "updated": "2026-01-14"
  },
  {
    "en": "Ionic",
    "cn": "离子化合物",
    "enUsage": "Compound formed by electrostatic attraction between ions",
    "usage": "由带相反电荷的离子之间的静电引力形成",
    "tags": [
      "Chemistry"
    ],
    "formula": "NaCl",
    "category": "Compound",
    "similar": [
      "Covalent"
    ],
    "example": "Sodium chloride (NaCl)",
    "updated": "2026-01-14"
  },
  {
    "en": "Solid",
    "cn": "固体",
    "enUsage": "State of matter with fixed shape and volume",
    "usage": "具有固定形状和体积的物质状态",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "State of Matter",
    "similar": [
      "Liquid",
      "Gas"
    ],
    "example": "Ice",
    "updated": "2026-01-15"
  },
  {
    "en": "Liquid",
    "cn": "液体",
    "enUsage": "State of matter with fixed volume but no fixed shape",
    "usage": "体积固定但形状不固定的物质状态",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "State of Matter",
    "similar": [
      "Solid",
      "Gas"
    ],
    "example": "Water",
    "updated": "2026-01-15"
  },
  {
    "en": "Gas",
    "cn": "气体",
    "enUsage": "State of matter with no fixed shape or volume",
    "usage": "既无固定形状也无固定体积的物质状态",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "State of Matter",
    "similar": [
      "Solid",
      "Liquid"
    ],
    "example": "Steam",
    "updated": "2026-01-15"
  },
  {
    "en": "Heterogeneous Mixture",
    "cn": "非均相混合物",
    "enUsage": "Mixture with non-uniform composition",
    "usage": "组成不均匀的混合物",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Mixture",
    "similar": [
      "Homogeneous Mixture"
    ],
    "example": "Sand and water",
    "updated": "2026-01-14"
  },
  {
    "en": "Homogeneous Mixture",
    "cn": "均相混合物",
    "enUsage": "Mixture with uniform composition throughout",
    "usage": "组成均匀的混合物",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Mixture",
    "similar": [
      "Heterogeneous Mixture"
    ],
    "example": "Salt solution",
    "updated": "2026-01-14"
  },
  {
    "en": "Linear Motion",
    "cn": "直线运动",
    "enUsage": "aka Straight Line Motion",
    "usage": "",
    "tags": [
      "Physics"
    ],
    "formula": "",
    "category": "",
    "similar": [
      ""
    ],
    "classification": [
      {
        "en": "Mechanical Motion",
        "cn": "机械运动"
      },
      {
        "en": "Reference Motion",
        "cn": "参考系运动"
      },
      {
        "en": "Key Parameters of Mechanical Motion",
        "cn": "机械运动的关键参数"
      },
      {
        "en": "Uniform Linear Motion",
        "cn": "匀速直线运动"
      },
      {
        "en": "Variable Speed Linear Motion",
        "cn": "变速直线运动"
      },
      {
        "en": "Uniform Acceration Linear Motion",
        "cn": "匀加速直线运动"
      },
      {
        "en": "Free Fall Motion",
        "cn": "自由落体运动"
      }
    ],
    "example": "",
    "updated": "2026-01-16"
  },
  {
    "en": "Mechanical Motion",
    "cn": "机械运动",
    "enUsage": "The Movement of an object or a system of objects from one position to another varies with time.",
    "usage": "某个物体在一定的时间内位置发生变化",
    "tags": [
      "Physics"
    ],
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [
      {
        "en": "Translational Motion",
        "cn": "平移"
      },
      {
        "en": "Rotational Motion",
        "cn": "转动"
      }
    ],
    "example": "",
    "updated": "2026-01-21"
  },
  {
    "en": "Reference Frame",
    "cn": "参考系影格",
    "tags": [
      "Physics"
    ],
    "updated": "2026-01-21",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Key Parameters of Mechanical Motion",
    "cn": "机械运动的关键参数",
    "tags": [
      "Physics"
    ],
    "updated": "2026-01-27",
    "enUsage": "Distance & Displacement: The change in position of an object.\nSpeed & Velocity: The rate at which an object changes its position.\nAcceleration: The rate at which an object changes its velocity.",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Uniform Linear Motion",
    "cn": "匀速直线运动",
    "tags": [
      "Physics"
    ],
    "updated": "2026-01-21",
    "enUsage": "Straight line path.\nDisplacement in equal time is equal.",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Variable Speed Linear Motion",
    "cn": "变速直线运动",
    "tags": [
      "Physics"
    ],
    "updated": "2026-01-27",
    "enUsage": "Linear motion in which the displacements of objects are not all equal in equal time.",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Uniform Acceration Linear Motion",
    "cn": "匀加速直线运动",
    "tags": [
      "Physics"
    ],
    "updated": "2026-01-27",
    "enUsage": "Linear motion with equal speed increase in equal time.",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Free Fall Motion",
    "cn": "自由落体",
    "tags": [
      "Physics"
    ],
    "updated": "2026-01-27",
    "enUsage": "The motion of an object under the influence of gravity alone, with no other forces acting on it, such as air resistance\nThe object experiences constant acceleration due to gravity, called gravitational acceleration.",
    "usage": "",
    "formula": "g = 9.8 ms^-2",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Dimension",
    "cn": "量纲",
    "enUsage": "The expression of a physical quantity in terms of fundamental quantities such as length, mass, and time.",
    "usage": "用基本物理量（如长度、质量、时间等）来表示一个物理量的方式。",
    "tags": [
      "Physics"
    ],
    "formula": "[M^a L^b T^c]",
    "category": "Measurement",
    "similar": [
      "SI Units",
      "Physical Quantity"
    ],
    "example": "The dimension of force is [M L T^-2].",
    "updated": "2026-01-16"
  },
  {
    "en": "Length",
    "cn": "长度",
    "enUsage": "The measurement of distance between two points.",
    "usage": "表示两点之间距离的物理量。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "",
    "category": "Base Quantity",
    "similar": [
      "Area",
      "Volume"
    ],
    "example": "The length of the table is 2 meters.",
    "updated": "2026-01-16"
  },
  {
    "en": "Mass",
    "cn": "质量",
    "enUsage": "The amount of matter in an object.",
    "usage": "表示物体所含物质多少的物理量。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "",
    "category": "Base Quantity",
    "similar": [
      "Weight"
    ],
    "example": "The mass of the object is 5 kilograms.",
    "updated": "2026-01-16"
  },
  {
    "en": "Time",
    "cn": "时间",
    "enUsage": "A quantity that measures the duration of events.",
    "usage": "用于表示事件持续长短的物理量。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "",
    "category": "Base Quantity",
    "similar": [
      "Frequency"
    ],
    "example": "The time taken to complete the race is 10 seconds.",
    "updated": "2026-01-16"
  },
  {
    "en": "Temperature",
    "cn": "温度",
    "enUsage": "A measure of the average kinetic energy of particles in a substance.",
    "usage": "表示物质中粒子平均动能大小的物理量。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "",
    "category": "Base Quantity",
    "similar": [
      "Heat"
    ],
    "example": "The temperature of the room is 25°C.",
    "updated": "2026-01-16"
  },
  {
    "en": "Current",
    "cn": "电流",
    "enUsage": "The rate of flow of electric charge.",
    "usage": "单位时间内通过导体横截面的电荷量。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "I = \\frac{Q}{t}",
    "category": "Base Quantity",
    "similar": [
      "Voltage",
      "Resistance"
    ],
    "example": "The current flowing through the wire is 2 amperes.",
    "updated": "2026-01-16"
  },
  {
    "en": "Area",
    "cn": "面积",
    "enUsage": "The measure of a surface.",
    "usage": "表示平面区域大小的量。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "A = l \\times w",
    "category": "Derived Quantity",
    "similar": [
      "Length",
      "Volume"
    ],
    "example": "The area of the rectangle is 12 square meters.",
    "updated": "2026-01-16"
  },
  {
    "en": "Volume",
    "cn": "体积",
    "enUsage": "The amount of space occupied by an object.",
    "usage": "表示物体所占空间大小的量。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "V = l \\times w \\times h",
    "category": "Derived Quantity",
    "similar": [
      "Area",
      "Density"
    ],
    "example": "The volume of the box is 1 cubic meter.",
    "updated": "2026-01-16"
  },
  {
    "en": "Force",
    "cn": "力",
    "enUsage": "A push or pull that can change the motion or shape of an object.",
    "usage": "能够改变物体运动状态或形状的作用。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "F = ma",
    "category": "Derived Quantity",
    "similar": [
      "Energy",
      "Momentum"
    ],
    "example": "A force is applied to push the box forward.",
    "updated": "2026-01-16"
  },
  {
    "en": "Energy",
    "cn": "能量",
    "enUsage": "The ability to do work.",
    "usage": "物体做功或产生变化的能力。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "E = W",
    "category": "Derived Quantity",
    "similar": [
      "Work",
      "Power"
    ],
    "example": "Kinetic energy depends on the speed of an object.",
    "updated": "2026-01-16"
  },
  {
    "en": "Scientific Notation",
    "cn": "科学记数法",
    "enUsage": "A method of writing very large or very small numbers using powers of ten.",
    "usage": "用 10 的幂来表示非常大或非常小数字的方法。",
    "tags": [
      "Physics"
    ],
    "formula": "a \\times 10^n",
    "category": "Representation",
    "similar": [
      "Significant Digit"
    ],
    "example": "3,000,000 can be written as 3 × 10⁶.",
    "updated": "2026-01-16"
  },
  {
    "en": "SI Units",
    "cn": "国际单位制",
    "enUsage": "International System of Units used for standard measurement.",
    "usage": "用于科学测量的国际标准单位系统。",
    "tags": [
      "Physics"
    ],
    "formula": "",
    "category": "Measurement System",
    "similar": [
      "Dimension",
      "Base Quantity"
    ],
    "example": "The SI unit of length is the meter.",
    "updated": "2026-01-16"
  },
  {
    "en": "Radius",
    "cn": "半径",
    "enUsage": "The distance from the centre of a circle or sphere to any point on its boundary.",
    "usage": "从圆心或球心到圆周或球面上任意一点的距离。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "r = \\frac{d}{2}",
    "category": "Geometry",
    "similar": [
      "Diameter",
      "Circle"
    ],
    "example": "The radius of a circle is half of its diameter.",
    "updated": "2026-01-16"
  },
  {
    "en": "Significant Digit",
    "cn": "有效数字",
    "enUsage": "Digits in a measured value that are known with certainty plus one estimated digit.",
    "usage": "测量结果中所有确定的数字加上最后一位估计数字。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "",
    "category": "Measurement",
    "similar": [
      "Accuracy",
      "Precision"
    ],
    "example": "The value 3.20 has three significant digits.",
    "updated": "2026-01-16"
  },
  {
    "en": "Directly Proportional Relation",
    "cn": "正比关系",
    "enUsage": "A relationship where one quantity increases or decreases at the same rate as another.",
    "usage": "当一个量增加或减少时，另一个量也按相同比例变化的关系。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "y \\propto x",
    "category": "Relation",
    "similar": [
      "Inversely Proportional Relation"
    ],
    "example": "The distance travelled is directly proportional to time at constant speed.",
    "updated": "2026-01-16"
  },
  {
    "en": "Inversely Proportional Relation",
    "cn": "反比关系",
    "enUsage": "A relationship where one quantity increases while the other decreases.",
    "usage": "当一个量增加时，另一个量减少，且乘积保持不变的关系。",
    "tags": [
      "Math",
      "Physics"
    ],
    "formula": "y \\propto \\frac{1}{x}",
    "category": "Relation",
    "similar": [
      "Directly Proportional Relation"
    ],
    "example": "Pressure is inversely proportional to volume at constant temperature.",
    "updated": "2026-01-16"
  },
  {
    "en": "Solution",
    "cn": "溶液",
    "enUsage": "A homogeneous mixture formed when a solute dissolves in a solvent, not necessarily a liquid.",
    "usage": "由溶质溶解在溶剂中所形成的均匀混合物，不一定为液体。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Mixture",
    "similar": [
      "Solute",
      "Solvent"
    ],
    "example": "Salt water is a solution made of salt and water.",
    "updated": "2026-01-19"
  },
  {
    "en": "Chemical Force",
    "cn": "化学作用力",
    "enUsage": "Forces that act between atoms or molecules and are responsible for chemical bonding and interactions.",
    "usage": "存在于原子或分子之间，导致化学键合及物质相互作用的力。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Intermolecular Force",
    "similar": [
      "Intermolecular Force",
      "Chemical Bond"
    ],
    "example": "Chemical forces hold atoms together to form molecules.",
    "updated": "2026-01-19"
  },
  {
    "en": "Boiling Point",
    "cn": "沸点",
    "enUsage": "The temperature at which the gas condense into a liquid",
    "usage": "液体在整个内部转变为气体时所对应的温度。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Physical Property",
    "similar": [
      "Melting Point",
      "Freezing Point"
    ],
    "example": "The boiling point of water at standard pressure is 100°C.",
    "updated": "2026-01-21"
  },
  {
    "en": "Melting Point",
    "cn": "熔点",
    "enUsage": "The temperature at which a solid changes into a liquid.",
    "usage": "固体开始转变为液体时的温度。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Physical Property",
    "similar": [
      "Boiling Point",
      "Freezing Point"
    ],
    "example": "The melting point of ice is 0°C.",
    "updated": "2026-01-19"
  },
  {
    "en": "Freezing Point",
    "cn": "凝固点",
    "enUsage": "The temperature at which a liquid changes into a solid.",
    "usage": "液体开始转变为固体时的温度。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Physical Property",
    "similar": [
      "Boiling Point",
      "Melting Point"
    ],
    "example": "Pure water has a freezing point of 0°C.",
    "updated": "2026-01-19"
  },
  {
    "en": "Kinetic Theory of Matter",
    "cn": "分子运动论",
    "enUsage": "A theory that explains the physical properties of matter based on the motion of its particles.",
    "usage": "通过粒子的运动来解释物质物理性质的理论。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Theory",
    "similar": [
      "States of Matter",
      "Particle Model"
    ],
    "example": "The kinetic theory of matter explains why gases expand when heated.",
    "updated": "2026-01-19"
  },
  {
    "en": "Freezing",
    "cn": "凝固",
    "enUsage": "The process in which a liquid changes into a solid when heat is removed.",
    "usage": "液体在失去热量后转变为固体的过程。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Phase Change",
    "similar": [
      "Melting",
      "Condensation",
      "Vaporization",
      "Deposition",
      "Sublimation"
    ],
    "example": "Water freezes into ice at 0°C.",
    "updated": "2026-01-19"
  },
  {
    "en": "Melting",
    "cn": "融化",
    "enUsage": "The process in which a solid changes into a liquid when heat is absorbed.",
    "usage": "固体在吸收热量后转变为液体的过程。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Phase Change",
    "similar": [
      "Freezing",
      "Condensation",
      "Vaporization",
      "Deposition",
      "Sublimation"
    ],
    "example": "Ice melts into water when heated.",
    "updated": "2026-01-19"
  },
  {
    "en": "Condensation",
    "cn": "凝结",
    "enUsage": "The process in which a gas changes into a liquid when it loses heat.",
    "usage": "气体在失去热量后转变为液体的过程。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Phase Change",
    "similar": [
      "Melting",
      "Freezing",
      "Vaporization",
      "Deposition",
      "Sublimation"
    ],
    "example": "Water vapor condenses into liquid water on a cold surface.",
    "updated": "2026-01-19"
  },
  {
    "en": "Vaporization",
    "cn": "汽化",
    "enUsage": "The process in which a liquid changes into a gas when heat is absorbed.",
    "usage": "液体在吸收热量后转变为气体的过程。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Phase Change",
    "similar": [
      "Freezing",
      "Melting",
      "Condensation",
      "Deposition",
      "Sublimation"
    ],
    "example": "Water vaporizes into steam when boiled.",
    "updated": "2026-01-19"
  },
  {
    "en": "Deposition",
    "cn": "凝华 / 凝化",
    "enUsage": "The process in which a gas changes directly into a solid without becoming a liquid.",
    "usage": "气体不经过液态，直接转变为固体的过程。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Phase Change",
    "similar": [
      "Melting",
      "Condensation",
      "Vaporization",
      "Freezing",
      "Sublimation"
    ],
    "example": "Frost forms when water vapor deposits as ice on a cold surface.",
    "updated": "2026-01-19"
  },
  {
    "en": "Sublimation",
    "cn": "升华",
    "enUsage": "The process in which a solid changes directly into a gas without becoming a liquid.",
    "usage": "固体不经过液态，直接转变为气体的过程。",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "Phase Change",
    "similar": [
      "Melting",
      "Condensation",
      "Vaporization",
      "Deposition",
      "Freezing"
    ],
    "example": "Dry ice sublimates directly into carbon dioxide gas.",
    "updated": "2026-01-19"
  },
  {
    "en": "Cation",
    "cn": "阳离子",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "Is positively-charged ion, which form an atom (metal) loses electrons",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": "",
    "classification": []
  },
  {
    "en": "Anion",
    "cn": "阴离子",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-21",
    "enUsage": "Is negatively-charged ion, which form an atom (non-metal) gain electrons.",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Perpendicular",
    "cn": "垂直",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Math"
    ],
    "formula": "",
    "category": "",
    "similar": [
      ""
    ],
    "example": "",
    "updated": "2026-01-20"
  },
  {
    "en": "Parallel",
    "cn": "平行",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Math"
    ],
    "formula": "",
    "category": "",
    "similar": [
      ""
    ],
    "example": "",
    "updated": "2026-01-20"
  },
  {
    "en": "Intersect",
    "cn": "交界",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Math"
    ],
    "formula": "",
    "category": "",
    "similar": [
      ""
    ],
    "example": "",
    "updated": "2026-01-20"
  },
  {
    "en": "Origin",
    "cn": "原点",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Math"
    ],
    "formula": "",
    "category": "",
    "similar": [
      ""
    ],
    "example": "(0,0)",
    "updated": "2026-01-20"
  },
  {
    "en": "Coordinate",
    "cn": "坐标",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Math"
    ],
    "formula": "(x,y)",
    "category": "",
    "similar": [
      ""
    ],
    "example": "(1,3)",
    "updated": "2026-01-20"
  },
  {
    "en": "Radiocarbon Dating",
    "cn": "放射性碳定年法",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Chemistry"
    ],
    "formula": "",
    "category": "",
    "similar": [],
    "example": "",
    "updated": "2026-01-20"
  },
  {
    "en": "Fundamental Quantity",
    "cn": "基本量",
    "tags": [
      "Physics"
    ],
    "updated": "2026-01-21",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Derived Quantity",
    "cn": "导出量",
    "tags": [
      "Physics"
    ],
    "updated": "2026-01-21",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Body and Point Mass",
    "cn": "体和点质量",
    "tags": [
      "Physics"
    ],
    "updated": "2026-01-21",
    "enUsage": "An object is considered mass concentrated at a single point in space.\nIgnores the object's size, shape, or volume, focusing only on its mass and position.",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Reference Body",
    "cn": "参考系运动",
    "tags": [
      "Physics"
    ],
    "updated": "2026-01-21",
    "enUsage": "Determine whether an object is moving or stationary.\nA coordinate system used to define and observe the position orientation and motion of objects.",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Polyatomic ion",
    "cn": "原子团/多原子离子",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-21",
    "enUsage": "Is a group of 2 or more atoms that have a charge associated with them as a group.",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Forces of attraction",
    "cn": "吸引力",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-21",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": ""
  },
  {
    "en": "Endothermic reactions",
    "cn": "吸热反应",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "<br>",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [
      "Exothermic reaction"
    ],
    "example": "",
    "classification": [
      {
        "en": "Melting",
        "cn": "融化"
      },
      {
        "en": "Vaporization",
        "cn": "汽化"
      },
      {
        "en": "Sublimation",
        "cn": "升华"
      }
    ]
  },
  {
    "en": "Exothermic reaction",
    "cn": "放热反应",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "<br>",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [
      "Endothermic reactions"
    ],
    "example": "",
    "classification": [
      {
        "en": "Freezing",
        "cn": "凝固"
      },
      {
        "en": "Condensation",
        "cn": "凝结"
      },
      {
        "en": "Deposition",
        "cn": "凝华 / 凝化"
      }
    ]
  },
  {
    "en": "Sensible heat",
    "cn": "显热",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-21",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [
      "Latent heat"
    ],
    "example": ""
  },
  {
    "en": "Latent heat",
    "cn": "潜热",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-21",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [
      "Sensible heat"
    ],
    "example": ""
  },
  {
    "en": "Vapor-liquid equilibrium",
    "cn": "气液共存",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-21",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [
      "Solid-liquid equilibrium"
    ],
    "example": ""
  },
  {
    "en": "Solid-liquid equilibrium",
    "cn": "固液共存",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-21",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [
      "Vapor-liquid equilibrium"
    ],
    "example": ""
  },
  {
    "en": "Physical Properties",
    "cn": "物理性质",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-21",
    "enUsage": "The characteristics that can be observed without changing the substances that make up the material.",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": "Melting and boiling points / Odour and colour / Density / Electrical conductivity / Hardness / Lustre / Thermal conductivity / Attraction to magnets",
    "classification": []
  },
  {
    "en": "Physical Changes",
    "cn": "物理变化",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-21",
    "enUsage": "A change in appearance that is not accompanied by rearranging atoms into new substances.\nOften a physical change can be reversed, and them matter can be returned to its original state.",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "example": "A liquid boiling (can be reversed) / Salt dissolving into water (can be reversed) / Wood being chopped (can't be reversed) / A mixture of colors being separated out / Peeling an orange (can't be reversed)"
  },
  {
    "en": "Trapezium",
    "cn": "梯形",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Gradient",
    "cn": "斜率",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Collinear",
    "cn": "共线",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Substitute",
    "cn": "代入",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Coefficient",
    "cn": "系数",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Slope-intercept form",
    "cn": "斜截式",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Periodic Table of the Elements",
    "cn": "元素周期表",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
    "image":"images/Periodic Table of the Elements.png";
  },
  {
    "en": "Constituents / Components",
    "cn": "组成成分",
    "tags": [
      "Chemistry",
      "General"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Brass",
    "cn": "黄铜",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "铜和锌混合的合金",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Separates",
    "cn": "分离",
    "tags": [
      "Chemistry",
      "General"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Oxide",
    "cn": "氧化物",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Residue",
    "cn": "残留物",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Isotopes",
    "cn": "同位素",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "Atoms of an element which has the same number of protons but different number of neutrons.",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Valence electrons",
    "cn": "价电子",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Subatomic particles",
    "cn": "亚原子粒子",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Proton",
    "cn": "质子",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "Carries a positive electric charge",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [
      "Neutron",
      "Electron"
    ],
    "classification": [],
    "example": ""
  },
  {
    "en": "Neutron",
    "cn": "中子",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "Has the same mass as a proton but carries no charge",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [
      "Proton",
      "Electron"
    ],
    "classification": [],
    "example": ""
  },
  {
    "en": "Electron",
    "cn": "电子",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "Carries a negative electric charge",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [
      "Proton",
      "Neutron"
    ],
    "classification": [],
    "example": ""
  },
  {
    "en": "Occupies",
    "cn": "占据",
    "tags": [
      "General"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Discrete",
    "cn": "分散",
    "tags": [
      "General"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Constant",
    "cn": "持续",
    "tags": [
      "General"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Combine",
    "cn": "结合",
    "tags": [
      "General",
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Alloys",
    "cn": "合金",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Ratio / Proportion",
    "cn": "比例",
    "tags": [
      "General",
      "Math",
      "Chemistry",
      "Physics"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Fixed",
    "cn": "固定(的)",
    "tags": [
      "General",
      "Biology",
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Definite",
    "cn": "固定(的)",
    "tags": [
      "General",
      "Chemistry"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Manner",
    "cn": "方式",
    "tags": [
      "General"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": ""
  },
  {
    "en": "Vary",
    "cn": "变化 / 各不相同 / 不一",
    "tags": [
      "General"
    ],
    "updated": "2026-01-22",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": "",
  },
  {
    "en": "Mitochondrion",
    "cn": "线粒体",
    "tags": ["Biology"],
    "bioType": "Organelle", // Cell / Microorganism / Organelle / Other
    "system": "Cellular Respiration",
    "function": "Produces ATP through respiration",
    "structure": "Double membrane",
    "image": "images/Animal_mitochondrion_diagram_en.svg",
    "imageAlt": "Source: Wikipedia",
    "gif": "https://media1.tenor.com/m/diyvRwYCBtUAAAAC/emu-emu-otori.gif",
    "video": "https://youtu.be/uuFNVow4ciw?si=Y8vpNIcxH689RyHB",
    "updated": "2026-01-25"
  },

  {
    "en": "Iodine Solution",
    "cn": "碘溶液",
    "tags": ["Experiment"],
    "function": "",
    "formula": "",
    "updated": "2026-01-26",
  },
  {
    "en": "Dropper",
    "cn": "滴管",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-26",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": "",
  },
  {
    "en": "Forceps",
    "cn": "点滴器",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-26",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "classification": [],
    "example": "",
  },
  {
    "en": "Microscope",
    "cn": "显微镜",
    "tags": [
      "Experiment",
    ],
    "updated": "2026-01-26",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "https://sciencenotes.org/wp-content/uploads/2025/04/Parts-of-a-Microscope-With-Labels.png",
    "imageAlt": "Source: Science Notes",
    "classification": [],
    "example": ""
  },
  {
    "en": "Beaker",
    "cn": "烧杯",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [],
    "example": ""
  },
  {
    "en": "Aim",
    "cn": "目的",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [],
    "example": ""
  },
  {
    "en": "Problem statement",
    "cn": "问题陈述",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [],
    "example": ""
  },
  {
    "en": "Hypothesis",
    "cn": "假设",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [],
    "example": ""
  },
  {
    "en": "Variables",
    "cn": "变数",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [
      {
        "en": "Manipulated variable",
        "cn": "操纵性变数"
      },
      {
        "en": "Responding variable",
        "cn": "反应性变数"
      },
      {
        "en": "Fixed variable",
        "cn": "固定性变数"
      }
    ],
    "example": ""
  },
  {
    "en": "Materials",
    "cn": "材料",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [],
    "example": ""
  },
  {
    "en": "Procedure",
    "cn": "步骤",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [],
    "example": ""
  },
  {
    "en": "Observation",
    "cn": "观察",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [],
    "example": ""
  },
  {
    "en": "Conclusion",
    "cn": "结论",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [],
    "example": ""
  },
  {
    "en": "Apparatus",
    "cn": "仪器",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [],
    "example": ""
  },
  {
    "en": "Discussion",
    "cn": "结论",
    "tags": [
      "Experiment"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [],
    "example": ""
  },
  {
    "en": "Relative Velocity",
    "cn": "相对速度",
    "tags": [
      "Physics"
    ],
    "updated": "2026-01-27",
    "enUsage": "",
    "usage": "",
    "formula": "The velocity of A relative to B: v_AB = v_A - v_B",
    "category": "",
    "similar": [],
    "image": "",
    "imageAlt": "",
    "classification": [],
    "example": ""
  },
  {
    "en": "Plant Cell",
    "cn": "植物细胞",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-27",
    "enUsage": "https://share.google/Fs3PV060MpBmQOi6B",
    "function": "",
    "classification": "",
    "similar": ["Animal Cell"],
    "image": "https://microbenotes.com/wp-content/uploads/2025/07/Structure-of-Plant-cell-1024x647.jpeg",
    "imageAlt": "Source: Microbe Notes"
  },
  {
    "en": "Animal Cell",
    "cn": "动物细胞",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-27",
    "similar": ["Plant Cell"],
  },
  {
    "en": "Cell",
    "cn": "细胞",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-28",
    "similar": ["Plant Cell", "Animal Cell"],
  },
  {
    "en": "Quadratic Equations in One Variable",
    "cn": "一元二次方程式",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-28",
    "similar": ["Quadratic Equations in Two Variables"],
    "formula": "ax² + bx + c = 0",
    "category": "Equation",
    "example": "x² + 2x + 1 = 0",
  },
  {
    "en": "Quadratic Equations in Two Variables",
    "cn": "二元二次方程式",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-28",
    "similar": ["Quadratic Equations in One Variable"],
    "formula": "ax² + bx + c = 0",
    "category": "Equation",
    "example": "x² + 2x + 1 = 0",
  },
  {
    "en": "Quadratic term",
    "cn": "二次项",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-28",
    "similar": ["Quadratic Equations in One Variable", "Quadratic Equations in Two Variables"],
    "formula": "ax²",
    "category": "Term",
    "example": "x²",
  },
  {
    "en": "Linear term",
    "cn": "一次项",
    "tags": [
      "Math"
    ],
    "similar": ["Quadratic Equations in One Variable", "Quadratic Equations in Two Variables"],
    "formula": "ax",
    "category": "Term",
    "example": "2x",
    "updated": "2026-01-28",
  },
  {
    "en": "Constant term",
    "cn": "常数项",
    "tags": [
      "Math"
    ],
    "similar": ["Quadratic Equations in One Variable", "Quadratic Equations in Two Variables"],
    "formula": "c",
    "category": "Term",
    "example": "1",
    "updated": "2026-01-28",
  },
  {
    "en": "Valence electron",
    "cn": "价电子",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Noble gas / Inert gas",
    "cn": "惰性气体",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Outermost shell",
    "cn": "最外层轨道",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Electron configuration",
    "cn": "电子排布",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Electron Arrangement",
    "cn": "电子排序",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Oxidation",
    "cn": "氧化",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Oxidation state",
    "cn": "氧化态",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Oxidation number",
    "cn": "氧化数",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Nomenclature",
    "cn": "命名法",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Hypothetical",
    "cn": "假想",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Hydrogenation",
    "cn": "氢化",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Reduction",
    "cn": "还原",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Alkali metal",
    "cn": "碱金属",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": ["Alkaline earth metal"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Alkaline earth metal",
    "cn": "碱土金属",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": ["Alkali metal"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Peroxides",
    "cn": "过氧化物",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": ["Superoxide"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Superoxide",
    "cn": "超氧化物",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": ["Peroxides"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Hydride",
    "cn": "氢化物",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": ["Hydrogenation"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Halogens",
    "cn": "卤素",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Chemical formula",
    "cn": "化学式",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Subscript",
    "cn": "下标",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": ["Superscript"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Superscript",
    "cn": "上标",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": ["Subscript"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Binary compound",
    "cn": "二元化合物",
    "enUsage": "Contain only 2 different elements",
    "usage": "只含两种不同元素",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Electrically neutral",
    "cn": "电中性",
    "enUsage": "The sum of positive and negative charges is zero",
    "usage": "正负电荷的总和为零",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Inorganic Compound",
    "cn": "无机化合物",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-01-28",
    "similar": [""],
    "classification": [
      {
        "en": "Covalent Compound",
        "cn": "共价化合物"
      },
      {
        "en": "Ionic Compound",
        "cn": "离子化合物"
      },
      {
        "en": "Acid",
        "cn": "酸"
      },
    ],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Perpendicular Bisector",
    "cn": "垂直平分线",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-29",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Living Process",
    "cn": "生命活动",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-29",
    "similar": [""],
    "classification": [
      {
        "en": "Cellular",
        "cn": "细胞活动"
      },
      {
        "en": "Non-cellular",
        "cn": "非细胞活动"
      },
    ],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Reproduction",
    "cn": "繁殖",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-29",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Nutrition",
    "cn": "营养",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-29",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Respiration",
    "cn": "气体交换",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-29",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Blood Circulation",
    "cn": "血液循环",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-29",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Perfect Square",
    "cn": "完全平方",
    "enUsage": "A number that can be expressed as the square of an integer",
    "usage": "",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Perfect Cube",
    "cn": "完全立方",
    "enUsage": "A number that can be expressed as the cube of an integer",
    "usage": "",
    "tags": [
      "Math"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Excretion",
    "cn": "排泄",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Locomotion",
    "cn": "动作",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "System",
    "cn": "系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology", "Computer"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Organ",
    "cn": "器官",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Tissue",
    "cn": "组织",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Plasme membrane",
    "cn": "细胞膜",
    "enUsage": "Made of plospholipid and protain",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Cytoplasm",
    "cn": "细胞质",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Nucleus(singular) / Nuclei(plural)",
    "cn": "细胞核",
    "enUsage": "Largest component in the cell \n Spherical, compressed and enclosed in a nuclear membrane with many pores \n The nucleus contains chromosomal, nucleolus and nucleoplasm",
    "function": "Controls the cell activities \n Has chromosomal that contain deoxyribonucleic acid (DNA). DNA determines the cell characteristics and metabolic function.",
    "image": "https://media.beckman.com/-/media/stock-images/resource-center/images/nucleus.jpg?rev=26b369d29b4b46c194b6c61b6e965b89",
    "imageAlt": "Beckman Coulter",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Protoplasm",
    "cn": "原生质",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Ribosome",
    "cn": "核糖体",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Endoplasmic reticulum",
    "cn": "内质网",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Golgi Body",
    "cn": "高尔基体",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Lysosome",
    "cn": "溶酶体",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Mitochondrion(singular) / Mitochondria(plural)",
    "cn": "线粒体",
    "enUsage": "Site of cellular respiration",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Centrioles",
    "cn": "中心粒",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Cellulose",
    "cn": "纤维素",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Chloroplast",
    "cn": "叶绿体",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Vacuole",
    "cn": "液泡",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "<i>Amoeba</i>",
    "cn": "变形虫",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "<i>Paramecium</i>",
    "cn": "草履虫",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Adipocyte",
    "cn": "脂肪细胞",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Columnar epithelium cell",
    "cn": "柱状上皮细胞",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Skeletal muscle cell",
    "cn": "骨骼肌细胞",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Cuboidal epithelium cell",
    "cn": "立方上皮细胞",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Neuron",
    "cn": "神经元",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "White blood cell",
    "cn": "白细胞",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": ["Red blood cell"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Red blood cell",
    "cn": "红细胞",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": ["White blood cell"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Ciliated epithelium cell",
    "cn": "纤毛上皮细胞",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Fibre",
    "cn": "纤维",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Cardiac muscle fibre",
    "cn": "心肌纤维",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-01-30",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Coincident",
    "cn": "重合",
    "tags": [
      "Math"
    ],
    "updated": "2026-02-01",
  },
  {
    "en": "Acid",
    "cn": "酸",
    "tags": [
      "Chemistry"
    ],
    "classification": [
      {
        "en": "Binary acids",
        "cn": "二次酸"
      },
      {
        "en": "Oxo-acids",
        "cn": "含氧酸"
      },
    ],
    "updated": "2026-02-03",
  },
  {
    "en": "Polar molecule",
    "cn": "极性分子",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-02-06",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Universal solvent",
    "cn": "万能载具",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-06",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Hydrolysis reaction",
    "cn": "水解反应",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-02-06",
    "similar": ["Condensation reaction"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Hydrogen Bond",
    "cn": "氢键",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Chemistry"
    ],
    "updated": "2026-02-06",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Cohesion",
    "cn": "凝聚力",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-06",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Adhesion",
    "cn": "附着力",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-06",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Buffer",
    "cn": "缓冲",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-06",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Monomer",
    "cn": "单体",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-06",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Polymer",
    "cn": "聚合物",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-06",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Condensation reaction",
    "cn": "缩合反应",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-06",
    "similar": ["Hydrolysis reaction"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Carbohydrate",
    "cn": "碳水化合物",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-06",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Lipid",
    "cn": "脂质",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Protein",
    "cn": "蛋白质",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Nucleic acid",
    "cn": "核酸",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Epidermis",
    "cn": "表皮",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Dermis",
    "cn": "真皮",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Collagen",
    "cn": "胶原蛋白",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Hypodermis",
    "cn": "皮下组织",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Adipocytes",
    "cn": "脂肪细胞",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Kidney",
    "cn": "肾脏",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Testes",
    "cn": "睾丸",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Ovaries",
    "cn": "卵巢",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Artery",
    "cn": "动脉",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Bladder",
    "cn": "膀胱",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Small intestine",
    "cn": "小肠",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Spinal cord",
    "cn": "脊髓",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Pancreas",
    "cn": "胰腺",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Skeletal muscle",
    "cn": "骨骼肌",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Digestive system",
    "cn": "消化系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Mouth", "Esophagus", "Stomach", "Small intestine", "Large intestine", "Rectum", "Anus"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Organ system",
    "cn": "器官系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Digestive system", "Endocrine system", "Nervous system", "Respiratory system", "Urinary system", "Reproductive system", "Circulatory system", "Immune system", "Integumentary system", "Musculoskeletal system"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Skeletal system",
    "cn": "骨骼系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Skull", "Vertebrae", "Rib cage", "Pelvis", "Limbs"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Reproductive system",
    "cn": "生殖系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Female reproductive system", "Male reproductive system"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Female reproductive system",
    "cn": "女性生殖系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Ovaries", "Fallopian tubes", "Uterus", "Cervix", "Vagina"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Male reproductive system",
    "cn": "男性生殖系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Testes", "Epididymis", "Vas deferens", "Seminal vesicles", "Prostate gland", "Urethra"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Nervous system",
    "cn": "神经系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Central nervous system", "Peripheral nervous system"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Central nervous system",
    "cn": "中枢神经系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Brain", "Spinal cord"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Peripheral nervous system",
    "cn": "周围神经系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Cranial nerves", "Spinal nerves"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Brain",
    "cn": "大脑",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Cerebrum", "Cerebellum", "Brainstem"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Cerebrum",
    "cn": "大脑皮层",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Frontal lobe", "Parietal lobe", "Temporal lobe", "Occipital lobe"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Cerebellum",
    "cn": "小脑",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Brainstem",
    "cn": "脑干",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Midbrain", "Pons", "Medulla oblongata"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Frontal lobe",
    "cn": "额叶",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Parietal lobe",
    "cn": "顶叶",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Temporal lobe",
    "cn": "颞叶",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Occipital lobe",
    "cn": "枕叶",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Limbic system",
    "cn": "边缘系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": ["Amygdala", "Hippocampus", "Hypothalamus", "Thalamus"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Amygdala",
    "cn": "杏仁核",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Hippocampus",
    "cn": "海马体",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Hypothalamus",
    "cn": "下丘脑",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Thalamus",
    "cn": "丘脑",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Basal ganglia",
    "cn": "基底神经节",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Cranial nerves",
    "cn": "脑神经",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Spinal nerves",
    "cn": "脊神经",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Neuron",
    "cn": "神经元",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Glial cell",
    "cn": "神经胶质细胞",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Synapse",
    "cn": "突触",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Neurotransmitter",
    "cn": "神经递质",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Action potential",
    "cn": "动作电位",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Resting potential",
    "cn": "静息电位",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Myelin sheath",
    "cn": "髓鞘",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Node of Ranvier",
    "cn": "郎飞结",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Dendrite",
    "cn": "树突",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Axon",
    "cn": "轴突",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Axon terminal",
    "cn": "轴突末梢",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Motor neuron",
    "cn": "运动神经元",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Sensory neuron",
    "cn": "感觉神经元",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Interneuron",
    "cn": "中间神经元",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Reflex arc",
    "cn": "反射弧",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Autonomic nervous system",
    "cn": "自主神经系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Sympathetic nervous system",
    "cn": "交感神经系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Parasympathetic nervous system",
    "cn": "副交感神经系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Endocrine system",
    "cn": "内分泌系统",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Hormone",
    "cn": "激素",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Gland",
    "cn": "腺体",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Pituitary gland",
    "cn": "垂体",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Thyroid gland",
    "cn": "甲状腺",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Adrenal gland",
    "cn": "肾上腺",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Pancreas",
    "cn": "胰腺",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Gonads",
    "cn": "性腺",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Pineal gland",
    "cn": "松果体",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Thymus",
    "cn": "胸腺",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Adrenaline",
    "cn": "肾上腺素",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Cortisol",
    "cn": "皮质醇",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Insulin",
    "cn": "胰岛素",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Glucagon",
    "cn": "胰高血糖素",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Thyroxine",
    "cn": "甲状腺素",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Melatonin",
    "cn": "褪黑素",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Growth hormone",
    "cn": "生长激素",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-09",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Phosplipid",
    "cn": "脂肪",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Nucleolus",
    "cn": "核仁",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "organelle",
    "cn": "细胞器",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Enzyme",
    "cn": "酶",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Lymph",
    "cn": "淋巴液",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Saccharide",
    "cn": "糖类",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": ["Triose","Pentose","Hexose"],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Triose",
    "cn": "三碳糖",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Pentose",
    "cn": "五碳糖",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Hexose",
    "cn": "六碳糖",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Sucrose",
    "cn": "蔗糖",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Actose",
    "cn": "乳糖",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Glucose",
    "cn": "葡萄糖",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Fructose",
    "cn": "果糖",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Galactose",
    "cn": "半乳糖",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Starch",
    "cn": "淀粉",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Triglyceride",
    "cn": "甘油三酯",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-23",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
  {
    "en": "Saturation",
    "cn": "饱和",
    "enUsage": "",
    "usage": "",
    "tags": [
      "Biology"
    ],
    "updated": "2026-02-24",
    "similar": [""],
    "classification": [""],
    "formula": "",
    "category": "",
    "example": "",
  },
]
